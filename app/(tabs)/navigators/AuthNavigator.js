// UsersNavigator.tsx
import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigationState } from "@react-navigation/native";
import FirstConnexion from "../Authentification/FirstConnexion";
import LoginForm from "../Authentification/LoginForm";
import SignupForm from "../Authentification/SignupForm";
import LostPassword from "../Authentification/Lost_Password";
import Confidentials from "../Authentification/confidentials";
// import Ads_List from "../Ads/Ads_List";

const Stack = createNativeStackNavigator();

const AuthNavigators = ({ navigation, updateRoute }) => {
  const state = useNavigationState((state) => state);
  const currentScreen = state?.routes[state.index]?.name;

  useEffect(() => {
    updateRoute(currentScreen);
  }, [currentScreen]);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FirstCo"
        component={FirstConnexion}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupForm}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginForm}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LostPassword"
        component={LostPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Confidentials"
        component={Confidentials}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigators;
