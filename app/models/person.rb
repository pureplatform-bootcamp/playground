class Person < ApplicationRecord
	
	has_many :addresses, dependent: :destroy
	has_many :phones, dependent: :destroy
	has_many :careers, dependent: :destroy
	
	before_validation :generate_uuid
	
	private
	
		def generate_uuid
			self.uuid = SecureRandom.hex
		end
end
