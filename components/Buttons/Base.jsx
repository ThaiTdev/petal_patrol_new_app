import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { COLORS } from "../../constants/themes";

const BaseButton = ({
  title
}) => {

  return (
    <View style={styles.container}>
        <Pressable>
        <Text style={{ fontSize: 18, color: COLORS.white }}>{title}</Text>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: "90%",
    backgroundColor:COLORS.secondary,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    left: "5%",
  },
});

export default BaseButton;