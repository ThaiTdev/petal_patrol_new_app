import React, {useCallback} from "react";
import { View, Text } from 'react-native';
import { SIZES, COLORS } from "../../../constants/themes";
import MenuContainer from '../../../components/Menu/MenuContainer';
import { StyleSheet, Image } from "react-native";

const Research = () => {
    const handleMenuItemPress = useCallback((itemId) => {
        // Mettez ici le code que vous souhaitez exécuter lorsque l'élément du menu est pressé
        console.log(`L'élément du menu avec l'ID ${itemId} a été pressé.`);
      }, []);
    return (
        <View style={styles.container}>
            <MenuContainer onMenuItemPress={handleMenuItemPress} />
            <Text>Coucou c'est la recherche de plant'sitting</Text>
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
export default Research;
