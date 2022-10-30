json.people @people do |person|
  json.partial! 'person' , p: person
end
