class AddRouteIdToStops < ActiveRecord::Migration
  def change
    add_column :stops, :route_id, :integer
  end
end
