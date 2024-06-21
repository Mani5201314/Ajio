import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../../Style/Nav/Nav1.css"
import "bootstrap/dist/css/bootstrap.css"
function Nav1() {
  return (
    <div>
      {" "}
      <Navbar expand="lg" className="bg-body-tertiary" id="nav">
        <Container fluid>
          <Navbar.Brand href="#" className="ps-5">
            <img width={100} src="/img/ajio-logo.png" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{
                maxHeight: "10px",
                fontSize: "12px",
                fontWeight: "500",
                paddingLeft: "15%",
              }}
              navbarScroll
            >
              <Nav.Link href="#action1">MEN</Nav.Link>
              <Nav.Link href="#action2">WOMAN</Nav.Link>
              <Nav.Link href="#action2">KIDS</Nav.Link>
              <Nav.Link href="#action2">BEAUTY</Nav.Link>
              <Nav.Link href="#action2">HOME AND KITCHEN</Nav.Link>
            </Nav>
            <Form className="d-flex" id="searchbar-icon">
              <Form.Control
                id="searchbar"
                type="search"
                placeholder="Search AJIO"
                aria-label="Search"
              />
              <Button variant="outline">🔍</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
          </Navbar>
          <div>
              <img id='red' src="/img/red.webp" alt="" />
          </div>
    </div>
  );
}

export default Nav1;