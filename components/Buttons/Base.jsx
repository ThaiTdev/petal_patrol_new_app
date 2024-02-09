import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import themes from '../../constants/themes';


const BaseButton = ({
  title
}) => {
  
  const { COLORS } = themes();
  const styles = StyleSheet.create({
    container: {
      height: 60,
      width: "100%",
      backgroundColor:COLORS.secondary,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      left: "5%",
      padding: 22
    },
  });
  
  return (
    <View style={styles.container}>
        <Pressable>
        <Text style={{ fontSize: 16, color: COLORS.white }}>{title}</Text>
        </Pressable>
    </View>
  );
};


export default BaseButton;