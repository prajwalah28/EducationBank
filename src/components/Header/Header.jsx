import { Icons } from "../../assets/assets";
import { Link } from "react-router-dom";
import Logout from "../../pages/Logout/Logout";
import { ContextProvider, UserContext } from "../../Context/LoginContext";
import React, { useContext, useState } from "react";

const Header = ({ cartCount }) => {
  const [show, setShow] = useState(true);
  const [profile, setProfile] = useState(false);
  const { datahide, setdatahide } = useContext(UserContext);
  const { userName, userEmail } = useContext(UserContext);

  const handleLogout = () => {
    setProfile(false); // Set profile to false
    setdatahide(true); // Set datahide to true
  };

  return (
    <div className="mb-24">
      <div className="fixed top-0 w-full bg-gray-100 shadow-xl py-6 px-10 flex justify-between items-center font-bold z-50">
        <div className="flex items-center gap-4">
          <Link to="/">
            <div className="flex cursor-pointer">
              <img src={Icons.logo} alt="" className="w-30 h-12" />
            </div>
          </Link>

          <Link to="/courses">
            <h1>Categories</h1>
          </Link>
          <div className="flex items-center border border-gray-800 rounded-3xl px-2 gap-3 bg-slate-300">
            <Icons.FaSearch />
            <input
              type="text"
              placeholder="search your course"
              className="rounded-r-xl px-3 h-8 outline-none bg-slate-300"
            />
          </div>
          <h1>Teach on NgpIT</h1>
        </div>

        <div className="flex gap-3 items-center">
          <Link to="/cart">
            <div>
              <Icons.FiShoppingCart className="text-3xl" />
              <span>{cartCount}</span>
            </div>
          </Link>

          {datahide ? (
            <>
              <Link to="/login">
                <button
                  className="border border-black px-5 py-2 rounded-sm"
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  Log in
                </button>
              </Link>

              <Link to="/signup">
                <button className="border border-black px-5 py-2 rounded-sm bg-blue-950 text-white">
                  Sign in
                </button>
              </Link>
            </>
          ) : (
            <>
              <div className="flex gap-4 items-center">
                <div className="flex gap-4">
                  <Icons.FaRegHeart className="text-3xl " />
                  <Icons.BiBell className="text-3xl " />
                </div>
                <div
                  className="bg-blue-950 px-4 py-3 rounded-full text-white cursor-pointer"
                  onClick={() => {
                    setProfile(!profile);
                    // setdatahide(!datahide);
                  }}
                >
                <h1> {userName && userName.split(" ").map((name) => name[0].toUpperCase()).join("")}</h1>

                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="">
        {profile ? (
          <>
            {" "}
            <Logout handleLogout={handleLogout} />{" "}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Header;
