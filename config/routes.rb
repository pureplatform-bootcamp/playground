Rails.application.routes.draw do

 get '/people', :to => 'people#index'
 get '/people/dead', :to => 'people#dead'
 get '/people/Females', :to => 'people#gender'
 get '/people/alive', to: 'people#alive'
 get '/people/male', to: 'people#male'

end
