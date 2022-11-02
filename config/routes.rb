Rails.application.routes.draw do
 get '/people', :to => 'people#index'
 get '/people/dead', :to => 'people#dead'
 get '/people/Females', :to => 'people#gender'
 get '/people/alive', to: 'people#alive'
 get '/addresses', :to => 'addresses#index'
end
