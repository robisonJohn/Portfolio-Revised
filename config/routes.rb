Rails.application.routes.draw do
  resources :goodreads
  resources :books
  resources :authors
  resources :categories
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
