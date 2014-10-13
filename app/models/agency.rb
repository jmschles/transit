class Agency < ActiveRecord::Base
  validates :mode, presence: %w(bus rail)
end
