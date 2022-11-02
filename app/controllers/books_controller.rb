class BooksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
    @book = Book.new
  end

  def create
    @book = Book.new(book_params)

    respond_to do |format|
      if @book.save
        format.json { render json: @book, status: :created, location: @book }
      else
        format.json { render json: @book.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    def book_params
      params.permit(:book_name)
    end

end
