# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'csv'

Dir.glob("#{Rails.root}/test/fixtures/files/*.csv").each do |file_path|
    file = File.read(file_path)
    csv_file = CSV.parse(file, :headers => true)

    csv_file.each do |row|
        product_id = row['product_id']
        category_symbol, sku = product_id.split('-')

        Category.upsert({ sym: category_symbol }, unique_by: :sym)
        Product.upsert({
            sku: sku, 
            weight: row['weight'].to_f,
            unit: row['unit'],
            category_id: Category.find_by(sym: category_symbol).id, 
            created_at: row['date']
        }, unique_by: :sku)
    end
end