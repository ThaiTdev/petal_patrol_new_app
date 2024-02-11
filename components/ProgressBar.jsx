import React, {useState} from "react";
import { View, StyleSheet, Animated, Text } from "react-native";

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
    <View style={styles.progressBar}>
        <Animated.View style={[StyleSheet.absoluteFill, {backgroundColor: "#8BED4F", width: `${progressStep()}%`}]} />
        <Text>{progress}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    progressBar: {
        height: 20,
        flexDirection: "row",
        width: '100%',
        backgroundColor: 'white',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 5
      }
});

export default ProgressBar;