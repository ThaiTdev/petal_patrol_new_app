import React, {useEffect} from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigationState } from "@react-navigation/native";


const Stack = createNativeStackNavigator();

const PlantSittingTrackingNavigator = ({ navigation, updateRoute }) => {
  const state = useNavigationState((state) => state);
  const currentScreen = state?.routes[state.index]?.name;

  useEffect(() => {
    updateRoute(currentScreen);
  }, [currentScreen]);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PlantSittingTracking"
        component={PlantSittingTracking}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default PlantSittingTrackingNavigator;
