import React, {useCallback} from "react";
import { View, Text } from 'react-native';
import { SIZES, COLORS } from "../../../constants/themes";
import { StyleSheet, Image } from "react-native";
import MenuContainer from "../../../components/Menu/MenuContainer";

const Research = () => {

    return (
      <>
        <View style={styles.container}>
            <Text>Coucou c'est la recherche de plant'sitting</Text>
        </View>
        <MenuContainer showMenu={true} />
      </>
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
