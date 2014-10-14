class AddDirectionIdToStops < ActiveRecord::Migration
  def change
    add_column :stops, :direction_id, :integer
  end
end
