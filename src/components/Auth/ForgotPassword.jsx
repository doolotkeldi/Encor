import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";
function ForgotPassworddd() {
  const [email, setEmail] = useState("");

  const handlerResetPassword = async (e) => {
    try {
      const res = await sendPasswordResetEmail(auth, email);
      console.log(res);
      toast.success("Password reset email send. check your inbox");
    } catch (error) {
      if (error) {
        toast.error("error is ", error);
      }
    }
  };
  return (
    <div>
      <Card style={{ width: "350px", margin: "0 auto",marginTop:"100px" }}>
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            alignItems:"center"
          }}
        >
          <Card.Title style={{ textAlign: "center" }}>Не удается войти?</Card.Title>

          <Form>
            <Form.Group controlId="formBaicEmail">
              <Form.Control style={{
                width:"300px"
              }}
                name="email"
                value={email}
                type="email"
                placeholder="телефон имя пользователя эл.адрес"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Button style={{
              marginTop:"20px",
              width:"300px"
            }} onClick={() => handlerResetPassword()}>Получить код для выхода</Button>
          </Form>
          <div className="info-line">
            <div className="line"></div>
            или
            <div className="line"></div>
          </div>
          <Link
            to="/register"
            style={{
              fontSize: "18px",
              color: "black",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Создать новый аккаунт
          </Link>
          <Link to="/">
          <Button style={{
            marginTop:"100px",
            width:"300px"
          }}>Вернуться к выходу</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ForgotPassworddd;
