import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useHistory, Link } from "react-router-dom";
import { login } from "../../modules/authManager";

export default function Login({ setIsAdmin, }) {
  const history = useHistory();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginSubmit = (e) => {
    e.preventDefault();
    if (e.nativeEvent.submitter.id === "back") history.push("/");
    login(email, password).then((role) => {
      if (role) {
        // if (role === 9) {
        //   setIsAdmin(true);
        // }
        history.push("/");
      } else {
        alert("Login Failed");
      }
    });
  };

  return (
    <div style={loginCSS}>
      <Form onSubmit={loginSubmit}>
        <fieldset>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              id="email"
              type="text"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Button id="login">Login</Button>
            <Button id="back">Back</Button>
          </FormGroup>
          <em>
            Not registered? <Link to="register">Register</Link>
          </em>
        </fieldset>
      </Form>
    </div>
  );
}
const loginCSS = {
  display: "flex",
  background: "#ede6e6",
  maxWidth: "35rem",
  margin: ".5rem auto",
  overflow: "auto",
  minHeight: "8rem",
  border: "1px solid darkred",
  padding: ".5rem",
  borderRadius: "5px",
};
