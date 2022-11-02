Rails.application.routes.draw do
    resources :addresses, only: [:index]
    resources :phones, only: [:index, :create]
	resources :people, only: [:index, :create] do
		collection do
			get :dead
			get :females
			get :alive
			get :male
		end
	end
resources :books
end
