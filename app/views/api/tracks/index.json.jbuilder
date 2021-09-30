json.tracks do 
    @tracks.each do |track|
        json.extract! track, :id, :artist_id, :title, :genre, :description, :caption
    end
end