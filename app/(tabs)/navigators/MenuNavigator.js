import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile_Menu from "../Profile/Profile_Menu";
import Ads_List from "../Ads/Ads_List";
import Research from "../Ads/Research";
import Messages_List from "../Chat_Screens/Messages_List";
import Notifications from "../Profile/Notifications";


const Stack = createNativeStackNavigator();

const MenuNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Research"
        component={Research}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Ads"
        component={Ads_List}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Messages"
        component={Messages_List}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile_Menu}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
    
  );
};

export default MenuNavigator;