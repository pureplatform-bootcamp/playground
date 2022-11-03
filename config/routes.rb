Rails.application.routes.draw do

	resources :people, only: [:index, :create] do
		collection do
			get :dead
			get :females
			get :alive
			get :male
		end
	end

  resources :books
	resources :addresses
end
