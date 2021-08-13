import { Image } from 'react-bootstrap';

import './Book.css';

const Book = (props) => {
    return (
        <div>
            <div className="book-image-container">
                <Image src={props.img_url} alt={props.name} className="book-image" height="400" width="300"/>
            </div>
        </div>
    )
}

export default Book;
