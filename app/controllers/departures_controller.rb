class DeparturesController < ApplicationController
  def index
    agency    = Agency.find(params[:agency_id])
    route     = Route.find(params[:route_id])
    stop      = Stop.find(params[:stop_id])

    direction_id = params[:direction_id]
    if direction_id
      direction = Direction.find(direction_id)
    end

    departures_list  = DepartureTimeList.new
    raw_xml_rsp      = departures_list.request_departure_times(agency, stop)
    raw_departures   = departures_list.parse_departure_times(raw_xml_rsp, route, direction, stop)
    @next_departures = DepartureTimeList.build_departures_json(raw_departures)

    render json: @next_departures
  end
end