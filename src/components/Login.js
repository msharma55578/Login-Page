import React, { useState } from "react";
import { Button,Form } from 'react-bootstrap';
import axios from 'axios';
import "./Styles.css";
import { Link } from 'react-router-dom';


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 5;
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.post("http://localhost:8080/login",{
      email:email,
      password:password
    })
    .then( (response)=>{
      // alert("successfully inserted")  
      console.log(response.data)
      if(response.data===true){
        alert("successfully login")
      }else{
        alert("check username or password")
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
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
        <Link to="/register">
            <label>Sign Up</label>
        </Link>
        <Link to="/forget">
            <label className="tab">forget password</label>
        </Link>
      </Form>
    </div>
    )
}
