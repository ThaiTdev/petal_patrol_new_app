import React, {useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginProvider from "../../context/LoginProvider";
import WelcomeNavigator from "./navigators/WelcomeNavigators";
import AuthNavigator from "./navigators/AuthNavigator";
import MenuNavigator from "./navigators/MenuNavigator";
import MenuContainer from "../../components/Menu/MenuContainer";
import UserNavigators from "./navigators/UserNavigators";
import AdsNavigator from "./navigators/AdsNavigator";
import ChatNavigators from "./navigators/ChatNavigators";
import PhotosNavigator from "./navigators/PhotosNavigator";
import ContactSupportNavigation from "./navigators/ContactSupportNavigator";
import PlantSittingTrackingNavigator from "./navigators/PlantSittingTrackingNavigator";
import { StyleSheet } from "react-native-web";
import { useFonts } from "expo-font";
import SpaceMono from '../../assets/fonts/SpaceMono-Regular.ttf';
import { Text } from "react-native-elements";
import { createContext } from 'react';
import { ThemeContext } from "react-native-elements";
import themes from "../../constants/themes";

const Stack = createNativeStackNavigator();

const App = () => {
    const [currentRoute, setCurrentRoute] = useState(null);
    const themeFile = themes();

    const [fontsLoaded] = useFonts({
      SpaceMono,
    });
    if (!fontsLoaded) {
      return null;
    }

  const updateCurrentRoute = (route) => {
    setCurrentRoute(route);
  };
  console.log("CURRENT ROUTE",currentRoute);

  const shouldDisplayMenuContainer = () => {
    const excludedComponents = ["Welcome", "Authentification", "PlantSittingTracking"];
    return currentRoute && !excludedComponents.includes(currentRoute);
  };
  return (
    <ThemeContext.Provider value={themeFile}>
    <LoginProvider>
      <Text style={styles.spaceMono}>TEST</Text>
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
          <Stack.Screen name="PlantSittingTracking" options={{ headerShown: false }}>
            {(props) => <PlantSittingTrackingNavigator {...props} updateRoute={updateCurrentRoute} />}
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
    </ThemeContext.Provider>
  );
};

export default App;
const styles = StyleSheet.create({
  spaceMono: {
    fontFamily: "SpaceMono",
    fontSize: 20,
  },
});