import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{width: '100%', zIndex: '20'}}>
        <Container>
          <Navbar.Brand href="#home">Los vinos de la casa</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Viñaterías</Nav.Link>
            <Nav.Link href="#pricing">Compra</Nav.Link>
          </Nav>
        </Container>
      </Navbar>     
    </>
  );
}