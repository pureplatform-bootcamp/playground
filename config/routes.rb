Rails.application.routes.draw do
	get '/people', :to => 'people#index'
end
