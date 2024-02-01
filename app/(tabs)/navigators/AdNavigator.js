// UsersNavigator.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ads_List from "../Ads/Ads_List";
import Ad_Details from "../Ads/Ad_Details";

const Stack = createNativeStackNavigator();

const AdNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Ads"
        component={Ads_List}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Ad"
        component={Ad_Details}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AdNavigator;
