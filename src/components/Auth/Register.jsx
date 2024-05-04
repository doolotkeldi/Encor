import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "", name:"",surname:""});
  console.log(user);
  const onchachHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const isDisabled = user.email === "" || user.password === "";

  async function getService() {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password,
        user.name,
        user.surname
      );
      
      console.log(res)
      toast.success("email is success");
      setUser({ email: "", password: "",name:"",surname:"" });
      if (res.user) {
        navigate("/");
      }

      console.log(res);
    } catch (error) {
      console.log("error is getService Register", error);
      if (error) {
        toast.error("this is an email already sing up", error);
      }
    }
  }

  return (
    <div
      style={{
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
          <Card.Title
            style={{
              fontSize: "50px",
              fontFamily: "Dancing Script",
              marginTop: "40px",
              margin: "0",
              fontWeight: "700",
            }}
          >
            Register
          </Card.Title>
          <h2 style={{
            fontSize:"23px",
           textAlign:"center",
           marginTop:"15px"
          }}>Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.</h2>
          <ToastContainer />
          <Form style={{ marginTop: "40px" }}>
            <Form.Group style={{ textAlign: "left" }} controlId="formBaicEmail">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control
                style={{
                  height: "50px",
                }}
                value={user.email}
                type="email"
                name="email"
                onChange={onchachHandler}
                placeholder="телефон имя пользователя эл.адрес"
              />
            </Form.Group>
            {/* nacholo form group  */}
            <Form.Group style={{ textAlign: "left" }} controlId="formBaicEmail">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control
                style={{
                  height: "50px",
                  marginTop:"20px"
                }}
                value={user.name}
                type="text"
                name="name"
                onChange={onchachHandler}
                placeholder="имя и фамилия"
              />
            </Form.Group>
            <Form.Group style={{ textAlign: "left" }} controlId="formBaicEmail">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control
                style={{
                  height: "50px",
                  marginTop:"20px"
                }}
                value={user.surname}
                type="text"
                name="surname"
                onChange={onchachHandler}
                placeholder="имя пользователя "
              />
            </Form.Group>
            <Form.Group
              style={{ textAlign: "left", marginTop: "15px" }}
              controlId="formBaicEmail"
            >
              {/* <Form.Label>пороль</Form.Label> */}
              <Form.Control
                className="form-input"
                style={{
                  height: "50px",
                  backgroundColor: "rgba(255, 255, 255, 0.92)",
                }}
                value={user.password}
                type="password"
                onChange={onchachHandler}
                name="password"
                placeholder="пороль"
              />
            </Form.Group>
            <p
              style={{
                width: "340px",
                fontSize: "14px",
                lineHeight: "20px",
                textAlign:"center",
                marginTop:"20px"
              }}
            >
              Люди, которые пользуются нашим сервисом, <br />могли загрузить вашу
              контактную информацию <br /> в Instagram. Подробнее
            </p>
            <p
              style={{
                width: "340px",
                lineHeight: "20px",
                fontSize: "14px",
                textAlign:"center"
              }}
            >
              Регистрируясь, вы принимаете наши Условия, <br /> Политику
              конфиденциальности и Политику в <br /> отношении файлов cookie.
            </p>
            <Button
              disabled={isDisabled}
              style={{
                marginTop: "20px",
                width: "100%",
                borderRadius: "12px",
                height: "45px",
              }}
              onClick={() => getService()}
            >
              Регистрация
            </Button>
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
            display:"flex",
            justifyContent:"center"
          }}
        >
          <p style={{ margin: "0" }}>Есть аккаунт?</p>
          <Link
            style={{
              margin: "0",
              fontSize: "18px",
              fontFamily: "normal",
              textDecoration: "none",
              outline: "none",
            }}
            to="/"
          >
            Вход
            {/* <button>создать новый аккаунт</button> */}
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Register;
