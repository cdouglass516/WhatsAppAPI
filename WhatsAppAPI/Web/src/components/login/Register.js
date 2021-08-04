import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useHistory } from "react-router-dom";
import { register } from "../../modules/authManager";

export default function Register() {
  const history = useHistory();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const registerClick = (e) => {
    e.preventDefault();
    if (password && password !== confirmPassword) {
      alert("Passwords don't match. Do better.");
    } else {
      let newName = name.split(" ");
      let last = "";
      if (newName.lenght > 1) {
        last = newName[1];
      }
      const userProfile = {
        id: 0,
        userName: name,
        firstName: newName[0],
        lastName: last,
        roleId: 1,
        email: email,
        imageLocation: "",
        createDateTime: "2021-08-04T16:39:12.370Z",
        inActive: false,
      };

      register(userProfile, password).then(() => history.push("/"));
    }
  };

  return (
    <div style={loginCSS}>
      <Form onSubmit={registerClick}>
        <fieldset>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              autoFocus
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              id="email"
              type="text"
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
            <Label for="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Button>Register</Button>
          </FormGroup>
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
