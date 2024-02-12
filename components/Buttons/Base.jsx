import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { COLORS } from "../../constants/themes";

const BaseButton = ({
  title, marginTop, marginBottom, marginLeft, marginRight, handlePress,
}) => {

  return (
    <View style={[styles.container, { marginTop: marginTop }]}>
        <Pressable onPress={handlePress}>
        <Text style={{ fontSize: 16, color: COLORS.white, fontFamily: "Roboto-Medium"}}>{title}</Text>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 58,
    width: "70%",
    backgroundColor:COLORS.secondary,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    zIndex: 10,
  },
});

export default BaseButton;