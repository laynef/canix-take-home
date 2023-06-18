class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.float :weight
      t.string :sku, null: false, index: { unique: true }
      t.string :unit
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
