Rails.application.routes.draw do
  get '/people', :to => 'people#index'
  get '/people/Females', :to => 'people#gender'
  get '/people/alive', to: 'people#alive'
end
