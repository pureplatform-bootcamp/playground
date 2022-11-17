json.phones @phone do |phone|
  json.partial! "phone", p: phone
end
json.page params[:page] || 1
json.total @phone.count || 1
