import { Link } from 'react-router-dom';

import './Book.css';

const Book = (props) => {
    return (
        <div>
            <Link className="Book" to={`/books/${props.id}`}>
                <div className="book-image-container">
                    <img src={props.img_url} alt={props.name} className="book-image"/>
                </div>
                <div className="book-details">
                    <div className="book-name">{props.title}</div>
                </div>
            </Link>
        </div>
    )
}

export default Book;