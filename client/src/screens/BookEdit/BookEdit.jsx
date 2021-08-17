import { useState, useEffect } from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from 'axios';

const ItemEdit = (props) => {
    const [book, setBook] = useState({
        title: "",
        img_url: "",
        publication_date: "",
        author_name: "",
        category_name: "",
    });

    const [isUpdated, setUpdated] = useState(false);
    let { id } = useParams();

    const getBook = async id => {
        try {
            let baseUrl = `https://robison-portfolio-api.herokuapp.com/goodreads/${id}`
            const response = await axios.get(baseUrl)
            return response.data
        }
        catch (error) {
            throw error
        }
    }


    const updateBook = async (id, book) => {
        try {
            let baseUrl = `https://robison-portfolio-api.herokuapp.com/goodreads/${id}`
            const response = await axios.put(baseUrl, book)
            return response.data
        } catch (error) {
            throw error
        }
    }

    useEffect(() => {
        const fetchBook = async () => {
            const book = await getBook(id);
            setBook(book);
        };
        fetchBook();
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setBook({
            ...book,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const updated = await updateBook(id, book);
        setUpdated(updated);
        console.log(updated)
    };

    if (isUpdated) {
        return <Redirect to={`/goodreads/${id}`}/>
    }

    return (
        <div>
            <h1>{book.title}</h1>
            <Form onSubmit={handleSubmit}>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col className="justify-content-md-center">
                            <Row className="justify-content-md-center">
                            <Form.Control 
                                type="text"
                                className="add-input"
                                placeholder={`${book.title}`}
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
                                placeholder={`${book.img_url}`}
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
                                placeholder={`${book.publication_date}`}
                                value={book.publication_date}
                                name="publication_date"
                                required 
                                autoFocus 
                                onChange={handleChange}/>
                            </Row>
                            <Row className="justify-content-md-center">
                            <Form.Control 
                                type="text"
                                className="add-input"
                                placeholder={`${book.author_name}`}
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
                                            placeholder={`${book.category_name}`}
                                            value={book.category_name}
                                            name="category_name"
                                            required
                                            autoFocus
                                            onChange={handleChange}
                                            >
                                                <option>Update Genre</option>
                                                <option value="Science Fiction">Science Fiction</option>
                                                <option value="Computer Science">Computer Science</option>
                                                <option value="Mathematics and Physics">Mathematics and Physics</option>
                                                <option value="Business">Business</option>
                                                <option value="Social Sciences">Social Sciences</option>
                                                <option value="Other Media Forms">Other Forms of Media</option>
                                </Form.Select>
                            </Row>
                            </Col>
                        
                    </Row>
                </Container>

                    <Container>
                        <Link to={'/goodreads'}>
                            <Button variant="info" className="button">Back to Browse</Button>
                        </Link>
                        
                            <Button type="submit" variant="warning" className="button">
                                    Update Book
                                
                            </Button>
                        

                    </Container>
            </Form>
        </div>
    )


}

export default ItemEdit;
