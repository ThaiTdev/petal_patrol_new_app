// UsersNavigator.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstConnexion from "../Authentification/FirstConnexion";
import LoginForm from "../Authentification/LoginForm";
import SignupForm from "../Authentification/SignupForm";

const Stack = createNativeStackNavigator();

const AuthNavigators = ({ navigation }) => {
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
    </Stack.Navigator>
  );
};

export default AuthNavigators;
