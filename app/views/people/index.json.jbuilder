json.people @people do |person|
  json.partial! options 'person' , p: person
end
