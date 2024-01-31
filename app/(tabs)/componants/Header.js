import React, { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { COLORS, SIZES, FONT } from "../../../constants/themes";

const Header = ({ Title, logo }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{Title}</Text>
        <Image style={styles.logo} source={logo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLORS.primary,
    width: "100%",
    height: "20%",
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    backgroundColor: COLORS.tertiary,
    width: "100%",
    borderColor: "black",
    height: "100%",
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomRightRadius: "50%",
  },
  title: {
    alignItems: "baseline",
    color: COLORS.secondary,
    fontSize: SIZES.xxLarge,
    fontWeight: FONT.bold,
    marginLeft: "6%",
  },
  logo: {},
});

export default Header;
