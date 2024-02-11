import React, {useCallback, useContext, useEffect} from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from 'react-native';
import { SIZES, COLORS } from "../../../../../constants/themes";
import { StyleSheet, Image } from "react-native";
import { ProgressContext } from '../../../navigators/ProgressContext';

const Validate_Photos = () => {
    const navigation = useNavigation();
    const goToLocationPage = () => {
        console.log('go to location page')
        navigation.navigate("PostAd", { screen: "Location_Page" });
    };

    const { handleNextStep } = useContext(ProgressContext);

    useEffect(() => {
      handleNextStep();
    }, []);

    return (
        <View style={styles.container}>
            <Text>Validation des photos</Text>
            <Text onPress={goToLocationPage}>LOCATION PAGE</Text>
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
export default Validate_Photos;