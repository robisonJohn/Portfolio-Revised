class AddcategoriesNameToBooks < ActiveRecord::Migration[6.1]
  def change
    add_column :books, :category_name, :string
  end
end
