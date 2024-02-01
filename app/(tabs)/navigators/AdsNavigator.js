import React, {useEffect} from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigationState } from "@react-navigation/native";
import Ads_List from "../Ads/Ads_List";
import AdsDetails from "../Ads/Ad_Details"
import PlantSittingTracking from "../Ads/Plant_Sitting_Tracking"
import Research from "../Ads/Research"

const Stack = createNativeStackNavigator();

const AdsNavigator = ({ navigation, updateRoute }) => {
  const state = useNavigationState((state) => state);
  const currentScreen = state?.routes[state.index]?.name;

  useEffect(() => {
    updateRoute(currentScreen);
  }, [currentScreen]);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Ads_List"
        component={Ads_List}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="AdsDetails"
        component={AdsDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PlantSittingTracking"
        component={PlantSittingTracking}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Research"
        component={Research}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
};

export default AdsNavigator;
