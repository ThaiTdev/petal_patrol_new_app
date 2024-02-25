import React, { useCallback, useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { SIZES, COLORS } from "../../../../constants/themes";
import { StyleSheet, Image } from "react-native";
import { ProgressContext } from "../../navigators/ProgressContext";

const Main_informations = () => {
  const navigation = useNavigation();
  const goToAddPhotos = () => {
    console.log("go to add photos");
    navigation.navigate("PostAd", { screen: "Add_Photos" });
  };

  // const { handleNextStep } = useContext(ProgressContext);

  // useEffect(() => {
  //   handleNextStep();
  // }, []);

  return (
    <View style={styles.container}>
      <Text>Main_informations pour conseil</Text>
      <Text onPress={goToAddPhotos}>ADD PHOTOS</Text>
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
export default Main_informations;
