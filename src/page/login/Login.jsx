import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css'

import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // تخزين بيانات المستخدم
    localStorage.setItem("loggedInUser", JSON.stringify({ email, password }));
    localStorage.setItem("loggedIn", "true");

    // إجبار App إنه يعرف إنك سجلت دخول
    window.dispatchEvent(new Event("storage"));

    // التحويل للصفحة الرئيسية
    navigate("/");
  };

  return (
    <>
      <div className='login w-75 mx-auto mt-5  p-5 rounded-5'>
        <h1 className="text-center fs-1 fw-bold">Login</h1>
        <div className="container">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Form.Text className="text">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button className="submit" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Login;