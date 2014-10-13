TOKEN           = '4f76f96f-9ad4-4747-9ac0-e89035de7bce'
xml_rsp         = RestClient.get("http://services.my511.org/Transit2.0/GetAgencies.aspx?token=#{TOKEN}")
parsed_xml_rsp  = Nokogiri.parse(xml_rsp)
agencies        = parsed_xml_rsp.first_element_child.first_element_child.element_children

def to_boolean(str)
  str == "True"
end

agencies.each do |agency|
  agency_name = agency.attributes["Name"].value
  unless Agency.find_by_name(agency_name).present?
    new_agency = Agency.create({
      name:           agency_name,
      mode:           agency.attributes["Mode"].value.downcase,
      has_direction:  to_boolean(agency.attributes["HasDirection"].value)
    })
  end
end