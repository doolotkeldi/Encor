import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LoginPage from "../../Pages/LoginPage";

function Layout() {
  const [isLogin, setisLogin] = useState(false);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
