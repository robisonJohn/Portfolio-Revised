import { useEffect, useState } from "react";
import  Book  from '../../components/Book/Book'
import './Books.css'
import axios from 'axios';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
    filterScienceFiction,
    filterComputerScience,
    filterMathematicsAndPhysics,
    filterBusiness,
    filterSocialSciences,
    filterAlternativeMedia,
} from '../../utils/filter.js';
import Filter from '../../components/Filter/Filter'

const Books = () => {
    const [books, setBooks] = useState([]);
    // const [toggleFetch, setToggleFetch] = useState(true);

    const [applyFilter, setApplyFilter] = useState(false);
    const [filterType, setFilterType] = useState('Science Fiction')
    const [filterResult, setFilterResult] = useState([])

    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        const fetchBooks = async () => {
            const url = 'https://robison-portfolio-api.herokuapp.com/goodreads'
            const allBooks = await axios.get(url)
            setBooks(allBooks.data);
            setLoaded(true)
            console.log(allBooks.data)
            
        };
        fetchBooks();
    }, [])

    const handleFilter = (type) => {
        if (type!== "" && type !== undefined) {
            setFilterType(type)
        }

        switch (type) {
            case "Science Fiction":
                setFilterResult(filterScienceFiction(books))
                break;
            case "Computer Science":
                setFilterResult(filterComputerScience(books))
                break;
            case "Mathematics and Physics":
                setFilterResult(filterMathematicsAndPhysics(books))
                break;
            case "Business":
                setFilterResult(filterBusiness(books))
                break;
            case "Social Sciences":
                setFilterResult(filterSocialSciences(books))
                break;
            case "Other Media Forms":
                setFilterResult(filterAlternativeMedia(books))
                break;
            default:
                setFilterResult(books);
                break;
        }
    }

    if (applyFilter) {
        handleFilter(filterType);
        setApplyFilter(false);
    }

    const handleSubmit = (event) => event.preventDefault();

    let result = books;
    if (filterResult.length > 0) {
        result = filterResult;
    }
    if (!isLoaded) {
        return <h1>Loading...</h1>
    }

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
                        <Filter handleFilter={handleFilter} onSubmit={handleSubmit}/>
                    </Col>
                </Row>
            </Container>

            <div id="books-grid">
                {result.map((book, index) => {
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