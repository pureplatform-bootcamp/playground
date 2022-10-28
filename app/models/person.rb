class Person < ApplicationRecord
	
	has_many :addresses, dependent: :destroy
	has_many :phones, dependent: :destroy
	has_many :careers, dependent: :destroy
	
	
end
