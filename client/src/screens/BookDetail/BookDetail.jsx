import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import { Button, Container, Row, Col, Card, Image } from 'react-bootstrap';
import './BookDetail.css';
import axios from 'axios';

const BookDetail = (props) => {
    const [book, setBook] = useState(null);
    const [isLoaded, setLoaded] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const fetchBook = async () => {
            let url = `https://robison-portfolio-api.herokuapp.com/goodreads/${id}`
            const book = await axios.get(url)
            setBook(book.data);
            console.log(book.data)
            setLoaded(true)
            
        };
        fetchBook();
    }, [id])

    const deleteBook = async id => {
        try {
            let url = `https://robison-portfolio-api.herokuapp.com/goodreads/${id}`
            const response = await axios.delete(url)
            console.log(response.data)
        } catch (error) {
            throw error
        }
    };

    if (!isLoaded) {
        return <h1>Loading...</h1>
    }

    return (
        <div id="details">
            <h1>{book.title}</h1>

            <Container>
                <Row>
                <Col className="justify-content-md-center" >
                    <Image src={book.img_url} className="image-details"/>
                
                </Col>
                <Col className="justify-content-md-center">
                    <Row className="justify-content-md-center"></Row>
                    <Row className="justify-content-md-center"><Card style={{backgroundColor:'#4B736E', padding: "15px", width: "400px"}}>Category: {book.category_name}</Card></Row>
                    <Row className="justify-content-md-center"><Card style={{backgroundColor:'#4B736E', padding: "15px", width: "400px"}}>Author: {book.author_name}</Card></Row>
                    <Row className="justify-content-md-center"><Card style={{backgroundColor:'#4B736E', padding: "15px", width: "400px"}}>Year Published: {book.publication_date}</Card></Row>
                    <Row className="justify-content-md-center"></Row>
                    <Row className="justify-content-md-center">
                        <Col>
                            <Row className="justify-content-md-center">
                                <Link to={`/goodreads`}>
                                    <Button variant="info" style={{margin: "10px", width: "150px"}} className="button">Back to Browse</Button>
                                </Link>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Link to={`/goodreads/${book.id}/edit`}>
                                    <Button variant="warning" style={{margin: "10px", width: "150px"}} className="button">Update Book</Button>
                                </Link>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Link to={`/confirmation`}>
                                    <Button onClick={() => deleteBook(book.id)} variant="danger" style={{margin: "10px", width: "150px"}} className="button">Delete Book</Button>
                                </Link>
                            </Row>
                        </Col>

                </Row>
                </Col>
                </Row>

            </Container>

            

            

        </div>
        
    )


}

export default BookDetail;