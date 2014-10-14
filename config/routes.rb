Rails.application.routes.draw do
  resources :agencies, defaults: { format: :json }, only: %i(index show) do
    resources :routes, defaults: { format: :json }, only: %i(index show) do
      resources :stops, defaults: { format: :json }, only: %i(index show)
      resources :directions, only: [] do
        resources :stops, defaults: { format: :json }, only: %i(index show)
      end
    end
  end
end