import React, { useCallback, useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import images from "../../../../constants/images";
import { View, Text, Animated } from "react-native";
import { useRouteContext } from "../../RouteContext";
import { SIZES, COLORS } from "../../../../constants/themes";
import BaseButton from "../../../../components/Buttons/Base";
import { StyleSheet, Image } from "react-native";
import ButtonClose from "../../../../components/Buttons/ButtonClose";
import { ProgressContext } from "../../navigators/ProgressContext";
import ProgressBar from "../../../../components/ProgressBar";

const Choose_Ad_Type = () => {
  const { currentRoute } = useRouteContext();
  const { updateCurrentRoute } = useRouteContext();

  useEffect(() => {
    updateCurrentRoute("PostAd");
  }, []);

  const navigation = useNavigation();
  const goToMainInformations = () => {
    console.log("go to main");
    navigation.navigate("PostAd", { screen: "Main_informations" });
  };
  const goToMainInformationsAdvice = () => {
    console.log("go to advice");
    navigation.navigate("PostAd", { screen: "Main_informations_Advice" });
  };
  const { currentStep, handleNextStep, resetStep } =
    useContext(ProgressContext);

  console.log(currentStep);

  useEffect(() => {
    resetStep();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <ProgressBar progress={currentStep} />
        <Text
          style={{
            fontSize: 20,
            color: COLORS.primary,
            fontFamily: "Merriweather-Bold",
          }}
        >
          De quoi avez-vous besoin ?
        </Text>
        <View style={styles.goToBtn}>
          <Image source={images.logo} style={styles.images}></Image>
          <BaseButton
            title="J'ai besoin d'un conseil de soin"
            marginTop={70}
            handlePress={goToMainInformationsAdvice}
          ></BaseButton>
        </View>
        <View style={styles.goToBtn}>
          <Image source={images.plantsitter} style={styles.images}></Image>
          <BaseButton
            title="J'ai besoin d'un plant-sitter"
            marginTop={70}
            handlePress={goToMainInformations}
          ></BaseButton>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.tertiary,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  subContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    overflow: "visible",
    height: "80%",
    width: "100%",
  },
  goToBtn: {
    maxHeight: 120,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flexGrow: 0.3,
    justifyContent: "space-around",
    alignItems: "center",
    overflow: "visible",
    flex: 2,
    margin: 30,
  },
  images: {
    width: 90,
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
  },
});

//   const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: COLORS.tertiary,
//         flexDirection: "column",
//         justifyContent: "space-evenly",
//         alignItems: "center",
//     },
//     subContainer: {
//         maxWidth: 300, // ou la largeur maximale souhaitée
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         flex: 2,
//         marginBottom: 10
//     },
//     logo: {
//         width: 110, // La largeur fixe que vous souhaitez
//         height: undefined, // Laissez la hauteur comme undefined pour conserver le ratio d'aspect
//         aspectRatio: 1, // Ratio d'aspect (width / height)
//         resizeMode: "contain",
//         zIndex: 5,
//         marginBottom: 35,
//     }
// });
export default Choose_Ad_Type;
