json.people @filter do |person|
    json.partial! 'person' , p: person
end
