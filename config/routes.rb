Rails.application.routes.draw do
    resources :addresses, only: [:index]
    resources :phones, only: [:index, :create, :update]
	resources :people, only: [:index, :create] do
		collection do
			get :dead
			get :females
			get :alive
			get :male
      get :search
			post :filter_by_state
		end
	end
resources :books
resources :careers

get 'people/search/:search_term', to: 'people#search'
end
