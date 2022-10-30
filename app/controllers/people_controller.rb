class PeopleController < ApplicationController

def gender
    @gender = Person.female_only
end

def index
   @people = Person.all
 end
end
