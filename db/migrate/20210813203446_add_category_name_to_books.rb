class AddCategoryNameToBooks < ActiveRecord::Migration[6.1]
  def change
    add_column :books, :category, :string
  end
end
