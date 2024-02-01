import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContactSupport from "../Contact_Support";


const Stack = createNativeStackNavigator();

const ContactSupportNavigation = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="ContactSupport"
                component={ChatWindow}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};

export default ContactSupportNavigation;