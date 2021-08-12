
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">John Robison's Portfolio</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Engineering Projects</Nav.Link>
            <Nav.Link href="#samples">Writing Samples</Nav.Link>
            <Nav.Link href="books">Favorite Books</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
    )

}

export default Header;