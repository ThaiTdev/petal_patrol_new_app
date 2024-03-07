// RouteContext.js

import React, { createContext, useContext, useState } from "react";

const RouteContext = createContext();

export const useRouteContext = () => useContext(RouteContext);

export const RouteProvider = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState(null);
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [navigationState, setNavigationState] = useState(null);

  const updateCurrentRoute = (route) => {
    setCurrentRoute(route);
  };

  // const shouldDisplayMenuContainer = () => {
  //   const excludedComponents = [
  //     "Welcome",
  //     "Authentification",
  //     "PlantSittingTracking",
  //     "PostAd",
  //   ,
  //   ];
  //   return currentRoute && !excludedComponents.includes(currentRoute);
  // };

  return (
    <RouteContext.Provider
      value={{
        currentRoute,
        updateCurrentRoute,
        isMenuVisible,
        setIsMenuVisible,
        navigationState,
        setNavigationState,
        // shouldDisplayMenuContainer,
      }}
    >
      {children}
    </RouteContext.Provider>
  );
};
