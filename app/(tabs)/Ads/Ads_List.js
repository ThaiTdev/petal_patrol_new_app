import React, {useCallback} from "react";
import { View, Text } from 'react-native';
import { SIZES, COLORS } from "../../../constants/themes";
import MenuContainer from '../../../components/Menu/MenuContainer';
import { StyleSheet, Image } from "react-native";

const Ads_List = () => {

    return (
        <View style={styles.container}>
            <Text>Coucou c'est la liste des Annonces</Text>
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
export default Ads_List;