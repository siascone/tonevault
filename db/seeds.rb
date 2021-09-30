# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Track.delete_all
User.delete_all

guest = User.create!(username: 'guest', password: 'password', email: 'guest@guest.com', age: 32)

Track.create!(artist_id: guest.id, title: 'Super awesome song', genre: 'Super Rock', description: 'A super rockin super awesome song', caption: 'Rock your socks off!')