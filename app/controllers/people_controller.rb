class PeopleController < ApplicationController
  def index
    @people = Person.all
  end
  def dead
    @dead = Person.where.not(death_date: nil)
  end
 def gender
    @gender = Person.female_only
 end
 def alive
  @alive = Person.alive_people
 end
 def male
   @male = Person.where(gender: "Male")
 end
  
  def create
    person = Person.new(person_params)
    unless person.save
      raise person.errors.full_messages
    end
    render json: {success: true, person: person}, status: :ok
  end
  
  private
    def person_params
      params.require(:person).permit(:first_name, :last_name, :birth_date, :gender, :email)
    end
end
