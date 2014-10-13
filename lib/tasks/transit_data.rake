TOKEN           = '4f76f96f-9ad4-4747-9ac0-e89035de7bce'
BASE_511_URL    = 'http://services.my511.org/Transit2.0'

def to_boolean(str)
  str == "True"
end

namespace :transit_data do
  desc "Load agency data into the database"
  task agencies: :environment do
    xml_rsp         = RestClient.get("#{BASE_511_URL}/GetAgencies.aspx?token=#{TOKEN}")
    parsed_xml_rsp  = Nokogiri.parse(xml_rsp)
    agencies        = parsed_xml_rsp.first_element_child.first_element_child.element_children
    agencies.each do |agency|
      agency_name   = agency.attributes["Name"].value
      unless Agency.find_by_name(agency_name).present?
        new_agency  = Agency.create({
          name:           agency_name,
          mode:           agency.attributes["Mode"].value.downcase,
          has_direction:  to_boolean(agency.attributes["HasDirection"].value)
        })
      end
    end
  end

  desc "Load route data into the database"
  task routes: :environment do
    Agency.all.each do |agency|
      raw_url         = "#{BASE_511_URL}/GetRoutesForAgency.aspx?token=#{TOKEN}&agencyName=#{agency.name}"
      encoded_url     = URI.encode(raw_url)
      xml_rsp         = RestClient.get(encoded_url)
      parsed_xml_rsp  = Nokogiri.parse(xml_rsp)
      # FIXME: there must be a better way...
      routes          = parsed_xml_rsp.first_element_child.first_element_child.first_element_child.first_element_child.element_children
      routes.each do |route|
        route_name = route.attributes["Name"].value
        new_route = agency.routes.create({
          name: route_name,
          code: route.attributes["Code"].value
        })
        if Route.find_by_name(route_name).agency.has_direction?
          raw_directions = route.first_element_child.element_children
          raw_directions.each do |raw_direction|
            new_route.directions.create({
              name: raw_direction.attributes["Name"].value,
              code: raw_direction.attributes["Code"].value
            })
          end
        end
      end
    end
  end

  desc "Load stop data into the database"
  task stops: :environment do
    base_stops_url = "#{BASE_511_URL}/GetStopsForRoute.aspx?token=#{TOKEN}&routeIDF="
    Route.all.each do |route|
      if route.directions.present?
        route.directions.each do |dir|
          route_idf       = "#{route.agency.name}~#{route.code}~#{dir.code}"
          raw_url         = "#{base_stops_url}#{route_idf}"
          encoded_url     = URI.encode(raw_url)
          xml_rsp         = RestClient.get(encoded_url)
          parsed_xml_rsp  = Nokogiri.parse(xml_rsp)
          parsed_xml_rsp.xpath("//Stop").each do |stop|
            route.stops.create({
              name: stop.attributes["name"].value,
              code: stop.attributes["StopCode"].value
            })
          end
        end
      else
        route_idf       = "#{route.agency.name}~#{route.code}"
        raw_url         = "#{base_stops_url}#{route_idf}"
        encoded_url     = URI.encode(raw_url)
        xml_rsp         = RestClient.get(encoded_url)
        parsed_xml_rsp  = Nokogiri.parse(xml_rsp)
        parsed_xml_rsp.xpath("//Stop").each do |stop|
          route.stops.create({
            name: stop.attributes["name"].value,
            code: stop.attributes["StopCode"].value
          })
        end
      end
    end
  end

  desc "Load all data, preparing the database for use"
  task all: :environment do
    Rake::Task["transit_data:agencies"].invoke
    Rake::Task["transit_data:routes"].invoke
    Rake::Task["transit_data:stops"].invoke
  end

end
