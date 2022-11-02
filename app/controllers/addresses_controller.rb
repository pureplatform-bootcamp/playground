class AddressesController < ApplicationController
    def index
        @address = address.all
      end
end
