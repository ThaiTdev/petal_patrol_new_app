import React, {useCallback, useContext, useEffect, useState} from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from 'react-native';
import { SIZES, COLORS } from "../../../../../constants/themes";
import { StyleSheet, Image} from "react-native";
import { ProgressContext } from '../../../navigators/ProgressContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Add_Photos = () => {
    const navigation = useNavigation();
    const goToValidatePhotos = () => {
        console.log('go to validate photos')
        navigation.navigate("PostAd", { screen: "Validate_Photos" });
    };

    const { handleNextStep } = useContext(ProgressContext);
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        AsyncStorage.getItem('Add_Photos_Completed').then((value) => {
            if (value !== null) {
                setCompleted(true);
            }
        });
    }, []);

    useEffect(() => {
        if (!completed) {
            handleNextStep();
            AsyncStorage.setItem('Add_Photos_Completed', 'true');
            setCompleted(true);
        }
    }, [completed]);

    return (
        <View style={styles.container}>
           <Text style={{ fontSize: 20, color: COLORS.primary, fontFamily: "Merriweather-Bold", marginTop: 20, width: "50%"}}>Montrez-nous sa petite frimousse !</Text>
            <Text onPress={goToValidatePhotos}>VALIDATE PHOTOS</Text>
        </View>
    );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.tertiary,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    overflow: 'visible',
    height: 200,
    width: "65%",
},
  });
export default Add_Photos;