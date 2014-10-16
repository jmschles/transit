class DirectionsController < ApplicationController
  def index
    @route      = Route.find(params[:route_id])
    @directions = @route.directions
  end

  def show
    @route     = Route.find(params[:route_id])
    @direction = @route.directions.find(params[:id])
  end
end