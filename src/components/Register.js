import React, { useState } from "react";
import { Button,Form } from 'react-bootstrap';
import axios from 'axios';
import "./Styles.css";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [color, setColor] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 5;
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.post("http://localhost:8080/add",{
      name:name,
      email:email,
      color:color,
      password:password
    })
    .then( (response)=>{
      console.log(response.data)
      alert("successfully inserted");
    })
  }
    return (
        <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Label>Security Question: What is your fav. color</Form.Label>
          <Form.Control
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Register
        </Button>
      </Form>
    </div>
    )
}
