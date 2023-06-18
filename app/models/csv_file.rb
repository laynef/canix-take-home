class CsvFile < ApplicationRecord
  mount_uploader :metadata, FileUploader
end
