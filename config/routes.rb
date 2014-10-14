Rails.application.routes.draw do
  resources :agencies, only: %i(index show) do
    resources :routes, only: %i(index show) do
      resources :stops, only: %i(index show)
      resources :directions, only: [] do
        resources :stops, only: %i(index show)
      end
    end
  end
end