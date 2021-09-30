# == Schema Information
#
# Table name: tracks
#
#  id          :bigint           not null, primary key
#  artist_id   :integer          not null
#  title       :string           not null
#  genre       :string
#  description :text
#  caption     :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Track < ApplicationRecord

    belongs_to :artist, 
    foreign_key: :artist_id,
    class_name: :User

end
