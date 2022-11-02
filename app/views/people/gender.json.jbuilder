json.people @gender do |person|
    json.partial! 'person' , p: person
end