import React, { useState, createContext, useEffect } from "react";

const UserContext = createContext();

const ContextProvider = ({ children }) => {
  const [datahide, setdatahide] = useState(true);
  const [userEmail, setUserEmail] = useState("");

  

  const values = {
    datahide,
    setdatahide,
    userEmail,
    setUserEmail,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export { UserContext, ContextProvider };


