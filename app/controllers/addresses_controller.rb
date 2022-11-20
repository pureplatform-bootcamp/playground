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

  def index ()
    @addresses = Address.paginate(per_page: params[:per_page], page: params[:page])
    _sortable = params[:orderBy].present? ? "#{params[:orderBy]} #{orderDirection}" : "created_at desc"
    @addresses = Address.order(_sortable)

  end

  # Params
  private

  def address_params
    params.require(:address).permit(:person_id, :address1, :address2, :city, :state, :zip_code, :primary)
  end
  def orderDirection
    %w[asc desc].include?(params[:orderDirection]) ? params[:orderDirection] : "asc"
  end

end
