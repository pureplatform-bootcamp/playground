json.people @alive do |person|
	json.partial! 'person', p: person
end
