class BooksController < ApplicationController

  def app


    render component: "App"
  end

  def index
    @books = Book.all

    render json: @books
  
  end

  def detstroy
    book = Book.find(params[:id])
    book.destroy

    redirect_to root_path
  end


end

 

