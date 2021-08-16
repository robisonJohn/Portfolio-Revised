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
# business

# Peter Thiel
@thiel = Author.create(name: 'Peter Thiel', country_of_origin: 'Germany', category_id: @business.id)
# Ben Horowitz
@horowitz = Author.create(name: 'Ben Horowitz', country_of_origin: 'United States', category_id: @business.id)
# Geoffrey Moore
@moore = Author.create(name: 'Geoffrey Moore', country_of_origin: 'United States', category_id: @business.id)
# Benjamin Graham
@graham = Author.create(name: 'Benjamin Graham', country_of_origin: 'United States', category_id: @business.id)
# Ayn Rand
@rand = Author.create(name: 'Ayn Rand', country_of_origin: 'Russia', category_id: @business.id)
# Daniel Kahneman
@kahneman = Author.create(name: 'Daniel Kahneman', country_of_origin: 'Israel', category_id: @business.id)
# Ray Dalio
@dalio = Author.create(name: 'Ray Dalio', country_of_origin: 'United States', category_id: @business.id)
# Walter Isaacson
@isaacson = Author.create(name: 'Walter Isaacson', country_of_origin: 'United States', category_id: @business.id)
# Adam Grant
@grant = Author.create(name: 'Adam Grant', country_of_origin: 'United States', category_id: @business.id)

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
# Max Brooks
@brooks = Author.create(name: 'Max Brooks', country_of_origin: 'United States', category_id: @science_fiction.id)
# John Scalzi
@scalzi = Author.create(name: 'John Scalzi', country_of_origin: 'United States', category_id: @science_fiction.id)

# Jordan Ellenberg
# @ellenberg = Author.create(name: 'Jordan Ellenberg', country_of_origin: 'United States', category_id: @math_and_physics.id)
# George Gilder
@gilder = Author.create(name: 'George Gilder', country_of_origin: 'United States', category_id: @computer_science.id)
# Yuval Noah Harari
@harari = Author.create(name: 'Yuval Noah Harari', country_of_origin: 'Israel', category_id: @social_sciences.id)
# Baran bo Odar and Jantje Friese
@odar_and_friese = Author.create(name: 'Baran bo Odar and Jantje Friese', country_of_origin: 'Germany', category_id: @alt_media.id)

@feynman = Author.create(name: 'Richard Feynman', country_of_origin: 'United States', category_id: @math_and_physics.id)


# business
@zero_to_one = Book.create(
    title: "Zero to One: Notes on Startups, Or How to Build the Future", 
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

@hard_things = Book.create(
    title: "The Hard Thing about Hard Things: Building a Business where there are no Easy Answers", 
    description: "", 
    review: "", 
    img_url: "https://images-na.ssl-images-amazon.com/images/I/810u9MkT3SL.jpg", 
    publication_date: "2014",
    author: @horowitz,
    category: @business,
    author_name: "Ben Horowitz",
    category_name: "Business"
)

@chasm = Book.create(
    title: "Crossing the Chasm", 
    description: "", 
    review: "", 
    img_url: "https://images-na.ssl-images-amazon.com/images/I/41AJKOyiGML._AC_UL600_SR399,600_.jpg", 
    publication_date: "1991",
    author: @moore,
    category: @business,
    author_name: "Geoffrey Moore",
    category_name: "Business"
)


@atlas_shrugged = Book.create(
    title: "Atlas Shrugged", 
    description: "", 
    review: "", 
    img_url: "https://www.idahoednews.org/wp-content/uploads/2013/02/atlas-shrugged-book-cover.jpg", 
    publication_date: "1957",
    author: @rand,
    category: @business,
    author_name: "Ayn Rand",
    category_name: "Business"
)

@fast_and_slow = Book.create(
    title: "Thinking, Fast and Slow", 
    description: "", 
    review: "", 
    img_url: "https://m.media-amazon.com/images/I/41shZGS-G+L.jpg", 
    publication_date: "2011",
    author: @kahneman,
    category: @business,
    author_name: "Daniel Kahneman",
    category_name: "Business"
)

@security_analysis = Book.create(
    title: "Security Analysis", 
    description: "", 
    review: "", 
    img_url: "https://images-na.ssl-images-amazon.com/images/I/51hwLfcPJPL._SX324_BO1,204,203,200_.jpg", 
    publication_date: "1934",
    author: @graham,
    category: @business,
    author_name: "Benjamin Graham and David Dodd",
    category_name: "Business"
)

@investor = Book.create(
    title: "The Intelligent Investor", 
    description: "", 
    review: "", 
    img_url: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/the-intelligent-investor-benjamin-graham-investment-classics-edward-g.jpg", 
    publication_date: "1949",
    author: @graham,
    category: @business,
    author_name: "Benjamin Graham",
    category_name: "Business"
)

@innovators = Book.create(
    title: "The Innovators", 
    description: "", 
    review: "", 
    img_url: "https://d28hgpri8am2if.cloudfront.net/tagged_assets/cvr9781442376229/9781442376229_hr.jpg", 
    publication_date: "2014",
    author: @isaacson,
    category: @business,
    author_name: "Benjamin Graham",
    category_name: "Business"
)

@principles = Book.create(
    title: "Principles", 
    description: "", 
    review: "", 
    img_url: "https://images-na.ssl-images-amazon.com/images/I/71FDkx5WllL.jpg", 
    publication_date: "2017",
    author: @dalio,
    category: @business,
    author_name: "Ray Dalio",
    category_name: "Business"
)

@originals = Book.create(
    title: "Originals", 
    description: "", 
    review: "", 
    img_url: "https://m.media-amazon.com/images/I/511qyzBH42L._AC_SY780_.jpg", 
    publication_date: "2016",
    author: @grant,
    category: @business,
    author_name: "Adam Grant",
    category_name: "Business"
)

@fountainhead = Book.create(
    title: "The Fountainhead", 
    description: "", 
    review: "", 
    img_url: "https://m.media-amazon.com/images/I/51Cy++hpNIL.jpg",
    publication_date: "1943",
    author: @rand,
    category: @business,
    author_name: "Ayn Rand",
    category_name: "Business"
)

@anthem = Book.create(
    title: "Anthem", 
    description: "", 
    review: "", 
    img_url: "https://lh3.googleusercontent.com/proxy/vlx4xbnQDL9vuoOfy2qwh0hdYQrbqYRRXIH4bXg6gEcRMsDOXMy8sdCwiDbO6pk-0OyCCrJOA1aFlnR_6V5RFNkcFIwyP7Lcjg", 
    publication_date: "1937",
    author: @rand,
    category: @business,
    author_name: "Ayn Rand",
    category_name: "Business"
)

# science fiction
@sirens_of_titan = Book.create(
    title: "The Sirens of Titan", 
    description: "A story that details how the entire summation of humanity was oriented towards an alien species (the Tralfamadorians) finding
    a small missing part for their space ship so that they may return home", 
    review: "Vonnegut constantly forces me to question the degree of agency humans possess. Christian moral theology 
    manifested as a contemporary political construct dicates the fundamental supremacy of agency and free will; 
    whereas post-modernist thinkers suggest agency is largely bounded by (if not altogether dependent on) externalities. 
    I am much more inclined to believe humans possess necessary degrees of freedom within this bounded construct that defines
    our actions; but Vonnegut forces me to question the degrees of freedom we possess to deviate from an inevitable mechanistic 
    external process.", 
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
    publication_date: "1950",
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
    publication_date: "1951",
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
    publication_date: "1992",
    author: @stephenson,
    category: @science_fiction,
    author_name: "Neal Stephenson",
    category_name: "Science Fiction"
)

@cryptonomicon = Book.create(
    title: "Cryptonomicon", 
    description: " ", 
    review: " ", 
    img_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327931476l/816.jpg", 
    publication_date: "1999",
    author: @stephenson,
    category: @science_fiction,
    author_name: "Neal Stephenson",
    category_name: "Science Fiction"
)

@world_war_z = Book.create(
    title: "World War Z", 
    description: " ", 
    review: " ", 
    img_url: "https://images-na.ssl-images-amazon.com/images/I/51MobP6njBL._SX317_BO1,204,203,200_.jpg", 
    publication_date: "2006",
    author: @brooks,
    category: @science_fiction,
    author_name: "Max Brooks",
    category_name: "Science Fiction"
)

@slaughterhouse_five = Book.create(
    title: "Slaughterhouse Five", 
    description: "", 
    review: " ", 
    img_url: "https://images-na.ssl-images-amazon.com/images/I/61O1tkFh+iL.jpg", 
    publication_date: "1969",
    author: @vonnegut,
    category: @science_fiction,
    author_name: "Kurt Vonnegut",
    category_name: "Science Fiction"
)

@cats_cradle = Book.create(
    title: "Cat's Cradle", 
    description: "", 
    review: " ", 
    img_url: "https://images-na.ssl-images-amazon.com/images/I/61UhtwmcbOL.jpg", 
    publication_date: "1963",
    author: @vonnegut,
    category: @science_fiction,
    author_name: "Kurt Vonnegut",
    category_name: "Science Fiction"
)

@mother_night = Book.create(
    title: "Mother Night", 
    description: " ", 
    review: " ", 
    img_url: "https://images-na.ssl-images-amazon.com/images/I/71AFRyS3XiL.jpg", 
    publication_date: "1962",
    author: @vonnegut,
    category: @science_fiction,
    author_name: "Kurt Vonnegut",
    category_name: "Science Fiction"
)

@robot = Book.create(
    title: "I, Robot", 
    description: " ", 
    review: " ", 
    img_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1609035271l/41804.jpg", 
    publication_date: "1950",
    author: @asimov,
    category: @science_fiction,
    author_name: "Isaac Asimov",
    category_name: "Science Fiction"
)
@old_mans_war = Book.create(
    title: "Old Man's War", 
    description: " ", 
    review: " ", 
    img_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1487044882l/51964.jpg", 
    publication_date: "2005",
    author: @scalzi,
    category: @science_fiction,
    author_name: "John Scalzi",
    category_name: "Science Fiction"
)


@empire = Book.create(
    title: "Foundation and Empire", 
    description: " ", 
    review: " ", 
    img_url: "https://images-na.ssl-images-amazon.com/images/I/81AXsfAobML.jpg", 
    publication_date: "1952",
    author: @asimov,
    category: @science_fiction,
    author_name: "Isaac Asimov",
    category_name: "Science Fiction"
)

@second_foundation = Book.create(
    title: "", 
    description: " ", 
    review: " ", 
    img_url: "https://afairbitofreading.files.wordpress.com/2014/01/secondfoundation.jpg", 
    publication_date: "1953",
    author: @asimov,
    category: @science_fiction,
    author_name: "Isaac Asimov",
    category_name: "Science Fiction"
)

@quicksilver = Book.create(
    title: "Quicksilver", 
    description: " ", 
    review: " ", 
    img_url: "https://m.media-amazon.com/images/I/41hfFgdr8IS.jpg", 
    publication_date: "2003",
    author: @stephenson,
    category: @science_fiction,
    author_name: "Neal Stephenson",
    category_name: "Science Fiction"
)


# Computer Science

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
