// AdsNavigator.js

import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { useRouteContext } from "../RouteContext";
import Ads_List from "../Ads/Ads_List";
import Ad_Details from "../Ads/Ad_Details";

const Stack = createNativeStackNavigator();

const AdsNavigator = () => {
  const { currentRoute } = useRouteContext();
  const { updateCurrentRoute } = useRouteContext();

  useEffect(() => {
    updateCurrentRoute("Ads");
  }, []);

  return (
    <>
    <Stack.Navigator>
      <Stack.Screen
        name="Ads_List"
        component={Ads_List}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Ad_Details"
        component={Ad_Details}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
    </>
  );
};

export default AdsNavigator;
