class RoutesController < ApplicationController
  respond_to :json

  def index
    @agency = Agency.find(params[:agency_id])
    @routes = @agency.routes
    render :json => @routes
  end

  def show
    @agency = Agency.find(params[:agency_id])
    @route  = @agency.routes.find(params[:id])
    render :json => @route
  end
end