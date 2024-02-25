import React, { useCallback } from "react";
import { View, Text } from "react-native";
import { SIZES, COLORS } from "../../../constants/themes";
import { StyleSheet, Image } from "react-native";

const Confidetials = () => {
  return (
    <View style={styles.container}>
      <Text>Vous trouverez ici notre politique de confidentialité</Text>
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
export default Confidetials;
