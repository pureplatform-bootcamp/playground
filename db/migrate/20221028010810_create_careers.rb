class CreateCareers < ActiveRecord::Migration[6.0]
  def change
    create_table :careers do |t|
      t.string :company_name, null: false
      t.string :title, null: false
      t.date :date_started, null: false
      t.date :date_ended, null: false
      t.decimal :annual_wage
  
      t.timestamps null: false
    end
  end
end
