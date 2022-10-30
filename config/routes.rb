Rails.application.routes.draw do
 get '/people', :to => 'people#index'
 get '/people/dead', :to => 'people#dead'
end
