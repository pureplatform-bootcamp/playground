class PeopleController < ApplicationController
def index
    @people = Person.all
    end
def dead
        @dead = Person.where.not(death_date: nil) 
        end
end
