Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "books#app"
  get '/books', to: 'books#index'

  delete '/books/:id', to: 'books#destroy' #look at books controller destoyer

end


