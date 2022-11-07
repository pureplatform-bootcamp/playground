class Person < ApplicationRecord
	# Assoscation
	has_many :addresses, dependent: :destroy
	has_many :phones, dependent: :destroy
	has_many :careers, dependent: :destroy
	accepts_nested_attributes_for :addresses

  # Validaion
	before_validation :generate_uuid

	# Scopes
	scope :female_only, -> {where(gender: 'Female')}
	scope :alive_people, -> { where(death_date: nil)}

	# methodes
	private

		def generate_uuid
			self.uuid = SecureRandom.hex
		end

end
