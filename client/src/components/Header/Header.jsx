import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">John Robison's Portfolio</Navbar.Brand>
        <Nav className="me-auto">
            <Link to="/"><Nav.Link href="#home">Home</Nav.Link></Link>
            <Link to="/projects"><Nav.Link href="#projects">Engineering Projects</Nav.Link></Link>
            <Link to="/writing"><Nav.Link href="#samples">Writing Samples</Nav.Link></Link>
            <Link to="/goodreads"><Nav.Link href="#goodreads">Favorite Books</Nav.Link></Link>
        </Nav>
        </Container>
    </Navbar>
    )

}

export default Header;