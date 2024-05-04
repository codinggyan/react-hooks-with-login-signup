import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const LoginForm = ({ isShowLogin }) => {
  return (
    <Container className={`${isShowLogin ? "active" : ""} show position-relative`}>
      <Card className="w-50 p-3 mt-5 position-absolute top-50 start-50 translate-middle-x ">
        <Row className="justify-content-md-center">
          <Form>
            <p className="h1 text-center">Sign In</p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Row>
      </Card>
    </Container>
  );
};

export default LoginForm;
