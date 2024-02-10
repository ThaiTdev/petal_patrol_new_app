import React, {useCallback, useContext, useEffect} from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from 'react-native';
import { SIZES, COLORS } from "../../../../constants/themes";
import { StyleSheet, Image } from "react-native";

const Dates_Page = () => {

    return (
        <View style={styles.container}>
            <Text>Dates de disponibilité</Text>
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
export default Dates_Page;