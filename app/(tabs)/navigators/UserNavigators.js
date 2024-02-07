import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditProfil from "../Profil/Edit_Profil";
import MyAds from "../Profil/My_Ads";
import Notifications from "../Profil/Notifications";
import ProfilMenu from "../Profil/Profil_Menu";
import ProfilPublic from "../Profil/Public_Profil";

const Stack = createNativeStackNavigator();

const UserNavigators = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfilMenu"
        component={ProfilMenu}
        options={{ headerShown: false }}
      />
      <Stack.Screen
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
        component={ProfilPublic}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default UserNavigators;
