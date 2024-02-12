import React, {useState} from "react";
import { View, StyleSheet, Animated, Text } from "react-native";
import { SIZES, COLORS } from "../constants/themes";
import ButtonClose from "../components/Buttons/ButtonClose";

const ProgressBar = ({
  progress
}) => {

    const progressStep = () => {
        if (progress === 0){
            return 0
        } else if (progress === 1){
            return 25
        } else if (progress === 2 || progress === 3 ){
            return 50
        } else if ( progress === 4) {
            return 75
        } else {
            return 100
        }
    }

  return (
    <>
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.textStyle}>Déposer une annonce</Text>
            <ButtonClose></ButtonClose>
        </View>
        <View style={styles.progressBar}>
            <Animated.View style={[StyleSheet.absoluteFill, {backgroundColor: `${COLORS.secondary}`, width: `${progressStep()}%`}]} />
        </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center"
    },
    header: {
        display: 'flex',
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        overflow: 'visible',
    },
    progressBar: {
        // position: "absolute",
        height: 14,
        flexDirection: "row",
        width: '100%',
        backgroundColor: 'rgba(156, 145, 112, 0.5)',
      },
      textStyle: {
        fontFamily: "Roboto-Bold",
        color: COLORS.primary,
        fontSize: 18
    },

});

export default ProgressBar;