class PeopleController < ApplicationController
  def index
    @people = Person.alive_people
  end
end
