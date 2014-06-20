Rails.application.routes.draw do
  root to: 'homes#index'
  resource :life, only: [:show]
  resource :about, only: [:show]
  resource :work, only: [:show]

end
