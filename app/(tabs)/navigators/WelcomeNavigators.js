import React, {useEffect} from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigationState } from "@react-navigation/native";
import HomeScreen from "../homeScreen";
import CarouselScreen from "../Startup/Carousel/carouselScreen ";

const Stack = createNativeStackNavigator();

const WelcomeNavigator = ({ navigation, updateRoute }) => {
  const state = useNavigationState((state) => state);
  const currentScreen = state?.routes[state.index]?.name;

  useEffect(() => {
    updateRoute(currentScreen);
  }, [currentScreen]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Carousel"
        component={CarouselScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default WelcomeNavigator;
