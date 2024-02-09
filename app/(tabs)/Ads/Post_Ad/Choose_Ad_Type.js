import React, {useCallback} from "react";
import images from "../../../../constants/images";
import { View, Text } from 'react-native';
import themes from "../../../../constants/themes";
import BaseButton from "../../../../components/Buttons/Base";
import { StyleSheet, Image } from "react-native";
import { MonoText } from "../../../../components/StyledText";
import { ThemeContext } from "react-native-elements";

const Choose_Ad_Type = () => {
    const theme = useContext(ThemeContext);
    const { COLORS, FONT } = theme;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: COLORS.tertiary,
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
        },
        subContainer: {
            maxWidth: 300, // ou la largeur maximale souhaitée
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 2,
            marginBottom: 10
        },
        logo: {
            width: 110, // La largeur fixe que vous souhaitez
            height: undefined, // Laissez la hauteur comme undefined pour conserver le ratio d'aspect
            aspectRatio: 1, // Ratio d'aspect (width / height)
            resizeMode: "contain",
            zIndex: 5,
            marginBottom: 35,
        }
    });
    return (
        <View style={styles.container}>
            <Text style={{ fontFamily: FONT.spaceMono, color: COLORS.primary }}>Déposer une annonce</Text>
            <View style={styles.subContainer}>
                <Image source={images.logo} style={styles.logo}></Image>
                <BaseButton title="J'ai besoin d'un conseil de soin"></BaseButton>
            </View>
            <View style={styles.subContainer}>
                <Image source={images.plantSitter} style={styles.logo}></Image>
                <BaseButton title="J'ai besoin d'un plant-sitter"></BaseButton>
            </View>
        </View>
    );
};



export default Choose_Ad_Type;