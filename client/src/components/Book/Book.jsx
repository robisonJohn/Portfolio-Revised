import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Book.css';

const Book = (props) => {
    return (
        <Link className="book" to={`/goodreads/${props.id}`}>
            <Card style={{ height: "430px", width: "300px", margin: "40px", padding: "10px"}}>
                <div className="book-image-container">
                    <Card.Img src={props.img_url} alt={props.name} className="book-image" height="400" width="300"/>
                </div>
            </Card>        
        </Link>

    )
}

export default Book;
