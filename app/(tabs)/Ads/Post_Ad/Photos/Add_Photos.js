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