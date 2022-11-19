class PhonesController < ApplicationController
  def index
    @phones = Phone.paginate(per_page: params[:per_page], page: params[:page])
    _sortable = params[:orderBy].present? ? "#{params[:orderBy]} #{orderDirection}" : "created_at desc"
    @phones = Phone.order(_sortable)
  end

  def update
    @phones = Phone.find(params[:id])
    @phones.update(person_id: params[:phone][:person_id], phone_number: params[:phone][:phone_number], phone_type: params[:phone][:phone_type], primary: params[:phone][:primary])
    render json: { success: true }, status: :ok
  end

  def create
    @phone = Phone.new(phone_params)
    unless @phones.save
      raise @phones.errors.full_messages.to_sentence
    end

    render json: { success: true }, status: :ok
  end

  def destroy
    @phones = Phone.find(params[:id])
    Phone.destroy(params[:id])
    render json: { success: true }, status: :ok
  end

  private

  def orderDirection
    %w[asc desc].include?(params[:orderDirection]) ? params[:orderDirection] : "asc"
  end

  private

  def phone_params
    params.require(:phone).permit(:person_id, :phone_number, :phone_type, :primary)
  end
end
