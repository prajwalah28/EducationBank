import React, { useContext, useState } from "react";
import { Icons } from "../../assets/assets";
import { Link as Likns } from "react-scroll";
import { Link } from "react-router-dom";
import { ContextProvider, UserContext } from "../../Context/LoginContext";

const Authentication = () => {
  const [hide, SetHide] = useState(false);
  const [show, setshow] = useState(false);

  const { datahide, setdatahide } = useContext(UserContext);

  const ChangeIcon = () => {
    SetHide(!hide);
  };

  const Subform = (e) => {
    e.preventDefault();
    alert("hello");
  };
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
            type="Email"
            placeholder="Email"
            className="px-5 outline-none"
            required
          />
        </div>

        <div className="border-2 border-orange-500 mb-5 h-16 flex items-center ">
          <input
            type={hide ? "text" : "password"}
            placeholder="Password"
            className="px-5 outline-none"
            required
          />

          <div onClick={ChangeIcon} className="text-2xl">
            {hide ? <Icons.BiSolidShow /> : <Icons.BiSolidHide />}
          </div>
        </div>

        <div className="mx-auto  w-44 px-2">
          <h1>
            or{" "}
            <span className="font-bold text-orange-500">Forget Password</span>
          </h1>
        </div>

       
          <Link to={"/"}>
            <input type="submit" value="Login" className="bg-blue-950 text-center text-white py-3 px-32 mt-2 cursor-pointer"  onClick={() => {
            setdatahide(!datahide);
          }} />
          </Link>
       
      </form>

      <div className="mt-4">
        <hr />
      </div>
      <div className=" mx-auto text-center  py-3">
        <h1>
          Don't have an acount ?{" "}
          <Link to="/signup">
            <span className=" text-orange-500 cursor-pointer ">Sign Up</span>
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Authentication;