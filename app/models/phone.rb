class Phone < ApplicationRecord
  belongs_to :person
  scope :filter_by_person_id, ->(person_id) { where person_id: person_id }
  accepts_nested_attributes_for :person
end
