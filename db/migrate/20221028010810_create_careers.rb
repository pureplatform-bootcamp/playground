class CreateCareers < ActiveRecord::Migration[6.0]
  def change
    create_table :careers do |t|
      t.references :person, null: false, index: true
      t.string :company_name, null: false
      t.string :industry, null: false
      t.string :title, null: false
      t.date :date_started, null: false
      t.date :date_ended
      t.decimal :annual_wage
  
      t.timestamps null: false
    end
  end
end
