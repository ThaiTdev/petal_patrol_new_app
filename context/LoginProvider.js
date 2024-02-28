import React, { createContext, useContext, useState } from "react";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState({});
  const [data, setData] = useState({});
  const [imagesPlant, setImagesPlant] = useState([]);
  const [dataPlant, setDataPlant] = useState({});
  const updateFormData = (formData) => {
    setData(formData);
  };

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        profile,
        setProfile,
        data,
        setData: updateFormData,
        imagesPlant,
        setImagesPlant,
        dataPlant,
        setDataPlant,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const userLogin = () => useContext(LoginContext);

export default LoginProvider;
