import React, { createContext, useContext, useState } from "react";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState({});
  const [data, setData] = useState({});
  const [imagesPlant, setImagesPlant] = useState([]);
  // const [startDate, setStartDate] = useState();
  // const [endDate, setEndDate] = useState();
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
        // startDate,
        // setStartDate,
        // endDate,
        // setEndDate
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const userLogin = () => useContext(LoginContext);

export default LoginProvider;
