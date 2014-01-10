NewReader::Application.routes.draw do

  resources :feeds, only: [:index, :create] do
    resources :entries, only: [:index, :show]
  end

  resources :user

  root to: "feeds#index"
end
