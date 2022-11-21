json.phones @phones do |phone|
  json.partial! "phone", p: phone
end
json.page params[:page] || 1
json.total @phones.count || 1

json.parse params[:orderBy]
json.parse params[:orderDirection]
json.parse params[:filters]
