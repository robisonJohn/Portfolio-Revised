import { useState } from 'react';
import { createBook } from '../../services/books';
import { Redirect } from 'react-router-dom';
import { Form, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AddBook.css';

const AddBook = (props) => {
    const [book, setBook] = useState({
        title: "",
        description: "",
        review: "",
        img_url: "",
        publication_date: "",
        author: "",
        category: "",
        author_name: "",
        category_name: "",
    });

    const [isCreated, setCreated] = useState(false); 

    const handleChange = (event) => {
        const { title, value } = event.target;
        setBook({
            ...book,
            [title]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const created = await createBook(book);
        setCreated({ created });
    };

    if (isCreated) {
        return <Redirect to={"/books"} />;
    }

    return (
        <div>
            <h1>Create a new book!</h1>

            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Control 
                    type="text"
                    className="add-input"
                    placeholder="Title"
                    value={book.title}
                    name="title"
                    required 
                    autoFocus 
                    onChange={handleChange}/>

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

                    <Form.Control 
                    type="text"
                    className="add-input"
                    placeholder="Image Link"
                    value={book.img_url}
                    name="image"
                    required 
                    autoFocus 
                    onChange={handleChange}/>

                    <Form.Control 
                    type="text"
                    className="add-input"
                    placeholder="Year Published"
                    value={book.publication_date}
                    name="publication"
                    required 
                    autoFocus 
                    onChange={handleChange}/>

                    <Form.Control 
                    type="text"
                    className="add-input"
                    placeholder="Author Name"
                    value={book.author_name}
                    name="name"
                    required 
                    autoFocus 
                    onChange={handleChange}/>

                    <Form.Select 
                    aria-label="Default select example"
                    className="add-input"
                    placeholder="Genre"
                    value={book.category_name}
                    name="genre"
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

                    <Container>
                        <Link to={'/books'}>
                            <Button variant="success" className="button">Back to Browse</Button>
                        </Link>
                        <Button type="submit" variant="warning" className="button">
                            Create Book
                        </Button>
                    </Container>
                </Form>
            </Container>
        </div>

    )

}

export default AddBook;

