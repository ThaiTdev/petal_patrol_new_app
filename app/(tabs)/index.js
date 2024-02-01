import React, {useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginProvider from "../../context/LoginProvider";
import WelcomeNavigator from "./navigators/WelcomeNavigators"; // Importer depuis le bon chemin
import AuthNavigator from "./navigators/AuthNavigator";
import MenuNavigator from "./navigators/MenuNavigator";
import MenuContainer from "../../components/Menu/MenuContainer";
import UserNavigators from "./navigators/UserNavigators";
import AdsNavigator from "./navigators/AdsNavigator";
import ChatNavigators from "./navigators/ChatNavigators";
import PhotosNavigator from "./navigators/PhotosNavigator";
import ContactSupportNavigation from "./navigators/ContactSupportNavigator";

const Stack = createNativeStackNavigator();

const App = () => {
    const [currentRoute, setCurrentRoute] = useState(null);

  const updateCurrentRoute = (route) => {
    setCurrentRoute(route);
  };
  console.log("CURRENT ROUTE",currentRoute);

  const shouldDisplayMenuContainer = () => {
    const excludedComponents = ["Welcome", "Authentification"];
    return currentRoute && !excludedComponents.includes(currentRoute);
  };
  return (
    <LoginProvider>
      <NavigationContainer independent={true}>
        {shouldDisplayMenuContainer() && <MenuContainer />}
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Welcome" options={{ headerShown: false }}>
            {(props) => <WelcomeNavigator {...props} updateRoute={updateCurrentRoute} />}
          </Stack.Screen>
          <Stack.Screen name="Authentification" options={{ headerShown: false }}>
            {(props) => <AuthNavigator {...props} updateRoute={updateCurrentRoute} />}
          </Stack.Screen>
          <Stack.Screen
            name="Users"
            component={UserNavigators}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Menu"
            component={MenuNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Ads" options={{ headerShown: false }}>
            {(props) => <AdsNavigator {...props} updateRoute={updateCurrentRoute} />}
          </Stack.Screen>
          <Stack.Screen
            name="Chat"
            component={ChatNavigators}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Photos"
            component={PhotosNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ContactSupport"
            component={ContactSupportNavigation}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </LoginProvider>
  );
};

export default App;
