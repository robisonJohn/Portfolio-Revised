import { useState, useEffect } from "react";
import { getBook, updateBook } from "../../services/books";
import { useParams, Redirect, Link } from "react-router-dom";
import { Form, Image, Button, Container, Row, Col } from "react-bootstrap";


const ItemEdit = (props) => {
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

    const [isUpdated, setUpdated] = useState(false);
    let { id } = useParams();

    useEffect(() => {
        const fetchBook = async () => {
            const book = await getBook(id);
            setBook(book);
        };
        fetchBook();
    }, [id]);

    const handleChange = (event) => {
        const { title, value } = event.target;
        setBook({
            ...book,
            [title]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const updated = await updateBook(id, book);
        setUpdated(updated);
    };

    if (isUpdated) {
        return <Redirect to={`/books/${id}`}/>
    }

    return (
        <div>
            <Container>{book.title}</Container>
            <Form onSubmit={handleSubmit}>
                    <Form.Control 
                    type="text"
                    className="add-input"
                    placeholder={`${book.title}`}
                    value={book.title}
                    name="title"
                    required 
                    autoFocus 
                    onChange={handleChange}/>

                    <Form.Control 
                    type="text"
                    className="add-input"
                    placeholder="Add or Update Description"
                    as="textarea"
                    rows={3}
                    value={book.description}
                    name="description"
                    autoFocus 
                    onChange={handleChange}/>

                    <Form.Control 
                    type="text"
                    className="add-input"
                    placeholder="Add or Update Review"
                    as="textarea"
                    rows={3}
                    value={book.review}
                    name="review"
                    autoFocus 
                    onChange={handleChange}/>

                    <Form.Control 
                    type="text"
                    className="add-input"
                    placeholder={`${book.img_url}`}
                    value={book.img_url}
                    name="image"
                    required 
                    autoFocus 
                    onChange={handleChange}/>

                    <Form.Control 
                    type="text"
                    className="add-input"
                    placeholder={`${book.publication_date}`}
                    value={book.publication_date}
                    name="publication"
                    required 
                    autoFocus 
                    onChange={handleChange}/>

                    <Form.Control 
                    type="text"
                    className="add-input"
                    placeholder={`${book.author_name}`}
                    value={book.author_name}
                    name="name"
                    required 
                    autoFocus 
                    onChange={handleChange}/>

                    <Form.Select 
                    aria-label="Default select example"
                    className="add-input"
                    placeholder={`${book.category_name}`}
                    value={book.category_name}
                    name="genre"
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

                    <Container>
                        <Link to={'/books'}>
                            <Button>Back to Browse</Button>
                        </Link>
                        <Button type="submit">
                            Update Book
                        </Button>
                    </Container>
            </Form>
        </div>
    )


}

export default ItemEdit;
