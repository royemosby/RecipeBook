class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :email
  has_many :recipes
end
