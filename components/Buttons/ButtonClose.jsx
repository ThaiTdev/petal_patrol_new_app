import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { COLORS } from "../../constants/themes";

const ButtonClose = ({handlePress
}) => {

  return (
    <View style={[styles.container]}>
        <Pressable onPress={handlePress}>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    width:30,
    backgroundColor:COLORS.primary,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ButtonClose;