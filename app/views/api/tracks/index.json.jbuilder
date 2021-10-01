
@tracks.each do |track|
    json.set! track.id do 
        json.extract! track, :id, :artist_id, :title, :genre, :description, :caption, :private
    end
end
