import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddPhotos from "../Ads/Post_Ad/Photos/Add_Photos";
import ValidatePhotos from "../Ads/Post_Ad/Photos/Validate_Photos";

const Stack = createNativeStackNavigator();

const PhotosNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="AddPhotos"
                component={AddPhotos}
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="ValidatePhotos"
                component={ValidatePhotos}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default PhotosNavigator;