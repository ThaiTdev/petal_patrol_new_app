import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditProfil from "../Profile/Edit_Profile";
import MyAds from "../Profile/My_Ads";
import Notifications from "../Profile/Notifications";
import ProfilMenu from "../Profile/Profile_Menu";
import ProfilPublic from "../Profile/Public_Profile";

const Stack = createNativeStackNavigator();

const UserNavigators = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfilMenu"
        component={ProfilMenu}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="EditProfil"
        component={EditProfil}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyAds"
        component={MyAds}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfilPublic"
        component={EditProfil}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
};

export default UserNavigators;
