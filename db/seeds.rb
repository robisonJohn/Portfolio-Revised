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

=begin
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
=end

# business
@zero_to_one = Goodread.create(
    title: "Zero to One: Notes on Startups, Or How to Build the Future", 
    img_url: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Zero_to_One.jpg/220px-Zero_to_One.jpg", 
    publication_date: "2014",
    author_name: "Peter Thiel",
    category_name: "Business"
)

@hard_things = Goodread.create(
    title: "The Hard Thing about Hard Things: Building a Business where there are no Easy Answers", 
    img_url: "https://images-na.ssl-images-amazon.com/images/I/810u9MkT3SL.jpg", 
    publication_date: "2014",
    author_name: "Ben Horowitz",
    category_name: "Business"
)

@chasm = Goodread.create(
    title: "Crossing the Chasm", 
    img_url: "https://images-na.ssl-images-amazon.com/images/I/41AJKOyiGML._AC_UL600_SR399,600_.jpg", 
    publication_date: "1991",
    author_name: "Geoffrey Moore",
    category_name: "Business"
)




@fast_and_slow = Goodread.create(
    title: "Thinking, Fast and Slow", 
    img_url: "https://m.media-amazon.com/images/I/41shZGS-G+L.jpg", 
    publication_date: "2011",
    author_name: "Daniel Kahneman",
    category_name: "Business"
)

@security_analysis = Goodread.create(
    title: "Security Analysis", 
    img_url: "https://images-na.ssl-images-amazon.com/images/I/51hwLfcPJPL._SX324_BO1,204,203,200_.jpg", 
    publication_date: "1934",
    author_name: "Benjamin Graham and David Dodd",
    category_name: "Business"
)

@investor = Goodread.create(
    title: "The Intelligent Investor", 
    img_url: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/the-intelligent-investor-benjamin-graham-investment-classics-edward-g.jpg", 
    publication_date: "1949",
    author_name: "Benjamin Graham",
    category_name: "Business"
)

@innovators = Goodread.create(
    title: "The Innovators", 
    img_url: "https://d28hgpri8am2if.cloudfront.net/tagged_assets/cvr9781442376229/9781442376229_hr.jpg", 
    publication_date: "2014",
    author_name: "Benjamin Graham",
    category_name: "Business"
)

@principles = Goodread.create(
    title: "Principles", 
    img_url: "https://images-na.ssl-images-amazon.com/images/I/71FDkx5WllL.jpg", 
    publication_date: "2017",
    author_name: "Ray Dalio",
    category_name: "Business"
)

@originals = Goodread.create(
    title: "Originals", 
    img_url: "https://m.media-amazon.com/images/I/511qyzBH42L._AC_SY780_.jpg", 
    publication_date: "2016",
    author_name: "Adam Grant",
    category_name: "Business"
)




# science fiction
@sirens_of_titan = Goodread.create(
    title: "The Sirens of Titan",  
    img_url: "https://upload.wikimedia.org/wikipedia/en/5/57/TheSirensofTitan%281959%29.jpg", 
    publication_date: "1959",
    author_name: "Kurt Vonnegut",
    category_name: "Science Fiction"
)
@dune = Goodread.create(
    title: "Dune",  
    img_url: "https://images.penguinrandomhouse.com/cover/9780593099322", 
    publication_date: "1965",
    author_name: "Frank Herbert",
    category_name: "Science Fiction"
)

@martian_chronicles = Goodread.create(
    title: "The Martian Chronicles", 
    img_url: "https://images-na.ssl-images-amazon.com/images/I/518WxaFw0rL.jpg",
    publication_date: "1950",
    author_name: "Ray Bradbury",
    category_name: "Science Fiction"
)
@foundation = Goodread.create(
    title: "Foundation", 
    img_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1417900846l/29579.jpg", 
    publication_date: "1951",
    author_name: "Isaac Asimov",
    category_name: "Science Fiction"

)
@snow_crash = Goodread.create(
    title: "Snow Crash", 
    img_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327937330l/6303927.jpg", 
    publication_date: "1992",
    author_name: "Neal Stephenson",
    category_name: "Science Fiction"
)

@cryptonomicon = Goodread.create(
    title: "Cryptonomicon", 
    img_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327931476l/816.jpg", 
    publication_date: "1999",
    author_name: "Neal Stephenson",
    category_name: "Science Fiction"
)

@world_war_z = Goodread.create(
    title: "World War Z", 
    img_url: "https://images-na.ssl-images-amazon.com/images/I/51MobP6njBL._SX317_BO1,204,203,200_.jpg", 
    publication_date: "2006",
    author_name: "Max Brooks",
    category_name: "Science Fiction"
)

@slaughterhouse_five = Goodread.create(
    title: "Slaughterhouse Five", 
    img_url: "https://images-na.ssl-images-amazon.com/images/I/61O1tkFh+iL.jpg", 
    publication_date: "1969",
    author_name: "Kurt Vonnegut",
    category_name: "Science Fiction"
)

@cats_cradle = Goodread.create(
    title: "Cat's Cradle", 
    img_url: "https://images-na.ssl-images-amazon.com/images/I/61UhtwmcbOL.jpg", 
    publication_date: "1963",
    author_name: "Kurt Vonnegut",
    category_name: "Science Fiction"
)

@mother_night = Goodread.create(
    title: "Mother Night", 
    img_url: "https://images-na.ssl-images-amazon.com/images/I/71AFRyS3XiL.jpg", 
    publication_date: "1962",
    author_name: "Kurt Vonnegut",
    category_name: "Science Fiction"
)

@robot = Goodread.create(
    title: "I, Robot", 
    img_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1609035271l/41804.jpg", 
    publication_date: "1950",
    author_name: "Isaac Asimov",
    category_name: "Science Fiction"
)
@old_mans_war = Goodread.create(
    title: "Old Man's War", 
    img_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1487044882l/51964.jpg", 
    publication_date: "2005",
    author_name: "John Scalzi",
    category_name: "Science Fiction"
)


@empire = Goodread.create(
    title: "Foundation and Empire", 
    img_url: "https://images-na.ssl-images-amazon.com/images/I/81AXsfAobML.jpg", 
    publication_date: "1952",
    author_name: "Isaac Asimov",
    category_name: "Science Fiction"
)

@second_foundation = Goodread.create(
    title: "", 
    img_url: "https://afairbitofreading.files.wordpress.com/2014/01/secondfoundation.jpg", 
    publication_date: "1953",
    author_name: "Isaac Asimov",
    category_name: "Science Fiction"
)

@quicksilver = Goodread.create(
    title: "Quicksilver", 
    img_url: "https://m.media-amazon.com/images/I/41hfFgdr8IS.jpg", 
    publication_date: "2003",
    author_name: "Neal Stephenson",
    category_name: "Science Fiction"
)


# Computer Science

@life_after_google = Goodread.create(
    title: "Life After Google", 
    img_url: "https://images-na.ssl-images-amazon.com/images/I/611dc2sHZoL.jpg", 
    publication_date: "2018",
    author_name: "George Gilder",
    category_name: "Computer Science"
)
@sapiens = Goodread.create(
    title: "Sapiens", 
    img_url: "https://images-na.ssl-images-amazon.com/images/I/41+lolL22gL._SX314_BO1,204,203,200_.jpg", 
    publication_date: "2011",
    author_name: "Yuval Noah Harari",
    category_name: "Social Sciences"
)
@dark = Goodread.create(
    title: "Dark", 
    img_url: "https://images-na.ssl-images-amazon.com/images/I/81oWDX24u%2BL._SL1200_.jpg", 
    publication_date: "2017",
    author_name: "Baran bo Odar and Jantje Friese",
    category_name: "Other Media Forms"
)

@surely_joking = Goodread.create(
    title: "Surely you're joking, Mr. Feynman", 
    img_url: "https://pbs.twimg.com/media/EQvypQXUUAATrhT.jpg", 
    publication_date: "1985",
    author_name: "Richard Feynman",
    category_name: "Mathematics and Physics"
)

@complexity = Goodread.create(
    title: "Complexity: The Emerging Science at the Edge of Order and Chaos", 
    img_url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTgkK8Az1yN7e4BTGfMRhuHMyLQZIw6dziFtgSSIXQoIZ_latG-", 
    publication_date: "1992",
    author_name: "M. Mitchell Waldrop",
    category_name: "Mathematics and Physics"
)
@six_easy_pieces = Goodread.create(
    title: "Six Easy Pieces", 
    img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyykwIkNN2JmstRLyYcNVKhwCOhApLEFzFDKc1mdY_upraaus6", 
    publication_date: "1994",
    author_name: "Richard P. Feynman",
    category_name: "Mathematics and Physics"
)
@finding_things_out = Goodread.create(
    title: "The Pleasure of Finding Things Out", 
    img_url: "https://images-na.ssl-images-amazon.com/images/I/31Y81iRzhbL._BO1,204,203,200_.jpg", 
    publication_date: "1999",
    author_name: "Richard P. Feynman",
    category_name: "Mathematics and Physics"
)
@prime_number_conspiracy = Goodread.create(
    title: "The Prime Number Conspiracy: The Biggest Ideas in Math from Quanta", 
    img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1IDdqPruWGwhpGyMxTFIjg6ZfB6_KyYBl8QUjFoABQEDaEXwl", 
    publication_date: "2018",
    author_name: "Thomas Lin (editor)",
    category_name: "Mathematics and Physics"
)
@how_to_solve_it = Goodread.create(
    title: "How to Solve It", 
    img_url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQbQteAEzSX7yC9nKN7GVZ8Qoee6EkeTG8zkGw3DK6Vk5wpTeI2", 
    publication_date: "1945",
    author_name: "George Polya",
    category_name: "Mathematics and Physics"
)
@how_to_not_be_wrong = Goodread.create(
    title: "How to Not Be Wrong", 
    img_url: "", 
    publication_date: "",
    author_name: "",
    category_name: "Mathematics and Physics"
)
@mathematical_thinking = Goodread.create(
    title: "Introduction to Mathematical Thinking", 
    img_url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT7jHo_oJa5mJHL1iGLduz9nH5rxgyGXic5OC0SgbgNplWOQRnU", 
    publication_date: "2014",
    author_name: "Jordan Ellenberg",
    category_name: "Mathematics and Physics"
)
@lumen_naturae = Goodread.create(
    title: "Lumen Naturae", 
    img_url: "https://mitpress.mit.edu/sites/default/files/styles/large_book_cover/http/mitp-content-server.mit.edu%3A18180/books/covers/cover/%3Fcollid%3Dbooks_covers_0%26isbn%3D9780262043908%26type%3D.jpg?itok=yb9c1yUE", 
    publication_date: "2017",
    author_name: "Matilde Marcoli",
    category_name: "Mathematics and Physics"
)
@blockchain_revolution = Goodread.create(
    title: "Blockchain Revolution: How the Technology Behind Bitcoin is Changing Money, Business, and the World", 
    img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR52Is7Xb60SwAbN_06TkH6U2M_yHZvhNAmJXdEV7HzwBrGL9p9", 
    publication_date: "2016",
    author_name: "Don Tapscott and Alex Tapscott",
    category_name: "Computer Science"
)
@reality = Goodread.create(
    title: "Reality is Not What It Seems", 
    img_url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTCH6EA-uSjb8idY8GGGwp0Y6N8xyyjrGzYKThjpxswDleJrPHp", 
    publication_date: "2014",
    author_name: "Carlo Rovelli",
    category_name: "Mathematics and Physics"
)
@infinite_machine = Goodread.create(
    title: "The Infinite Machine", 
    img_url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSYpU2UmZcRIHN5i8rVdiHU0N0z5_8p2bNGSumtMWHVeM0KgfqM", 
    publication_date: "2020",
    author_name: "Camila Russo",
    category_name: "Computer Science"
)
@data_science = Goodread.create(
    title: "Data Science From Scratch", 
    img_url: "https://images-na.ssl-images-amazon.com/images/I/51xTPwtWOHL._SX379_BO1,204,203,200_.jpg", 
    publication_date: "2019",
    author_name: "Joel Grus",
    category_name: "Computer Science"
)
@software_architecture = Goodread.create(
    title: "Fundamentals of Software Architecture", 
    img_url: "https://images-na.ssl-images-amazon.com/images/I/51-RoANBXoL._SX379_BO1,204,203,200_.jpg", 
    publication_date: "2020",
    author_name: "Mark Richards and Neal Ford",
    category_name: "Computer Science"
)
@blockchain_basics = Goodread.create(
    title: "Blockchain Basics", 
    img_url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRaWZLnV3apI-Y7gybpJKd5oLP4_a-dkQxOu67_2qMskMcZhgfu", 
    publication_date: "2017",
    author_name: "Daniel Drescher",
    category_name: "Computer Science"
)
@homo_deus = Goodread.create(
    title: "Homo Deus", 
    img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb4_okkcSfLo4akGYYo-7DTVAxHmESq3_bXa9jGqjFxfevBdoP", 
    publication_date: "2015",
    author_name: "Yuval Noah Harari",
    category_name: "Social Sciences"
)
@twenty_one_lessons = Goodread.create(
    title: "21 Lessons for the 21st Century", 
    img_url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTuKYBCdYT37lJlvRNKPW4bCralc7OCsa6sMEta3f_asqdWOGNk", 
    publication_date: "2018",
    author_name: "Yuval Noah Harari",
    category_name: "Social Sciences"
)
@freakonomics = Goodread.create(
    title: "Freakonomics", 
    img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQubKvdknFyNXw8UXKMLhfyMfKBngC8B_S8dVj8AC48NPOu9sNF", 
    publication_date: "2005",
    author_name: "Steven D. Levitt and Stephen J. Dubner",
    category_name: "Social Sciences"
)
@misbehaving = Goodread.create(
    title: "Misbehaving", 
    img_url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRUCreLrEPyAL_hz7fHhB8snbkT6h4A4RaT8564Iq3vXniF_Wjk", 
    publication_date: "2015",
    author_name: "Richard Thaler",
    category_name: "Social Sciences"
)
@systems = Goodread.create(
    title: "Thinking in Systems", 
    img_url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQVDry5Gz0-xeovYUrTnPRLKbQ3YMuJ8A1vRT6m41HToqbX9nu2", 
    publication_date: "2008",
    author_name: "Donella Meadows",
    category_name: "Social Sciences"
)
@think_like_a_freak = Goodread.create(
    title: "Think Like a Freak", 
    img_url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSjkasjqPNzgvAygscM5PuDMhi-Q0Te_xdjoO74756TxTKseF8m", 
    publication_date: "2014",
    author_name: "Steven D. Levitt and Stephen J. Dubner",
    category_name: "Social Sciences"
)
@how_to_rob_a_bank = Goodread.create(
    title: "How to Rob a Bank", 
    img_url: "https://images-na.ssl-images-amazon.com/images/I/51fdrbMNZsL._SX330_BO1,204,203,200_.jpg", 
    publication_date: "2015",
    author_name: "Steven D. Levitt and Stephen J. Dubner",
    category_name: "Social Sciences"
)
@star_wars = Goodread.create(
    title: "Star Wars", 
    img_url: "data:image/png;base64,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", 
    publication_date: "1977 (initial release)",
    author_name: "George Lucas",
    category_name: "Other Media Forms"
)
=begin
@barbarians = Goodread.create(
    title: "Barbaren", 
    img_url: "", 
    publication_date: "2020",
    author_name: "",
    category_name: "Other Media Forms"
)
@biohackers = Goodread.create(
    title: "Biohackers", 
    img_url: "", 
    publication_date: "",
    author_name: "",
    category_name: "Other Media Forms"
)
@drugs = Goodread.create(
    title: "How to Sell Drugs Online (Fast)", 
    img_url: "", 
    publication_date: "",
    author_name: "",
    category_name: "Other Media Forms"
)
@peppermint_candy = Goodread.create(
    title: "Peppermint Candy", 
    img_url: "", 
    publication_date: "1999",
    author_name: "Lee Chang-dong",
    category_name: "Other Media Forms"
)
@sun = Goodread.create(
    title: "A Sun", 
    img_url: "", 
    publication_date: "",
    author_name: "",
    category_name: "Other Media Forms"
)
=end



puts "#{Goodread.count} good reads created!"
