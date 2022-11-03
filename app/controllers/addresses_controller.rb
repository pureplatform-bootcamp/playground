class AddressesController < ApplicationController
# Actions
  def create
    address = Address.new(address_params)
    unless address.save
      raise address.errors.full_messages
    end
    render json: {success: true, address: address}, status: :ok
  end

  def update
    address = Address.find(params[:id])
    unless address == true
      raise address.errors.full_messages
    end
      address.update(
        person_id: params[:address][:person_id],
        address1: params[:address][:address1],
        city: params[:address][:city],
        state: params[:address][:state],
        zip_code: params[:address][:zip_code])
        render json: {success: true, address: address}, status: :ok
  end


# Params
private
  def address_params
    params.require(:address).permit(:person_id, :address1, :city, :state, :zip_code)
  end
end
