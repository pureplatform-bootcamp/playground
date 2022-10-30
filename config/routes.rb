Rails.application.routes.draw do
	get '/people', :to => 'people#index'
  get '/people/alive', to: 'people#alive'
end
