class AgenciesController < ApplicationController
  respond_to :json

  def index
    @agencies = Agency.all
    render :json => @agencies
  end

  def show
    @agency = Agency.find(params[:id])
    render :json => @agency
  end
end