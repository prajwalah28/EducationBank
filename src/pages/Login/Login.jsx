import React, { useContext, useState } from "react";
import { Icons } from "../../assets/assets";
import axios from "axios"; // Import axios for making HTTP requests
import { UserContext } from "../../Context/LoginContext";
import { Base_URL } from "../../config";

const Authentication = () => {
  const [hide, setHide] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setdatahide } = useContext(UserContext);
  const [error, setError] = useState(null);

  const togglePasswordVisibility = () => {
    setHide(!hide);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch all signup details from the backend
      const response = await axios.get(`${Base_URL}/loginDetails`);

      // Check if login credentials match any of the signup details
      const user = response.data.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        // Login successful
        console.log("Login successful!");
        setdatahide(!datahide);
      } else {
        // Login failed
        setError("Invalid email or password.");
      }
    } catch (error) {
      // Handle any errors that occur during the request
      console.error("Error occurred:", error);
      setError("An error occurred while logging in. Please try again later.");
    }
  };

  return (
    <div className="w-80  px-2 py-3 mx-auto mt-16 font-bold">
      <div>
        <h1>Login to your NgpIT account</h1>
      </div>

      {/* {/ Continue with Apple /} */}
      <div className="border-2 border-orange-500 mt-4 mb-5 h-16 flex items-center gap-3 px-3">
        <Icons.FaApple className="text-4xl" />
        <h1>Continue with Apple</h1>
      </div>

      {/* {/ Continue with Google /} */}
      <div className="border-2 border-orange-500 mb-5 h-16 flex items-center  gap-3 px-3">
        <Icons.FcGoogle className="text-4xl" />
        <h1>Continue with Google</h1>
      </div>

      {/* {/ Login form /} */}
      <form onSubmit={handleFormSubmit}>
        {/* {/ Email input /} */}
        <div className="border-2 border-orange-500 mb-5 h-16 flex items-center">
          <input
            type="email"
            placeholder="Email"
            className="px-5 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* {/ Password input /} */}
        <div className="border-2 border-orange-500 mb-5 h-16 flex items-center">
          <input
            type={hide ? "text" : "password"}
            placeholder="Password"
            className="px-5 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div onClick={togglePasswordVisibility} className="text-2xl">
            {hide ? <Icons.BiSolidShow /> : <Icons.BiSolidHide />}
          </div>
        </div>

        {/* {/ Forgot password link /} */}
        <div className="mx-auto w-44 px-2">
          <h1>
            or{" "}
            <span className="font-bold text-orange-500">Forget Password</span>
          </h1>
        </div>

        {/* {/ Submit button /} */}
        <input
          type="submit"
          value="Login"
          className="bg-blue-950 text-center text-white py-3 px-32 mt-2 cursor-pointer"
        />

        {/* {/ Error message /} */}
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>

      {/* {/ Other UI elements /} */}
    </div>
  );
};

export default Authentication;
