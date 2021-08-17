class CreateNovels < ActiveRecord::Migration[6.1]
  def change
    create_table :novels do |t|
      t.string :title
      t.string :img_url
      t.string :publication_date
      t.string :author_name
      t.string :category_name

      t.timestamps
    end
  end
end
