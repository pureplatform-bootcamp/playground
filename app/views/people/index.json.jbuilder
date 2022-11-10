json.people @people do |person|
	json.partial! 'person',p: person
end
json.page params[:page]  || 1
json.total @people.count  || 1
