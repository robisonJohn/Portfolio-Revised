class CreateAuthors < ActiveRecord::Migration[6.1]
  def change
    create_table :authors do |t|
      t.string :name
      t.string :country_of_origin
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
