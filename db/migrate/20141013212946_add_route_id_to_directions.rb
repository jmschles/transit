class AddRouteIdToDirections < ActiveRecord::Migration
  def change
    add_column :directions, :route_id, :integer
  end
end
