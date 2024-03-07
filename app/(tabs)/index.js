import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import Navigation from "./Navigation";
import LoginProvider from "../../context/LoginProvider";
import { RouteProvider } from "./RouteContext";


const App = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Light": require("../../assets/fonts/Roboto-Light.ttf"),
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
    "Merriweather-Light": require("../../assets/fonts/Merriweather-Light.ttf"),
    "Merriweather-Regular": require("../../assets/fonts/Merriweather-Regular.ttf"),
    "Merriweather-Bold": require("../../assets/fonts/Merriweather-Bold.ttf"),
  });

  return (
    <>
    <LoginProvider>
      <RouteProvider>
        <SafeAreaProvider>
          <StatusBar barStyle="dark-content" />
          <Navigation />
        </SafeAreaProvider>
      </RouteProvider>
    </LoginProvider>
    </>
  );
};

export default App;
