import { useState } from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import GoogleButton from 'react-google-button'
import { Link } from 'react-router-dom';
import { useUserAuth } from '../../Context/UserAuthContext';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/logo-blue.png';

function BasicExample() {
    const history = useHistory()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { logIn } = useUserAuth();
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await logIn(email, password);
            history.push("/home");

        } catch (err) {
            setError(err.message);
        }
    }
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <div className='login-form  '>
                        <img src={logo} alt="Logo" />
                        <p>Welcome back! Please login to your account.</p>
                        <Form onSubmit={handleSubmit}>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Remember me" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <a>Forgot password</a>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                        <hr />
                    </div>
                </Col>
            </Row>
        </Container>

    );
}

export default BasicExample;