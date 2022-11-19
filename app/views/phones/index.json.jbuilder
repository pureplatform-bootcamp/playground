json.phones @phones do |phone|
  json.partial! "phone", p: phone
end
json.page params[:page] || 1
json.total @phones.count || 1

json.page params[:orderBy]
json.page params[:orderDirection]
