class AddressesController < ApplicationController
  def create
    address = Address.new(address_params)
    unless address.save
      raise address.errors.full_messages
    end
    render json: {success: true, address: address}, status: :ok
  end


private
  def address_params
    params.require(:address).permit(:person_id, :address1, :city, :state, :zip_code)
  end
end
