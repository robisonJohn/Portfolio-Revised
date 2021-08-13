import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Book.css';

const Book = (props) => {
    return (
        <Link className="book" to={`/books/${props.id}`}>
            <div>
                <div className="book-image-container">
                    <Image src={props.img_url} alt={props.name} className="book-image" height="400" width="300"/>
                </div>
            </div>        
        </Link>

    )
}

export default Book;
