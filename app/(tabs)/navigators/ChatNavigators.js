import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatWindow from "../Chat_Screens/Chat_Window";
import MessagesList from "../Chat_Screens/Messages_List";

const Stack = createNativeStackNavigator();

const ChatNavigators = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="ChatWindow"
                component={ChatWindow}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="MessagesList"
                component={MessagesList}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};

export default ChatNavigators;