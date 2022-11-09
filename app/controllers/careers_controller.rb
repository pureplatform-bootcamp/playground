class CareersController < ApplicationController
    def index
    @career = Career.all
    end
    def create
        career = Career.new(career_params)
        unless career.save
          raise career.errors.full_messages
        end
        render json: {success: true, career: career}, status: :ok
      end
      def destroy
        @career = Career.find(params[:id])
        @career.destroy
        render json: {success: true}, status: :ok
      end
private
def career_params
    params.require(:career).permit(:person_id, :company_name, :industry, :title, :date_started)
end
end

