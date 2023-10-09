// import React from "react";
import { Container, Card, Button, Form } from "react-bootstrap";
import { useState } from "react";
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async(event)=>{
    event.preventDefault();

    try{
        const response = awai axios.post('https://shy-cloud-3319.fly.dev/api/v1/auth/login',
        {
            email,
            password,
        }
        )

        const {data}= response.data;
        const{token}= data;
    }catch(error){
        if(axios.isAxiosError(error)){
            alert(error?.response?.data?.message)
        }
    }

  }

  return (
    <Container className="p-4">
      <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Form>
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
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
