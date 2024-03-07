// UsersNavigator.tsx
import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigationState } from "@react-navigation/native";
import { useRouteContext } from "../RouteContext";
import FirstConnexion from "../Authentification/FirstConnexion";
import LoginForm from "../Authentification/LoginForm";
import SignupForm from "../Authentification/SignupForm";
import LostPassword from "../Authentification/Lost_Password";
import CGUComponent from "../Authentification/CGUComponent";
import MenuContainer from "../../../components/Menu/MenuContainer";

// import Ads_List from "../Ads/Ads_List";

const Stack = createNativeStackNavigator();

const AuthNavigators = ({ navigation, updateRoute }) => {
  // const state = useNavigationState((state) => state);
  // const currentScreen = state?.routes[state.index]?.name;

  // useEffect(() => {
  //   updateRoute(currentScreen);
  // }, [currentScreen]);
  const { updateCurrentRoute } = useRouteContext();

  useEffect(() => {
    updateCurrentRoute("Authentification");
  }, []);
  return (
    <>
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
        name="CGUComponent"
        component={CGUComponent}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
    </>
  );
};

export default AuthNavigators;
