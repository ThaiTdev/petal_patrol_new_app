import React, {useState} from "react";
import { View, StyleSheet, Animated, Text } from "react-native";

const ProgressBar = ({
  progress
}) => {

  return (
    <View style={styles.progressBar}>
        <Animated.View style={[StyleSheet.absoluteFill, {backgroundColor: "#8BED4F", width: `${progress * 100}%`}]} />
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