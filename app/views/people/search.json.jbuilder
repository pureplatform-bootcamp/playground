json.people @results do |person|
	json.partial! 'person',p: person
end
