import { useEffect, useState } from "react";
import  Book  from '../../components/Book/Book'
import './Books.css'
import axios from 'axios';

const Books = () => {
    const [books, setBooks] = useState([]);
    const [toggleFetch, setToggleFetch] = useState(true);

    useEffect(() => {
        const fetchBooks = async () => {
            const url = 'http://localhost:3000/books'
            const allBooks = await axios.get(url)
            setBooks(allBooks.data);
            console.log(allBooks.data)
        };
        fetchBooks();
    }, [toggleFetch])

    console.log(books)
    return (
        <div>
            <h1>My favorite books</h1>
            <div id="books-grid">
                {books.map((book, index) => {
                    return (
                        <Book 
                        id={book.id}
                        title={book.title}
                        description={book.description}
                        review={book.review}
                        img_url={book.img_url}
                        author_id={book.author_id}
                        category_id={book.category_id}
                        key={index}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Books;