// import React from "react";
import { Container, Card, Button, Form } from "react-bootstrap";
import { useState } from "react";
import GoogleLogin from "../components/GoogleLogin";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/action/authAction";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    dispatch(login(email, password, navigate));
  };

  return (
    <Container className="p-4">
      <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label> Email Addres</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              SUBMIT
            </Button>
          </Form>
          <div>
            <GoogleLogin buttonText={"Login with Google"} />
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
