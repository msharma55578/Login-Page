import React, { useState } from "react";
import { Button,Form } from 'react-bootstrap';
import axios from 'axios';
import "./Styles.css";

export default function Forget() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [color, setColor] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 5;
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.put("http://localhost:8080/forget",{
      email:email,
      color:color,
      password:password
    })
    .then( (response)=>{
      // alert("successfully inserted")  
      console.log(response.data)
      if(response.data===true){
        alert("Password Reset successfully")
      }else{
        alert("check Email or Secuity Question")
      }
    })
  }
  
    return (
        <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
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
          <Form.Label>Reset Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
    )
}
