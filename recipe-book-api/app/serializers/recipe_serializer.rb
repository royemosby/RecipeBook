class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :ingredients, :instructions, :servings
  has_one :user
end
