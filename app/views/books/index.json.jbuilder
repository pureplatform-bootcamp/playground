json.books @books do |book|
	json.partial! 'book',p: book
end
json.page params[:page]  || 1
json.total @books.count  || 1
