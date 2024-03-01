import React, { createContext, useContext, useState } from "react";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState({});
  const [allData, setAllData] = useState({});
  const [imagesPlant, setImagesPlant] = useState([]);
  const [dataPlant, setDataPlant] = useState({});
  const updateFormData = (formData) => {
    setAllData(formData);
  };

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        profile,
        setProfile,
        allData,
        setAllData: updateFormData,
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
