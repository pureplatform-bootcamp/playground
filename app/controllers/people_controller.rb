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
end
