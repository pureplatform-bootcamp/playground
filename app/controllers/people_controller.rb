class PeopleController < ApplicationController


def index
  @people = Person.all
end

def male
  @male = Person.where(gender: "Male")
end

end
