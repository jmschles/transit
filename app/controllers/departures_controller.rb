class DeparturesController < ApplicationController
  def index
    agency    = Agency.find(params[:agency_id])
    route     = Route.find(params[:route_id])
    direction = Direction.find(params[:direction_id])
    stop      = Stop.find(params[:stop_id])

    departures_list  = DepartureTimeList.new
    raw_xml_rsp      = departures_list.request_departure_times(agency, stop)
    @next_departures = departures_list.parse_departure_times(raw_xml_rsp, route, direction, stop)

    render json: @next_departures
  end
end