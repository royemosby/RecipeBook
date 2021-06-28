Rails.application.routes.draw do

  #TODO: clean up routes
  resources :recipes
  resources :users

  post '/login', to: 'auth#create'
end
