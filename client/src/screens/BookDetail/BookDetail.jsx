import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import { getBook, deleteBook } from '../../services/books'
import { Image, Button } from 'react-bootstrap';

const BookDetail = (props) => {
    const [book, setBook] = useState(null);
    const [isLoaded, setLoaded] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const fetchBook = async () => {
            const book = await getBook(id)
            setBook(book)
            setLoaded(true)
        };
        fetchBook();
    }, [id]);

    if (!isLoaded) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h2 id="detail-header">{book.title}</h2>
            <Image src={book.img_url}/>
            <Link to={`/books`}>
                <Button>Go Back</Button>
            </Link>
            <Link to={`/books/${book.id}/edit`}>
                <Button>Update this book</Button>
            </Link>
            <Link to={`/books`}>
                <Button onClick={() => deleteBook(book.id)}>Delete</Button>
            </Link>
        </div>
        
    )


}

export default BookDetail;