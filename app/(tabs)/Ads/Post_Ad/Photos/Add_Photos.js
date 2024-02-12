import React, {useCallback, useContext, useEffect} from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from 'react-native';
import { SIZES, COLORS } from "../../../../../constants/themes";
import { StyleSheet, Image } from "react-native";
import { ProgressContext } from '../../../navigators/ProgressContext';

const Add_Photos = () => {
    const navigation = useNavigation();
    const goToValidatePhotos = () => {
        console.log('go to validate photos')
        navigation.navigate("PostAd", { screen: "Validate_Photos" });
    };

    const { handleNextStep } = useContext(ProgressContext);

    useEffect(() => {
      handleNextStep();
    }, []);

    return (
        <View style={styles.container}>
            <Text>Ajouter des photos</Text>
            <Text onPress={goToValidatePhotos}>VALIDATE PHOTOS</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      backgroundColor: COLORS.lightWhite,
      position: "relative",
    },
  });
export default Add_Photos;