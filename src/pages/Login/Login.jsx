import React, { useContext, useState, useEffect } from "react";
import { Icons } from "../../assets/assets";
import { Link as Likns } from "react-scroll";
import { Link } from "react-router-dom";
import { ContextProvider, UserContext } from "../../Context/LoginContext";
import { Base_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Authentication = () => {
  const navigate = useNavigate();
  const [hide, SetHide] = useState(false);
  const [show, setShow] = useState(false);
  const { datahide, setdatahide } = useContext(UserContext);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const ChangeIcon = () => {
    SetHide(!hide);
  };

  const Subform = async (e) => {
    e.preventDefault();

    // Extract email and password from the form
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    try {
      const response = await fetch(`http://192.168.1.9:8080/api/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }), // Send JSON data
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (response.ok) {
        // If login is successful, set loginSuccess to true
        setLoginSuccess(true);
        toast.success("Login successful");
      } else {
        // If login fails, handle error appropriately
        toast.error("Login failed");
      }
    } catch (error) {
      // Handle any network or other errors
      console.error("Error:", error);
      toast.error("An error occurred while processing your request.");
    }
  };

  useEffect(() => {
    if (loginSuccess) {
      const timeout = setTimeout(() => {
        navigate('/');
      }, 2000); // 2-second delay

      return () => clearTimeout(timeout);
    }
  }, [loginSuccess, navigate]);
  
  
  return (
    <div className="w-80  px-2 py-3 mx-auto mt-16 font-bold">
      <div>
        <h1>Login to your NgpIT account</h1>
      </div>

      <div className="border-2 border-orange-500 mt-4 mb-5 h-16 flex items-center gap-3 px-3">
        <Icons.FaApple className="text-4xl" />
        <h1>Continue with Apple</h1>
      </div>

      <div className="border-2 border-orange-500 mb-5 h-16 flex items-center  gap-3 px-3">
        <Icons.FcGoogle className="text-4xl" />
        <h1>Continue with Google</h1>
      </div>

      <form action="" onSubmit={Subform}>
  <div className="border-2 border-orange-500 mb-5 h-16 flex items-center ">
    <input
      type="email" // corrected to lowercase 'email'
      name="email" // added name attribute
      placeholder="Email"
      className="px-5 outline-none"
      required
    />
  </div>

  <div className="border-2 border-orange-500 mb-5 h-16 flex items-center ">
    <input
      type={hide ? "text" : "password"}
      name="password" // added name attribute
      placeholder="Password"
      className="px-5 outline-none"
      required
    />

    <div onClick={ChangeIcon} className="text-2xl">
      {hide ? <Icons.BiSolidShow /> : <Icons.BiSolidHide />}
    </div>
  </div>

  <div className="mx-auto w-44 px-2">
    <h1>
      or{" "}
      <span className="font-bold text-orange-500">Forget Password</span>
    </h1>
  </div>

  <div>
  <input
    type="submit"
    value="Login"
    className="bg-blue-950 text-center text-white py-3 px-32 mt-2 cursor-pointer"
    onClick={() => {
      setdatahide(!datahide);
    }}
  />
  </div>
</form>


      <div className="mt-4">
        <hr />
      </div>
      <div className=" mx-auto text-center  py-3">
        <h1>
          Don't have an account ?{" "}
          <Link to="/signup">
            <span className=" text-orange-500 cursor-pointer ">Sign Up</span>
          </Link>
        </h1>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Authentication;