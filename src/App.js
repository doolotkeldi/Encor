import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Paylout from "./components/Paylout/Paylout";
import Contact from "./components/Contact/Contact";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import { useEffect, useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Auth from "./components/Auth/Auth";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ForgotPassworddd from "./components/Auth/ForgotPassword";

function App() {
  const [isRegister, setIsRegister] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if(user) {
        setIsRegister(user)
      }
      else{
        setIsRegister(null)
      }
    });
  }, []);

  // function signOutHandler() {
  //   const isAuth = window.confirm("Are you sure you want to sign out?");
  //   if (isAuth) {
  //     signOut(auth);
  //   }
  // }

  // if (isRegister === null) {
  //   // Wait for authentication state to load
  //   return null;
  // }

  return (
    <Routes>
      {isRegister ? (
        <Route
          path="/"
          element={<Layout />}
        >
          <Route index element={<Home />} />
          <Route path="/paylout" element={<Paylout />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      ) : (
        <Route path="/" element={<Auth />}>
          <Route index element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forget" element={<ForgotPassworddd/>}/>
          <Route path="/forgot" element={<ForgotPassword/>}/>
        </Route>
      )}
    </Routes>
  );
}

export default App;
