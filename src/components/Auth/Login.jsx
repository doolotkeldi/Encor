import React, { useEffect, useState } from "react";

import { Form, Button, Card } from "react-bootstrap";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "./Login.css";
// style="background-color: #80ADD8;"
function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  async function getService() {
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      toast.success("email is success");
    } catch (error) {
      toast.error("this is an email already sing up", error);
    }
  }

  const isDisabled = user.email === "" || user.password === "";

  function onchachHandler(e) {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <div
      style={{
        // width: "100%",
        // height: "100vh",
        paddingTop: "50px",
      }}
    >
      <Card
        style={{
          width: "380px",
          margin: "0 auto",

          gap: "30px",
          textAlign: "center",
          // background:"none"
        }}
      >
        <Card.Body>
          <Card.Title style={{
            fontSize:"50px",
            fontFamily:"Dancing Script",
            marginTop:"40px",
            margin:"0",
            fontWeight:"700"
          }}>Login</Card.Title>
          <ToastContainer />
          <Form style={{ marginTop:"40px" }}>
            <Form.Group style={{ textAlign: "left" }} controlId="formBaicEmail">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control style={{
                height:"50px"
              }}
                value={user.email}
                type="email"
                name="email"
                onChange={onchachHandler}
                placeholder="телефон имя пользователя эл.адрес"
              />
            </Form.Group>
            <Form.Group
              style={{ textAlign: "left", marginTop: "15px" }}
              controlId="formBaicEmail"
            >
              {/* <Form.Label>пороль</Form.Label> */}
              <Form.Control className="form-input" style={{
                height:"50px",
                backgroundColor:"rgba(255, 255, 255, 0.92)"
                
              }}
                value={user.password}
                type="password"
                onChange={onchachHandler}
                name="password"
                placeholder="пороль"
              />
            </Form.Group>

            <Button
              disabled={isDisabled}
              style={{ marginTop: "20px", width: "100%", borderRadius: "12px",height:"45px" }}
              onClick={() => getService()}
            >
              войти
            </Button>

            <div className="info-line">
              <div className="line"></div>
              или
              <div className="line"></div>
            </div>
            <Link
              to="/forget"
              style={{
                fontSize: "18px",
                textDecoration: "none",
                lineHeight: "50px",
              }}
            >
              забыли пороль?
            </Link>
          </Form>
        </Card.Body>
      </Card>
      <Card
        style={{
          width: "380px",
          margin: "0 auto",
          marginTop:"20px"
        }}
        className=""
      >
        <Card.Body
          style={{
            display: "flex",
            fontSize: "18px",
            gap: "5px",
            fontFamily: "normal",
          }}
        >
          <p style={{ margin: "0" }}>У вас ещё нет аккаунта?</p>
          <Link
            style={{
              margin: "0",
              fontSize: "18px",
              fontFamily: "normal",
              textDecoration: "none",
              outline: "none",
            }}
            to="/register"
          >
            Зарегистрироваться
            {/* <button>создать новый аккаунт</button> */}
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
