class Agency < ActiveRecord::Base
  has_many :routes

  validates :mode, presence: %w(bus rail)
end
