class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.integer :artist_id, null: false
      t.string :title, null: false
      t.string :genre 
      t.text :description
      t.string :caption
      t.timestamps
    end

    add_index :tracks, :title
  end
end
