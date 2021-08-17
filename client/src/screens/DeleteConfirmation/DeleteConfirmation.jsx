import { Link } from 'react-router-dom'
import './DeleteConfirmation.css'
import { Button, Container, Col, Row } from 'react-bootstrap';

const DeleteConfirmation = () => {
    return (
        <Container>
            <h1>This book has been effectively deleted!</h1>
            <h3>What would you like to do next?</h3>
            <Col>
                <Row>
                    <Link to="/goodreads">
                        <Button variant="info">Back to books</Button>
                    </Link>
                </Row>
                <Row>
                    <Link to="/">
                        <Button variant="info">Back to home</Button>
                    </Link>
                </Row>
            </Col>
        </Container>
    )
}

export default DeleteConfirmation;