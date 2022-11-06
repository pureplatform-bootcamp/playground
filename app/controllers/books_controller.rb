class BooksController < ApplicationController

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

  def update
    @book = Book.find(params[:id])

    if @book.present?
      @book.update(book_params)
      render json: @book, status: :ok
    end
  end

  def destroy
    @book = Book.find(params[:id])

    if @book.present?
      @book.delete
      render json: {}, status: :no_content
    end
  end

  private
    def book_params
      params.permit(:book_name)
    end

end
