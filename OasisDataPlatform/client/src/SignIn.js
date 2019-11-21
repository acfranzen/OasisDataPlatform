import React, { useState} from "react";
import { Button, Form, FormGroup, FormControl, FormLabel, Jumbotron, Badge } from "react-bootstrap";
import "./SignIn.css"
const img = require("./OasisPhoto.png");
const resetLink = "";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div class="container">
      <Jumbotron>
        <div className="Login">
          <img src={img} class-name="img" alt="Sign in logo"/>
          <br></br>
          <Badge variant="primary">Please use your Oasis Center info to sign-in</Badge>
          <Form onSubmit={handleSubmit}>
            <FormGroup controlId="email" bsSize="large">
              <FormLabel></FormLabel>
              <FormControl
                autoFocus
                placeHolder="Email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <FormLabel></FormLabel>
              <FormControl
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
              />
            </FormGroup>
            <Button block bsSize="large" disabled={!validateForm()} type="submit">
              Sign in
            </Button>
          </Form>
          <a className="password-reset" href={resetLink}>Forgot your password?</a>
        </div>
      </Jumbotron>
    </div>
  );
}