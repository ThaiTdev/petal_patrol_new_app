import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { COLORS } from "../../constants/themes";

const BaseButton = ({
  title, marginTop, marginBottom, marginLeft, marginRight, handlePress, padding, height, fontSize
}) => {

  return (
    <View style={[styles.container, { marginTop: marginTop , marginBottom: marginBottom}]}>
        <Pressable onPress={handlePress}  style={{ height: 50, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
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