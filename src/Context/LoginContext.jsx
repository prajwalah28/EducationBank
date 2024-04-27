import React, { useState, createContext } from "react";

const UserContext = createContext();

const ContextProvider = ({ children }) => {
  const [datahide, setdatahide] = useState(true);

  const values = {
    datahide,
    setdatahide,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
export { UserContext, ContextProvider };
