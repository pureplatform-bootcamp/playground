Rails.application.routes.draw do
  resources :people do
    collection do
      get 'male'
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
