import React, {useCallback} from "react";
import logo from "../../../../constants/images";
import { View, Text } from 'react-native';
import { SIZES, COLORS } from "../../../../constants/themes";
import BaseButton from "../../../../components/Buttons/Base";
import { StyleSheet, Image } from "react-native";

const Choose_Ad_Type = () => {

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
             <Image source={logo.logo} style={styles.logo}></Image>
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
        width: 150, // La largeur fixe que vous souhaitez
        height: undefined, // Laissez la hauteur comme undefined pour conserver le ratio d'aspect
        aspectRatio: 1, // Ratio d'aspect (width / height)
        resizeMode: "contain",
        zIndex: 5,
    }
  });
export default Choose_Ad_Type;