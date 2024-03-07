import React, {useEffect} from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useRouteContext } from "../RouteContext";
import { useNavigationState } from "@react-navigation/native";
import HomeScreen from "../homeScreen";
import CarouselScreen from "../Startup/Carousel/carouselScreen ";
import MenuContainer from "../../../components/Menu/MenuContainer";

const Stack = createNativeStackNavigator();

const WelcomeNavigator = ({ navigation, updateRoute }) => {

  const { updateCurrentRoute } = useRouteContext();

  useEffect(() => {
    updateCurrentRoute("Welcome");
  }, []);

  return (
    <>
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
    <MenuContainer showMenu={false}/>
    </>
  );
};

export default WelcomeNavigator;
