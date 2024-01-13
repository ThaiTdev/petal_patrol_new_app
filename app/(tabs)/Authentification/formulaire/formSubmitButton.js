import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { COLORS } from "../../../../constants/themes";

const FormSubmitButton = ({ title, submitting, onPress }) => {
  const backgroundColor = submitting ? COLORS.secondary : COLORS.primary;

  return (
    <TouchableOpacity
      onPress={!submitting ? onPress : null}
      style={[styles.container, { backgroundColor }]}
    >
      <Text style={{ fontSize: 18, color: "#fff" }}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: "90%",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    left: "5%",
  },
});

export default FormSubmitButton;
