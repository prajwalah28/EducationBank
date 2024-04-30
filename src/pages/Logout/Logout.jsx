import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/LoginContext";
import { useContext, useState, useEffect } from "react";

const Logout = ({ handleLogout }) => {
  const { userEmail } = useContext(UserContext);
  useEffect(() => {
    // Fetch user details based on userEmail from the API
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`http://192.168.1.9:8080/api/loginDetails?email=${userEmail}`);
        if (response.ok) {
          const data = await response.json();
          // Set the userName based on the fetched data
          setUserName(data.username); // Assuming the API returns the username as "username"
        } else {
          // Handle API error
          console.error("Error fetching user details:", response.status);
        }
      } catch (error) {
        // Handle fetch error
        console.error("Error fetching user details:", error);
      }
    };

    // Call the fetchUserDetails function if userEmail is available
    if (userEmail) {
      fetchUserDetails();
    }
  }, [userEmail]);

  const [userName, setUserName] = useState(""); // Update this line
  return (
    <div className="flex flex-col border border-gray-300 w-80 shadow-2xl fixed right-4 top-20  bg-white rounded-md">
      <Link to="/account"><div className="flex items-center px-4 py-3 gap-2">
        
        
            <div className="bg-blue-950 px-4 py-3 rounded-full text-white font-bold cursor-pointer ">
              {userName && userName.split(" ").map((name) => name[0]).join("")}
            </div>
            <div className="flex flex-col gap-1">
              <h1>{userName}</h1>
              <h1>{userEmail}</h1>
            </div>
          
        
      </div></Link>
      <div className="flex flex-col border border-gray-300 border-gray-300k  py-4 px-4 font-semibold border-r-0 border-l-0 ">
        <Link to="/MyLearning">
          <a>My Learning</a>
        </Link>
        <Link to="/cart">
          <a>My cart</a>
        </Link>
        <Link to="/cart">
          <a>My Wishlist</a>
        </Link>
      </div>
      <div className="flex flex-col px-4 py-3 font-semibold ">
        <a>Help</a>
      <Link to="/">  <button onClick={handleLogout}>Log out</button></Link>
      </div>
    </div>
  );
};

export default Logout;