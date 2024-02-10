import React, {useState} from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Choose_Ad_Type from "../Ads/Post_Ad/Choose_Ad_Type";
import Main_informations from "../Ads/Post_Ad/Main_informations";
import Main_informations_Advice from "../Ads/Post_Ad/Main_informations_Advice";
import Add_Photos from "../Ads/Post_Ad/Photos/Add_Photos";
import Validate_Photos from "../Ads/Post_Ad/Photos/Validate_Photos";
import Location_Page from "../Ads/Post_Ad/Location_Page";
import Dates_Page from "../Ads/Post_Ad/Dates_Page";
import ProgressBar from "../../../components/ProgressBar";
import { ProgressContext } from "./ProgressContext";


const Stack = createNativeStackNavigator();

const PostAdNavigator = ({ navigation }) => {
    const [currentStep, setCurrentStep] = useState(0);

    const handleNextStep = () => {
      setCurrentStep(currentStep + 1);
    };
    const resetStep = () => {
        setCurrentStep(0);
      };
  return (
    <ProgressContext.Provider value={{ currentStep, handleNextStep, resetStep}}>
      <>
        <ProgressBar progress={(currentStep + 1)} />
        <Stack.Navigator>
          <Stack.Screen
              name="Choose_Ad_Type"
              component={Choose_Ad_Type}
              options={{ headerShown: false }}
            />
          <Stack.Screen
            name="Main_informations"
            component={Main_informations}
            options={{ headerShown: false }}
          />
      <Stack.Screen
        name="Main_informations_advice"
        component={Main_informations_Advice}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Add_Photos"
        component={Add_Photos}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Validate_Photos"
        component={Validate_Photos}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name="Location_Page"
        component={Location_Page}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Dates_Page"
        component={Dates_Page}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
    </>
    </ProgressContext.Provider>
  );
};

export default PostAdNavigator;