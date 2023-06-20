class Api::V1::ProductsController < ApplicationController
    def index
        @products = Product.all.map do |product|
            {
                date: product.created_at,
                product_id: product_id(product.category.sym, product.sku),
                weight: product.weight,
                unit: product.unit,
            }
        end
        render json: @products
    end

    def upload
        @files = File.new(file_params)
        if @files.save
            upsert_files()
            render json: { message: 'The file(s) successfully uploaded!' }             
        else
            render json: { errors: @files.errors }, status: unprocessable_entity        
        end
    end

    private

    def file_params
        params.permit(:metadata)
    end

    def product_id(sym, sku)
        "#{sym}-#{sku}"
    end

    def upsert_files
        @files.each do |file|
            output = File.read(file.url)
            csv_file = CSV.parse(output, :headers => true)

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
    end
end
