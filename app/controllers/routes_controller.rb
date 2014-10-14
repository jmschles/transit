class RoutesController < ApplicationController
  def index
    @agency = Agency.find(params[:agency_id])
    @routes = @agency.routes
  end

  def show
    @agency = Agency.find(params[:agency_id])
    @route  = @agency.routes.find(params[:id])
  end
end