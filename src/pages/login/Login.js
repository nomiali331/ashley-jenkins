import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import GoogleButton from 'react-google-button'
import { Link } from 'react-router-dom';

function BasicExample() {
    return (
        <Container>
        <Row>
            <Col>    <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <hr />
            <div className='text-center'>
                <GoogleButton className="g-btn" type="dark" />
            </div>
            <div className='p-4 box mt-3 text-center'>
                Don't have Account <Link to="/signup">Sign Up</Link>
            </div>
            </Col>
        </Row>
        </Container>

    );
}

export default BasicExample;