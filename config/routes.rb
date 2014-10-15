Rails.application.routes.draw do
  resources :agencies, defaults: { format: :json }, only: %i(index show) do
    resources :routes, defaults: { format: :json }, only: %i(index show) do
      resources :stops, defaults: { format: :json }, only: %i(index show) do
        resources :departures, defaults: { format: :json }, only: :index
      end
      resources :directions, only: [] do
        resources :stops, defaults: { format: :json }, only: %i(index show) do
          resources :departures, defaults: { format: :json }, only: :index
        end
      end
    end
  end
end