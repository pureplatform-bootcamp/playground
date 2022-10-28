class CreatePhones < ActiveRecord::Migration[6.0]
  def change
    create_table :phones do |t|
      t.references :person, null: false, index: true
      t.string :phone_number, null: false
      t.string :phone_type, null: false
      t.boolean :primary, default: false

      t.timestamps null: false
    end
  end
end
