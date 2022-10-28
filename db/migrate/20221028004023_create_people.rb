class CreatePeople < ActiveRecord::Migration[6.0]
  def change
    create_table :people do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.date :birth_date, null: false
      t.date :death_date
      t.string :gender
      t.string :email
      t.string :uuid, null: false
      t.datetime :deleted_at
      t.timestamps null: false
    end
  end
end
