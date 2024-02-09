import React, {useCallback} from "react";
import images from "../../../../constants/images";
import { View, Text } from 'react-native';
import { SIZES, COLORS } from "../../../../constants/themes";
import BaseButton from "../../../../components/Buttons/Base";
import { StyleSheet, Image } from "react-native";

const Choose_Ad_Type = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Déposer une annonce</Text>
            <View style={styles.subContainer}>
             <Image source={images.logo} style={styles.logo}></Image>
            <BaseButton title="Coucou c'est moi"></BaseButton>
            </View>
            <View style={styles.subContainer}>
             <Image source={images.plantsitter} style={styles.logo}></Image>
            <BaseButton title="Coucou c'est moi"></BaseButton>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: "relative",
      backgroundColor: COLORS.tertiary,
      height: "100%",
    },
    subContainer: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow:0.6,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'visible',
    },
    logo: {
        position: "absolute",
        top: "3%",
        width: 150,
        height: undefined,
        aspectRatio: 1,
        resizeMode: "contain",
        zIndex: 5,
    },
    textStyle: {
        fontFamily: "Roboto-Bold",
        color: COLORS.primary,
        fontSize: 18
    }
  });
export default Choose_Ad_Type;