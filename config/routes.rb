Rails.application.routes.draw do
  get '/people', :to => 'people#index'
  get '/people/Females', :to => 'people#gender'
end
