import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import { getBook, deleteBook } from '../../services/books'
import { Button, Container, Row, Col, Card } from 'react-bootstrap';

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

            <Container>
                <Row>
                <Col style={{margin: "20px"}}>
                    <Row><Card style={{margin: "20px"}}><Card.Img src={book.img_url} height="600" width="200" style={{padding: "10px"}}/></Card></Row>
                    <Row>
                        <Link to={`/books`}>
                            <Button variant="success" style={{margin: "10px", width: "150px"}}>Back to Browse</Button>
                        </Link>
                    </Row>
                    <Row>
                        <Link to={`/books/${book.id}/edit`}>
                            <Button variant="warning" style={{margin: "10px", width: "150px"}}>Update Book</Button>
                        </Link>
                    </Row>
                    <Row>
                        <Link to={`/books`}>
                            <Button onClick={() => deleteBook(book.id)} variant="danger" style={{margin: "10px", width: "150px"}}>Delete Book</Button>
                        </Link>
                    </Row>
                </Col>
                <Col style={{margin: "20px"}}>
                    <Row><Card style={{backgroundColor:'#4B736E', margin: "15px", padding: "15px"}}>Category: {book.category_name}</Card></Row>
                    <Row><Card style={{backgroundColor:'#4B736E', margin: "15px", padding: "15px"}}>Author: {book.author_name}</Card></Row>
                    <Row><Card style={{backgroundColor:'#4B736E', margin: "15px", padding: "15px"}}>Description: {book.description}</Card></Row>
                    <Row><Card style={{backgroundColor:'#4B736E', margin: "15px", padding: "15px"}}>John's Perspective: {book.review}</Card></Row>
                </Col>
                </Row>

            </Container>

            

            

        </div>
        
    )


}

export default BookDetail;