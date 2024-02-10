import React, {useCallback, useContext, useEffect} from "react";
import { useNavigation } from "@react-navigation/native";
import images from "../../../../constants/images";
import { View, Text, Animated } from 'react-native';
import { SIZES, COLORS } from "../../../../constants/themes";
import BaseButton from "../../../../components/Buttons/Base";
import { StyleSheet, Image } from "react-native";
import ButtonClose from "../../../../components/Buttons/ButtonClose";
import { ProgressContext } from '../../navigators/ProgressContext';
import ProgressBar from "../../../../components/ProgressBar";

const Choose_Ad_Type = () => {
    const navigation = useNavigation();
    const goToMainInformations = () => {
        console.log('go to main')
        navigation.navigate("PostAd", { screen: "Main_informations" });
    };
    const goToMainInformationsAdvice = () => {
        console.log('go to advice')
        navigation.navigate("PostAd", { screen: "Main_informations_Advice" });
    };
    const { currentStep, handleNextStep, resetStep } = useContext(ProgressContext);

console.log(currentStep);

    useEffect(() => {
        resetStep();
      }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textStyle}>Déposer une annonce</Text>
                <ButtonClose></ButtonClose>
            </View>
            <ProgressBar progress={(currentStep)} />
            <Text style={{ fontSize: 20, color: COLORS.primary, fontFamily: "Merriweather-Regular"}}>De quoi avez-vous besoin ?</Text>
            <Text onPress={goToMainInformations}>BOUTON TEST</Text>
                <View style={styles.subContainer}>
                <Image source={images.logo} style={styles.images}></Image>
                <BaseButton 
                    title="J'ai besoin d'un conseil de soin"
                    marginTop={70}
                    onPress={goToMainInformationsAdvice}
                ></BaseButton>
                </View>
                <View style={styles.subContainer}>
                <Image source={images.plantsitter} style={styles.images}></Image>
                <BaseButton 
                    title="J'ai besoin d'un plant-sitter"
                    marginTop={70}
                    onPress={goToMainInformations}
                ></BaseButton>
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
      justifyContent: "space-evenly",
      alignItems: "center"
    },
    header: {
        display: 'flex',
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        overflow: 'visible',
    },
    subContainer: {
        maxHeight: 160,
        display: 'flex',
        flexDirection: 'column',
        flexGrow:0.3,
        justifyContent: 'space-around',
        alignItems: 'center',
        overflow: 'visible',
        flex: 2
    },
    images: {
        width: 120,
        height: undefined,
        aspectRatio: 1,
        resizeMode: "contain",
    },
    textStyle: {
        fontFamily: "Roboto-Bold",
        color: COLORS.primary,
        fontSize: 18
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