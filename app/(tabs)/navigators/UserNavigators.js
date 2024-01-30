import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditProfil from "../Profile/Edit_Profile";

const Stack = createNativeStackNavigator();

const UserNavigators = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EditProfil"
        component={EditProfil}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default UserNavigators;
