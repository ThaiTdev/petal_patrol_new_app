import React, { createContext, useContext, useState } from "react";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState({});
  const [data, setData] = useState({});
  const [imageplant, setImagePlante] = useState([]);

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        profile,
        setProfile,
        data,
        setData,
        imageplant,
        setImagePlante,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const userLogin = () => useContext(LoginContext);

export default LoginProvider;
