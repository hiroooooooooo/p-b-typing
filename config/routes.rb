Rails.application.routes.draw do
  get 'users/show'
  devise_for :users
  root to: "games#index"

  resources :users, only: :show
  resources :games, only: [:index, :new, :create, :update] 
end