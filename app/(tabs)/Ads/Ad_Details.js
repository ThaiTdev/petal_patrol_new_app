import React, {useCallback} from "react";
import { View, Text } from 'react-native';
import { SIZES, COLORS } from "../../../constants/themes";
import { StyleSheet, Image } from "react-native";

const Ad_Details = () => {

    return (
      <>
        <View style={styles.container}>
            <Text>Coucou c'est le détail de l'annonce</Text>
        </View>
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
export default Ad_Details;