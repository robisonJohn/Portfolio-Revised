import { Link } from 'react-router-dom'
import './DeleteConfirmation.css'
import { Button, Container, Col, Row } from 'react-bootstrap';

const DeleteConfirmation = () => {
    return (
        <Container id="confirmation">
            <h1 className="header">This book has been effectively deleted!</h1>
            <h3 className="header">What would you like to do next?</h3>
            <Col>
                <Row className="row">
                    <Link to="/goodreads">
                        <Button variant="info">Return to books</Button>
                    </Link>
                </Row>
                <Row className="row">
                    <Link to="/">
                        <Button variant="success">Return to home</Button>
                    </Link>
                </Row>
            </Col>
        </Container>
    )
}

export default DeleteConfirmation;