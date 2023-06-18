class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products, id: :string do |t|
      t.decimal :weight
      t.string :unit
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
