class PeopleController < ApplicationController
  def index
    @people = Person.all
  end
  def alive
    @alive = Person.alive_people
  end
end
