class AddressesController < ApplicationController
  # Actions
  def create
    address = Address.new(address_params)
    unless address.save
      raise address.errors.full_messages.to_sentence
    end
      render json: {success: true}, status: :ok  
    end
  def update
    address = Address.find(params[:id])
    address.update(address_params)
    render json: {success: true}, status: :ok  
  end

  def destroy
    address = Address.find(params[:id])
    address.destroy
    render json: { success: true }, status: :ok
  end

  def index
    @addresses = Address.all
  end

  # Params
  private

  def address_params
    params.require(:address).permit(:person_id, :address1, :address2, :city, :state, :zip_code, :primary)
  end
end
