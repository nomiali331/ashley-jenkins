import React, { Component } from 'react';
import './navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Admin from '../../assets/team.png'
import Toggle from '../../assets/toggle.png'
import search from '../../assets/search.png'
import notify from '../../assets/notify.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useHistory } from 'react-router-dom';
import { useUserAuth } from '../../Context/UserAuthContext';


const Home = () => {
  const { logOut, user } = useUserAuth();
  const history = useHistory();
  const handleLogout = async () => {
    try {
      await logOut();
      console.log('Hello From Logout')
      history.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };
    return (
      <div className="custom-navigation">
        <Container fluid>
          <Row>
            <Col className="d-flex align-items-center">
              <div className='nav-toogle'>
                <img src={Toggle} alt="Logo" />
              </div>
            </Col>

            <Col className="d-flex align-items-center justify-content-end"><Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search here..."
                className="me-2"
                aria-label="Search"
              />
              <Button className='search-btn' variant="outline-success"><img src={search} alt="Logo" /></Button>
            </Form>
              <Nav>
                <Nav.Link href="#features"><img src={notify} alt="Logo" /></Nav.Link>
                <Nav.Link href="#pricing"> <img src={Admin} alt="Logo" /></Nav.Link>
                <NavDropdown title="Admin" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={ handleLogout } >Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav></Col>
          </Row>
        </Container>
      </div>
    );
  
}

export default Home;