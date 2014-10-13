class CreateAgencies < ActiveRecord::Migration
  def change
    create_table :agencies do |t|
      t.string :name
      t.boolean :has_direction
      t.string :mode

      t.timestamps
    end
  end
end
