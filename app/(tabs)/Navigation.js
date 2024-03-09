import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import LoginProvider from "../../context/LoginProvider";
import { useRouteContext } from "./RouteContext";
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

const Navigation = () => {
    const { currentRoute } = useRouteContext();
    console.log("CURRENT ROUTE FROM APP NAVIGATION", currentRoute);

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Welcome" options={{ headerShown: false }}>
          {(props) => (
            <WelcomeNavigator {...props}/>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Authentification"
          options={{ headerShown: false }}
        >
          {(props) => (
            <AuthNavigator {...props}/>
          )}
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
          name="Post_Ad"
          component={PostAdNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Ads" options={{ headerShown: false }}>
          {(props) => (
            <AdsNavigator {...props}/>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="PlantSittingTracking"
          options={{ headerShown: false }}
        >
          {(props) => (
            <PlantSittingTrackingNavigator
              {...props}
            />
          )}
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
      {currentRoute !== "Welcome" && currentRoute !== "Authentification" && currentRoute !== "Map" && currentRoute !== "PostAd" && <MenuContainer showMenu={true}/>}
    </NavigationContainer>
  );
};

export default Navigation;
