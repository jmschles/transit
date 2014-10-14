class Direction < ActiveRecord::Base
  belongs_to :route
  has_many   :stops
end
