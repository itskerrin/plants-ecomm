import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          {/* LinkContainer to replace a tags in r-bootstrap */}
          <LinkContainer to="/">
            <Navbar.Brand>
              <i className="fas fa-seedling"></i> Eden
            </Navbar.Brand>
          </LinkContainer>
          <Nav className="ml-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <Nav.Link href="#">About</Nav.Link>
            <LinkContainer to="/account">
              <Nav.Link>
                <i className="far fa-user"></i>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link>
                <i className="fas fa-shopping-cart"></i>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
