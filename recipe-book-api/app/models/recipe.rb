class Recipe < ApplicationRecord
  belongs_to :user

  validates :name, presence: true
  validates :description, presence: true
  validates :ingredients, presence: true
  validates :servings, numericality: {greater_than: 0}
  
end
