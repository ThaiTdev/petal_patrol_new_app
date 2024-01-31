import React, { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { COLORS, SIZES, FONT } from "../../../constants/themes";

const Separator = ({ Title, color }) => {
  return (
    <View style={styles.Componant}>
      <View style={styles.Container}>
        <View style={styles.line}></View>
        <Text style={styles.title}>{Title}</Text>
        <View style={styles.line}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Componant: {
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  Container: {
    flexDirection: "row",
    width: "90%",
    height: "20%",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 10,
  },

  title: {
    alignItems: "baseline",
    color: COLORS.white,
    fontSize: 12,
  },
  line: {
    backgroundColor: COLORS.white,
    height: 1,
    width: "30%",
  },
});

export default Separator;
