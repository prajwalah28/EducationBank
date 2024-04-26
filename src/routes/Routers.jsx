import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import AccountProfile from "../pages/AccountPage/AccountProfile";
import Signup from "../pages/Signup/Signup";
import Final from "../pages/AddCart/Final";
import ShowCart from "../pages/AddCart/ShowCart";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import MyLearning from "../pages/MyLearning/MyLearning";
import VideoPlayer from "../pages/MyLearning/VideoPlayer";
import PaymentPage from "../pages/PaymentPage/PaymentPage";

const Routers = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<AccountProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account/:category" element={<AccountProfile />} />
        <Route path="/courses" element={<Final/>} />
        <Route path="/cart" element={<ShowCart/>} />
        <Route path="/coursedetails" element={<CourseDetails/>} />
        <Route path="/MyLearning" element={<MyLearning/>} />
        <Route path="/VideoPlayer" element={<VideoPlayer/>} />
        <Route path="/Payment" element={<PaymentPage/>} />
        <Route path="/Payment" element={<PaymentPage/>} />

    
      </Routes>
      
    </div>
  );
};

export default Routers;
