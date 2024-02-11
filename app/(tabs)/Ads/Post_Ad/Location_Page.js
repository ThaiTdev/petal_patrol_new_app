import React, {useCallback, useContext, useEffect} from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from 'react-native';
import { SIZES, COLORS } from "../../../../constants/themes";
import { StyleSheet, Image } from "react-native";
import { ProgressContext } from '../../navigators/ProgressContext';

const Location_Page = () => {
  const navigation = useNavigation();
  const goToDatesPage = () => {
      console.log('go to dates page')
      navigation.navigate("PostAd", { screen: "Dates_Page" });
  };

  const { handleNextStep } = useContext(ProgressContext);

  useEffect(() => {
    handleNextStep();
  }, []);
  
    return (
        <View style={styles.container}>
            <Text>Dates de disponibilité</Text>
            <Text onPress={goToDatesPage}>DATE PAGE</Text>
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
export default Location_Page;