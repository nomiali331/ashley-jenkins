import React, { Component } from 'react';
import './navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import Admin from '../../assets/team.png'
import Toggle from '../../assets/toggle.png'
import search from '../../assets/search.png'
import notify from '../../assets/notify.png'


class Navigation extends Component {
  render() {
    return (
      <div class="custom-navigation">
        <Container>
          <Row>
            <Col className="d-flex align-items-center">
              <div className='nav-toogle'>
                <img src={Toggle} alt="Logo" />
              </div>
            </Col>

            <Col className="d-flex align-items-center"><Form className="d-flex">
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
                <Nav.Link href="#pricing"><img src={Admin} alt="Logo" /> Admin</Nav.Link>
              </Nav></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Navigation;