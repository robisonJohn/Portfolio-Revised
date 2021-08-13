class AddAuthorsNameToBooks < ActiveRecord::Migration[6.1]
  def change
    add_column :books, :author_name, :string
  end
end
