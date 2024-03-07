import React, { useEffect} from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useRouteContext } from "../RouteContext";
import EditProfil from "../Profil/Edit_Profil";
import MyAds from "../Profil/My_Ads";
import Notifications from "../Profil/Notifications";
import ProfilMenu from "../Profil/Profil_Menu";
import ProfilPublic from "../Profil/Public_Profil";
import UpdatePassword from "../Profil/update_Password";

const Stack = createNativeStackNavigator();

const UserNavigators = ({ navigation }) => {
  const { currentRoute } = useRouteContext();
  const { updateCurrentRoute } = useRouteContext();

  useEffect(() => {
    updateCurrentRoute("User");
  }, []);

  return (
    <>
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
      <Stack.Screen
        name="UpdatePassword"
        component={UpdatePassword}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
    </>
  );
};

export default UserNavigators;
