class CreateCsvFiles < ActiveRecord::Migration[7.0]
  def change
    create_table :csv_files do |t|
      t.string :metadata
      t.string :filename
      t.string :store_dir
      t.string :url

      t.timestamps
    end
  end
end
