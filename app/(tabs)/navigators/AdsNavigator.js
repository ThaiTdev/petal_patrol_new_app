import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AdsList from "../Ads/Ads_List"
import AdsDetails from "../Ads/Ad_Details"
import PlantSittingTracking from "../Ads/Plant_Sitting_Tracking"
import Research from "../Ads/Research"

const Stack = createNativeStackNavigator();

const AdsNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AdsList"
        component={AdsList}
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
