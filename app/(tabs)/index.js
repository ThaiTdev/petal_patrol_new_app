import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginProvider from "../../context/LoginProvider";
import WelcomeNavigator from "./navigators/WelcomeNavigators"; // Importer depuis le bon chemin
import AuthNavigator from "./navigators/AuthNavigator";
import MenuNavigator from "./navigators/MenuNavigator";
import MenuContainer from "../../components/Menu/MenuContainer";
import UserNavigators from "./navigators/UserNavigators";
import AdNavigator from "./navigators/AdNavigator";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <LoginProvider>
      <NavigationContainer independent={true}>
        <MenuContainer />
        <Stack.Navigator headerMode="none">
          <Stack.Screen
            name="Welcome"
            component={WelcomeNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Authentification"
            component={AuthNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ad"
            component={AdNavigator}
            options={{ headerShown: false }}
          />

          {/* <Stack.Screen
            name="Users"
            component={UserNavigators}
            options={{ headerShown: false }}
          /> */}
          <Stack.Screen
            name="Menu"
            component={MenuNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </LoginProvider>
  );
};

export default App;
