collection :@routes
attributes :id, :name, :code, :agency_id
child :directions do
  attributes :id, :name, :code
end