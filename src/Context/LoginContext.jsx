import React, { useState, createContext} from "react";

const UserContext = createContext();

const ContextProvider = ({ children }) => {
  const [datahide, setdatahide] = useState(true);
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");

  const values = {
    datahide,
    setdatahide,
    userName,
    setUserName,
    userEmail,
    setUserEmail,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export { UserContext, ContextProvider };
