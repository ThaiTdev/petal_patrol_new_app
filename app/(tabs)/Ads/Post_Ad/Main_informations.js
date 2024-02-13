import React, {useCallback, useContext, useEffect} from "react";
import { useNavigation } from "@react-navigation/native";
import images from "../../../../constants/images";
import { View, Text, TextInput } from 'react-native';
import { SIZES, COLORS } from "../../../../constants/themes";
import { StyleSheet, Image } from "react-native";
import { ProgressContext } from '../../navigators/ProgressContext';
import BaseButton from "../../../../components/Buttons/Base";

const Main_informations = () => {
    const navigation = useNavigation();
    const goToAddPhotos = () => {
        console.log('go to add photos')
        navigation.navigate("PostAd", { screen: "Add_Photos" });
    };

    // const { handleNextStep } = useContext(ProgressContext);

    // useEffect(() => {
    //   handleNextStep();
    // }, []);

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, color: COLORS.primary, fontFamily: "Merriweather-Bold"}}>Commencez par l'essentiel</Text>
            <View style={styles.subContainer}>
                <View style={styles.subContainerHeader}>
                    <Text>Indiquez le nom de votre plante, il sera placé en tant que titre de votre annonce !</Text>
                    <Image source={images.logo} style={styles.images}></Image>
                </View>
                <Text style={styles.inputLabel}>Nom de votre protégée</Text>
                <TextInput
                placeholder="Orchidée du Japon"
                style={[styles.input,{color: "black",},]}
                />
            </View>
            <BaseButton
            title="Continuer"
            handlePress={goToAddPhotos}>
            </BaseButton>
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
        alignItems: "center"
      },
      subContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        overflow: 'visible',
        height: 200,
        width: "60%"
    },
    subContainerHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        overflow: 'visible',
        height: "80%",
        width: "100%"
    },
      images: {
        width: 70,
        height: undefined,
        aspectRatio: 1,
        resizeMode: "contain",
    },
    input: {
        backgroundColor: COLORS.white,
        height: 45,
        borderRadius: 8,
        fontSize: 16,
        paddingLeft: 10,
        marginBottom: 10,
        width: "115%",
      },
    inputLabel: {
        zIndex: 1,
        fontFamily: "Roboto-Medium",
        color: COLORS.primary
    }
  });
export default Main_informations;