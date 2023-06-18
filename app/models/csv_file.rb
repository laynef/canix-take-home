class CsvFile < ApplicationRecord
  mount_uploaders :metadata, FileUploader
end
