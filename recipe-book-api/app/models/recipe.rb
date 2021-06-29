class Recipe < ApplicationRecord
  belongs_to :user

  validates :name, presence: true
  validates :description, presence: true
  validates :serves, numericality: {greater_than: 0}
  
end
