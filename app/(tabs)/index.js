import React, {useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
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
import PostAdNavigator from "./navigators/PostAdNavigator";

const Stack = createNativeStackNavigator();

const App = () => {
    const [currentRoute, setCurrentRoute] = useState(null);
    const [fontsLoaded] = useFonts({
      "Roboto-Light": require("../../assets/fonts/Roboto-Light.ttf"),
      "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
      "Roboto-Medium": require("../../assets/fonts/Roboto-Medium.ttf"),
      "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
      "Merriweather-Light": require("../../assets/fonts/Merriweather-Light.ttf"),
      "Merriweather-Regular": require("../../assets/fonts/Merriweather-Regular.ttf"),
      "Merriweather-Bold": require("../../assets/fonts/Merriweather-Bold.ttf"),
    });

  const updateCurrentRoute = (route) => {
    setCurrentRoute(route);
  };
  console.log("CURRENT ROUTE",currentRoute);

  const shouldDisplayMenuContainer = () => {
    const excludedComponents = ["Welcome", "Authentification", "PlantSittingTracking"];
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
          <Stack.Screen 
          name="PostAd"
          component={PostAdNavigator} 
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
  );
};

export default App;
