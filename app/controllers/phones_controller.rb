class PhonesController < ApplicationController
  def index
    @phones = Phone.all
  end

  def update
    phone = Phone.find(params[:id])
    phone.update(person_id: params[:phone][:person_id], phone_number: params[:phone][:phone_number], phone_type: params[:phone][:phone_type], primary: params[:phone][:primary])
    render json: { success: true }, status: :ok
  end

  def create
    phone = Phone.new(phone_params)
    unless phone.save
      raise phone.errors.full_messages.to_sentence
    end

    render json: { success: true }, status: :ok
  end

  private

  def phone_params
    params.require(:phone).permit(:person_id, :phone_number, :phone_type, :primary)
  end
end
