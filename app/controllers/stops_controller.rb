class StopsController < ApplicationController
  def index
    @agency     = Agency.find(params[:agency_id])
    @route      = @agency.routes.find(params[:route_id])
    @direction_id = params[:direction_id]
    if @direction_id
      @direction = @route.directions.find(@direction_id)
      @stops     = @direction.stops
    else
      @stops  = @route.stops
    end
  end

  def show
    @agency       = Agency.find(params[:agency_id])
    @route        = @agency.routes.find(params[:route_id])
    @direction_id = params[:direction_id]
    if @direction_id
      @direction = @route.directions.find(@direction_id)
      @stop      = @direction.stops.find(params[:id])
    else
      @stop      = @route.stops.find(params[:id])
    end
  end
end