import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Container, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AddBook.css';
import axios from 'axios';

const AddBook = (props) => {
    const [book, setBook] = useState({
        title: "",
        img_url: "",
        publication_date: "",
        author_name: "",
        category_name: "",
    });

    const [isCreated, setCreated] = useState(false);

    

    const handleChange = (event) => {
        const { name, value } = event.target;
        setBook({
            ...book,
            [name]: value,
        });
    };
    
    const createBook = async book => {
        try {
            const baseUrl = 'https://robison-portfolio-api.herokuapp.com/goodreads';
            const response = await axios.post(baseUrl, book)
            return response.data
        } catch (error) {
            throw error
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const created = await createBook(book);
        setCreated({ created });
        console.log(created)
        
    };
    console.log(book)

    if (isCreated) {
        return <Redirect to={"/goodreads"} />;
    }

    return (
        <div id="add-book">
            <h1>Create a new book!</h1>

            <Container>
                <Form onSubmit={handleSubmit}>
                    <Container>
                        <Row>
                            <Form.Group>
                                <Col className="justify-content-md-center">
                                <Row className="justify-content-md-center">
                                <Form.Control 
                                    type="text"
                                    className="add-input"
                                    placeholder="Title"
                                    value={book.title}
                                    name="title"
                                    required 
                                    autoFocus 
                                    onChange={handleChange}/>
                                </Row>
                                <Row className="justify-content-md-center">
                                    <Form.Control 
                                    type="text"
                                    className="add-input"
                                    placeholder="Image Link"
                                    value={book.img_url}
                                    name="img_url"
                                    required 
                                    autoFocus 
                                    onChange={handleChange}/>
                                </Row>
                                <Row className="justify-content-md-center">
                                    <Form.Control 
                                        type="text"
                                        className="add-input"
                                        placeholder="Year Published"
                                        value = {book.publication_date}
                                        name="publication_date"
                                        required 
                                        autoFocus 
                                        onChange={handleChange}/>
                                </Row>
                                <Row className="justify-content-md-center">
                                    <Form.Control 
                                        type="text"
                                        className="add-input"
                                        placeholder="Author Name"
                                        value={book.author_name}
                                        name="author_name"
                                        required 
                                        autoFocus 
                                        onChange={handleChange}/>
                                </Row>
                                <Row className="justify-content-md-center">
                                    <Form.Select 
                                        aria-label="Default select example"
                                        className="add-input"
                                        placeholder="Category"
                                        value={book.category_name}
                                        name="category_name"
                                        required
                                        autoFocus
                                        onChange={handleChange}
                                        >
                                            <option>Select Genre</option>
                                            <option value="Science Fiction">Science Fiction</option>
                                            <option value="Computer Science">Computer Science</option>
                                            <option value="Mathematics and Physics">Mathematics and Physics</option>
                                            <option value="Business">Business</option>
                                            <option value="Social Sciences">Social Sciences</option>
                                            <option value="Other Media Forms">Other Forms of Media</option>
                                        </Form.Select>
                                </Row>
                            </Col>
                            </Form.Group>


                        </Row>
                        
                    </Container>

                    <Container>
                        <Link to={'/goodreads'}>
                            <Button variant="info" className="button">Back to Browse</Button>
                        </Link>
                        <Button type="submit" variant="success" className="button">
                            Create Book
                        </Button>
                    </Container>
                </Form>
            </Container>
        </div>

    )

}

export default AddBook;

