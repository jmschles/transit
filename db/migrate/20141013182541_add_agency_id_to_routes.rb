class AddAgencyIdToRoutes < ActiveRecord::Migration
  def change
    add_column :routes, :agency_id, :integer
  end
end
