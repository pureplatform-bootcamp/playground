class Person < ApplicationRecord
	# Assoscation
	has_many :addresses, dependent: :destroy
	has_many :phones, dependent: :destroy
	has_many :careers, dependent: :destroy
	# Validaion
	before_validation :generate_uuid
	# Scopes
	scope :alive_people, -> { where(death_date: nil)}

	# methodes
	private

		def generate_uuid
			self.uuid = SecureRandom.hex
		end
end
