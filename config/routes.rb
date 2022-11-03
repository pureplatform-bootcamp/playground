Rails.application.routes.draw do

	resources :people, only: [:index, :create] do
		collection do
			get :dead
			get :females
			get :alive
			get :male
			get :search
		end
	end

  resources :books
	resources :addresses
  get 'people/search/:search_term', to: 'people#search'
end
