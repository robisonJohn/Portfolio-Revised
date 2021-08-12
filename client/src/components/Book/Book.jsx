

import './Book.css';

const Book = (props) => {
    return (
        <div>
            
                <div className="book-image-container">
                    <img src={props.img_url} alt={props.name} className="book-image"/>
                </div>
                <div className="book-details">
                    <div className="book-name">{props.title}</div>
                </div>
            
        </div>
    )
}

export default Book;
