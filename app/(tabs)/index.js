import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./homeScreen";
import CarouselScreen from "./Startup/Carousel/carouselScreen ";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
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
    </NavigationContainer>
  );
};

export default App;
