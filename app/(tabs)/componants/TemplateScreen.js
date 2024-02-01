import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, FONT } from "../../../constants/themes";

const TemplateScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Header</Text>
        </View>
      </View>
      <View style={styles.BodyContainer}>
        <View style={styles.subPage}>
          <Text style={styles.title}>Body</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    height: "100%",
    width: "100%",
  },

  //Header styles
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
  //Body styles
  BodyContainer: {
    backgroundColor: COLORS.tertiary,
    height: "100%",
  },

  subPage: {
    backgroundColor: COLORS.primary,
    height: "100%",
    borderTopLeftRadius: "50%",
    alignItems: "center",
  },
});

export default TemplateScreen;
