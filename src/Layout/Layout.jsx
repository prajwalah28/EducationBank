import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Routers from "../routes/Routers";
import { BrowserRouter } from "react-router-dom";
import AfterLogin from "../components/Header/AfterLogin";

const Layout = () => {
  // const [show, setShow] = useState(false);
  return (
    <div>
  
      <Header/>
      <Routers />
      <Footer />
    </div>
  );
};

export default Layout;
