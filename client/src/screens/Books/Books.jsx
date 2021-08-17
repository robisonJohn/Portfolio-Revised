import { useEffect, useState } from "react";
import  Book  from '../../components/Book/Book'
import './Books.css'
import axios from 'axios';
import { Row, Col, Container, Card, Button, DropdownButton } from 'react-bootstrap';
import { Dropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
import {
    filterScienceFiction,
    filterComputerScience,
    filterMathematicsAndPhysics,
    filterBusiness,
    filterSocialSciences,
    filterAlternativeMedia,
} from '../../utils/filter.js'

const Books = () => {
    const [books, setBooks] = useState([]);
    // const [toggleFetch, setToggleFetch] = useState(true);

    useEffect(() => {
        const fetchBooks = async () => {
            const url = 'https://robison-portfolio-api.herokuapp.com/goodreads'
            const allBooks = await axios.get(url)
            setBooks(allBooks.data);
            console.log(allBooks.data)
            
        };
        fetchBooks();
    }, [])

    console.log(books)
    return (
        <div id="books-container">
            <Container>
                <Row>
                    <Col>
                        <em><h5>
                            Welcome to Robison's Rotunda, where I post my favorite books (as well as a few films and 
                            television shows). Enjoy!
                        </h5></em>
                    </Col>
                    <Col>
                        <Card style={{height: "300px", width: "300px"}}>
                            <Card.Img src="https://thumbs.dreamstime.com/b/pitbull-glasses-book-white-background-studio-39890609.jpg" height="300px" width="300px"/>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col><Link to="/newBook"><Button variant="success" style={{margin: "15px"}}>CREATE NEW BOOK</Button></Link></Col>
                    <Col>
                        <DropdownButton title="FILTER BY GENRE" style={{margin: "15px"}} variant="light">
                                <Dropdown.Item href="#/science-fiction">Science Fiction</Dropdown.Item>
                                <Dropdown.Item href="#/social-sciences">Social Sciences</Dropdown.Item>
                                <Dropdown.Item href="#/mathematics-and-physics">Mathematics and Physics</Dropdown.Item>
                                <Dropdown.Item href="#/business">Business</Dropdown.Item>
                                <Dropdown.Item href="#/computer-science">Computer Science</Dropdown.Item>
                                <Dropdown.Item href="#/alt-media">Other Media Forms</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                </Row>
            </Container>

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