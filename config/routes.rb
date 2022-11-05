Rails.application.routes.draw do

	resources :people, only: [:index, :create] do
		collection do
			get :dead
			get :females
			get :alive
			get :male
			post :filter_by_state
		end
	end

  resources :books
end
