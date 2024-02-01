import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, FONT } from "../../../constants/themes";

const ProfilMenu = () => {
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
          <View>
            <Text style={styles.title}>Body</Text>
            <View>
              {/* <Image source={logo.titleHomePage} style={styles.titleHomePage} /> */}
              <Text>Paramètre du compte</Text>
            </View>
            <View>
              {/* <Image source={logo.titleHomePage} style={styles.titleHomePage} /> */}
              <Text></Text>
            </View>
            <View>
              {/* <Image source={logo.titleHomePage} style={styles.titleHomePage} /> */}
              <Text>Paramètre du compte</Text>
            </View>
            <View>
              {/* <Image source={logo.titleHomePage} style={styles.titleHomePage} /> */}
              <Text>Paramètre du compte</Text>
            </View>
            <Text style={styles.title}>Support</Text>
            <View>
              {/* <Image source={logo.titleHomePage} style={styles.titleHomePage} /> */}
              <Text>Paramètre du compte</Text>
            </View>
          </View>
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

export default ProfilMenu;
