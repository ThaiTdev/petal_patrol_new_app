import React, { useCallback } from "react";
import { View, Text } from "react-native";
import { SIZES, COLORS } from "../../../constants/themes";
import { StyleSheet, Image } from "react-native";

const MyAds = () => {
  return (
    <View style={styles.container}>
      <Text>Coucou c'est la liste des ads</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: COLORS.lightWhite,
    position: "relative",
  },
});
export default MyAds;
