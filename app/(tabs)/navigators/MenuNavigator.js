import React, {useState} from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profil_Menu from "../Profil/Profil_Menu";
import Choose_Ad_Type from "../Ads/Post_Ad/Choose_Ad_Type";
import Research from "../Ads/Research";
import Messages_List from "../Chat_Screens/Messages_List";
import Notifications from "../Profil/Notifications";
import { ProgressContext } from '../navigators/ProgressContext';


const Stack = createNativeStackNavigator();

const MenuNavigator = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const resetStep = () => {
      setCurrentStep(0);
    };

  return (
    <ProgressContext.Provider value={{ currentStep, handleNextStep, resetStep }}>
      <>
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
        name="Choose_Ad_Type"
        component={Choose_Ad_Type}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Messages"
        component={Messages_List}
        options={{ headerShown: false }}
        />
      <Stack.Screen
        name="Profil"
        component={Profil_Menu}
        options={{ headerShown: false }}
        />
    </Stack.Navigator>
    </>
  </ProgressContext.Provider>
    
  );
};

export default MenuNavigator;
