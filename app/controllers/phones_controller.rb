class PhonesController < ApplicationController
def create
 phone = Phone.new(phone_params)
 unless phone.save
    raise phone.errors.full_messages.to_sentence
 end

    render json: {success: true}, status: :ok
end
private
 def phone_params
    params.require(:phone).permit(:person_id, :phone_number, :phone_type, :primary, :created_at, :updated_at)
end
end
