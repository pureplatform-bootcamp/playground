class CareersController < ApplicationController
    def create
        career = Career.new(career_params)
        unless career.save
          raise career.errors.full_messages
        end
        render json: {success: true, career: career}, status: :ok
      end
private
def career_params
    params.require(:careers).permit(:person_id, :company_name, :industry, :title, :date_started)
end
end

