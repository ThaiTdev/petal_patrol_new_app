import React, {useCallback} from "react";
import { View, Text } from 'react-native';
import { SIZES, COLORS } from "../../../constants/themes";
import { StyleSheet, Image } from "react-native";

const Profile_Menu = () => {

    return (
        <View style={styles.container}>
            <Text>Coucou c'est le Profil</Text>
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

export default Profile_Menu;