class DepartureTimeList
  TOKEN = YAML.load_file('config/tokens.yml')["511_api_token"]
  BASE_511_URL = 'http://services.my511.org/Transit2.0'

  def request_departure_times(agency, stop)
    agency_name = replace_amps(agency.name)
    stop_name   = replace_amps(stop.name)
    raw_req_url     = "#{BASE_511_URL}/GetNextDeparturesByStopName.aspx?token=#{TOKEN}&agencyName=#{agency_name}&stopName=#{stop_name}"
    encoded_req_url = URI.encode(raw_req_url)
    RestClient.get(encoded_req_url)
  end

  def parse_departure_times(raw_xml_rsp, route, direction, stop)
    parsed_rsp      = Nokogiri.parse(raw_xml_rsp)
    route_xml       = parsed_rsp.search('Route').select { |r| r.attributes["Name"].value == route.name }.first
    if direction
      direction_xml = route_xml.search('RouteDirection').select { |d| d.attributes["Name"].value == direction.name }.first
      stop_xml      = direction_xml.search('Stop').select { |s| s.attributes["StopCode"].value == stop.code }.first
    else
      stop_xml      = route_xml.search('Stop').select { |s| s.attributes["StopCode"].value == stop.code }.first
    end

    stop_xml.search('DepartureTime').map(&:inner_html)
  end

  def replace_amps(str)
    str.gsub('&', '%26')
  end

  def self.build_departures_json(departures_list)
    departures_list.map { |d| { departure: d } }
  end
end