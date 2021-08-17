import { useState } from 'react';
import { createBook } from '../../services/books';
import { Redirect } from 'react-router-dom';
import { Form, Container, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AddBook.css';

const AddBook = (props) => {
    const [book, setBook] = useState({
        title: "",
        description: "",
        review: "",
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        const created = await createBook(book);
        setCreated({ created });
        console.log(created)
        
    };
    console.log(book)

    if (isCreated) {
        return <Redirect to={"/books"} />;
    }

    return (
        <div>
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
                            <Form.Group>
                                <Col className="justify-content-md-center">
                                <Row className="justify-content-md-center">
                                <Form.Control 
                                    type="text"
                                    className="add-input"
                                    placeholder="Description"
                                    as="textarea"
                                    rows={3}
                                    value={book.description}
                                    name="description"
                                    autoFocus 
                                    onChange={handleChange}/>
                                </Row>
                                <Row className="justify-content-md-center">
                                    <Form.Control 
                                    type="text"
                                    className="add-input"
                                    placeholder="John's Thoughts"
                                    as="textarea"
                                    rows={3}
                                    value={book.review}
                                    name="review"
                                    autoFocus 
                                    onChange={handleChange}/>
                                </Row>
                            </Col>
                            </Form.Group>


                        </Row>
                        
                    </Container>

                    <Container>
                        <Link to={'/books'}>
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

