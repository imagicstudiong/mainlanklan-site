import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';


const Header = () => {


  return (
    <>
    <Navbar bg="light" fixed="top" expand="lg">
      <Container>
        <Navbar.Brand><Link to="/"><img src={Logo} alt="MainLanKlan" /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/mainlanklan">MainLanKlan</Link></Nav.Link>

            <Nav.Link><Link to="/services">Services</Link></Nav.Link>
            <Nav.Link><Link to="/contact">Contact Us</Link></Nav.Link>
            

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
