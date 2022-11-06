class AddressesController < ApplicationController
  # Actions
  def create
    address = Address.new(address_params)
    unless address.save
      raise address.errors.full_messages
    end
    render json: { success: true, address: address }, status: :ok
  end

  def update
    address = Address.find(params[:id])
    unless address == true
      raise address.errors.full_messages
    end
    address.update(address_params)
    render json: { success: true, address: address }, status: :ok
  end

  def destroy
    address = Address.find(params[:id])
    address.destroy
    flash[:success] = "The to-do item was successfully destroyed."
    render json: { success: true }, status: :ok
  end

  def index
    @addresses = Address.all
  end

  # Params
  private

  def address_params
    params.require(:address).permit(:person_id, :address1, :city, :state, :zip_code)
  end
end
