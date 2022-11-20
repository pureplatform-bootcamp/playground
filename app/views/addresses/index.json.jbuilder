json.addresses @addresses do |address|
	json.partial! 'address',a: address
end
json.page params[:page]  || 1
json.total @addresses.count  || 1

json.page params[:orderBy]
json.page params[:orderDirection]
