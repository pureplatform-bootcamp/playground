class Phone < ApplicationRecord
  belongs_to :person
  scope :ordered_by_person_id_asc, -> { reorder(person_id: :asc) }
  scope :ordered_by_person_id_desc, -> { reorder(person_id: :desc) }
end
