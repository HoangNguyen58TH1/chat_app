Rails.application.routes.draw do
  require 'sidekiq/web'
  root "messages#index"
  resources :messages, only: [ :index, :create ]

  mount Sidekiq::Web => '/sidekiq'
end
