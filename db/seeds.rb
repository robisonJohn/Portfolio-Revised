# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
=begin
Category.destroy_all
Author.destroy_all
Book.destroy_all
=end

@science_fiction = Category.create(name: 'Science Fiction')
@computer_science = Category.create(name: 'Computer Science')
@math_and_physics = Category.create(name: 'Mathematics and Physics')
@business = Category.create(name: 'Business')
@social_sciences = Category.create(name: 'Social Sciences')
@alt_media = Category.create(name: 'Other Media Forms')

# to start, let's work with the following authors
# Peter Thiel
@thiel = Author.create(name: 'Peter Thiel', country_of_origin: 'Germany', category_id: @business.id)
# Kurt Vonnegut
@vonnegut = Author.create(name: 'Kurt Vonnegut', country_of_origin: 'United States', category_id: @science_fiction.id)
# Frank Herbert
@herbert = Author.create(name: 'Frank Herbert', country_of_origin: 'United States', category_id: @science_fiction.id)
# Ray Bradbury
@bradbury = Author.create(name: 'Ray Bradbury', country_of_origin: 'United States', category_id: @science_fiction.id)
# Isaac Asimov
@asimov = Author.create(name: 'Isaac Asimov', country_of_origin: 'Russia', category_id: @science_fiction.id)
# Neal Stephenson
@stephenson = Author.create(name: 'Neal Stephenson', country_of_origin: 'United States', category_id: @science_fiction.id)
# Jordan Ellenberg
# @ellenberg = Author.create(name: 'Jordan Ellenberg', country_of_origin: 'United States', category_id: @math_and_physics.id)
# George Gilder
@gilder = Author.create(name: 'George Gilder', country_of_origin: 'United States', category_id: @computer_science.id)
# Yuval Noah Harari
@harari = Author.create(name: 'Yuval Noah Harari', country_of_origin: 'Israel', category_id: @social_sciences.id)
# Baran bo Odar and Jantje Friese
@odar_and_friese = Author.create(name: 'Baran bo Odar and Jantje Friese', country_of_origin: 'Germany', category_id: @alt_media.id)

@feynman = Author.create(name: 'Richard Feynman', country_of_origin: 'United States', category_id: @math_and_physics.id)

@zero_to_one = Book.create(
    title: "Zero to One", 
    description: "A book written by Blake Masters, a former student of Thiel at Stanford, on Thiel's comments regarding the
    philosophy of building a business.", 
    review: "By far one of the most impactful books I have ever read, Zero to One sparked my passion for technology and 
    entreprenuership and enabled me to focus on what I believed to be truly important in this world. No single thinker has 
    influenced me as much as Thiel has. Reading Zero to One again and again feels like having a conversation with the best 
    friend I never had.", 
    img_url: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Zero_to_One.jpg/220px-Zero_to_One.jpg", 
    publication_date: "2014",
    author: @thiel,
    category: @business,
    author_name: "Peter Thiel",
    category_name: "Business"
)
@sirens_of_titan = Book.create(
    title: "The Sirens of Titan", 
    description: "A story that details how the entire summation of humanity was oriented towards an alien species (the Tralfamadorians) finding
    a small missing part for their space ship so that they may return home", 
    review: "Vonnegut constantly forces me to question the degree of agency humans possess. Christian moral theology 
    manifested as a contemporary political construct dicates the fundamental supremacy of agency and free will; 
    whereas post-Modernist thinkers believe agency is largely bounded (if not altogether dependent on) externalities. 
    I am much more inclined to believe we humans possess necessary degrees of freedom within
    our actions; but Vonnegut forces me to question how naive that supposition may in fact be.", 
    img_url: "https://upload.wikimedia.org/wikipedia/en/5/57/TheSirensofTitan%281959%29.jpg", 
    publication_date: "1959",
    author: @vonnegut,
    category: @science_fiction,
    author_name: "Kurt Vonnegut",
    category_name: "Science Fiction"
)
@dune = Book.create(
    title: "Dune", 
    description: "Tells the story of Paul Atreides, a young boy who allies himself with the Dune people to destroy the evil Baron Harkonnen who killed his father and stole away his ancestral birthright.", 
    review: "A book that combines messianic myths, ecology, futuristic technology, and epic battles; one of my all-time favorite
    books, Dune has fueled my interest in building cities that fuse ecological principles with modern infrastructure so that 
    Earth does not befall the same fate as the Fremen's homeworld.", 
    img_url: "https://images.penguinrandomhouse.com/cover/9780593099322", 
    publication_date: "1965",
    author: @herbet,
    category: @science_fiction,
    author_name: "Frank Herbert",
    category_name: "Science Fiction"
)

@martian_chronicles = Book.create(
    title: "The Martian Chronicles", 
    description: " ", 
    review: " ", 
    img_url: "https://images-na.ssl-images-amazon.com/images/I/518WxaFw0rL.jpg",
    publication_date: " ",
    author: @bradbury,
    category: @science_fiction,
    author_name: "Ray Bradbury",
    category_name: "Science Fiction"
)
@foundation = Book.create(
    title: "Foundation", 
    description: " ", 
    review: " ", 
    img_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1417900846l/29579.jpg", 
    publication_date: " ",
    author: @asimov,
    category: @science_fiction,
    author_name: "Isaac Asimov",
    category_name: "Science Fiction"

)
@snow_crash = Book.create(
    title: "Snow Crash", 
    description: " ", 
    review: " ", 
    img_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327937330l/6303927.jpg", 
    publication_date: " ",
    author: @stephenson,
    category: @science_fiction,
    author_name: "Neal Stephenson",
    category_name: "Science Fiction"
)

@life_after_google = Book.create(
    title: "Life After Google", 
    description: "", 
    review: "", 
    img_url: "https://images-na.ssl-images-amazon.com/images/I/611dc2sHZoL.jpg", 
    publication_date: "",
    author: @gilder,
    category: @computer_science,
    author_name: "George Gilder",
    category_name: "Computer Science"
)
@sapiens = Book.create(
    title: "Sapiens", 
    description: " ", 
    review: " ", 
    img_url: "https://images-na.ssl-images-amazon.com/images/I/41+lolL22gL._SX314_BO1,204,203,200_.jpg", 
    publication_date: " ",
    author: @harari,
    category: @social_sciences,
    author_name: "Yuval Noah Harari",
    category_name: "Social Sciences"
)
@dark = Book.create(
    title: "Dark", 
    description: " ", 
    review: " ", 
    img_url: "https://images-na.ssl-images-amazon.com/images/I/81oWDX24u%2BL._SL1200_.jpg", 
    publication_date: " ",
    author: @odar_and_friese,
    category: @alt_media,
    author_name: "Baran bo Odar and Jantje Friese",
    category_name: "Other Media Forms"
)

@surely_joking = Book.create(
    title: "Surely you're joking, Mr. Feynman", 
    description: " ", 
    review: " ", 
    img_url: "https://pbs.twimg.com/media/EQvypQXUUAATrhT.jpg", 
    publication_date: " ",
    author: @feynman,
    category: @math_and_physics,
    author_name: "Richard Feynman",
    category_name: "Mathematics and Physics"
)

puts "#{Book.count} books created!"
