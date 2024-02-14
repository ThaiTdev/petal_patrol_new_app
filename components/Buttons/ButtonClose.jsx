import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'
import { COLORS } from "../../constants/themes";

const ButtonClose = ({handlePress
}) => {

  return (
    <View style={[styles.container]}>
        <Pressable onPress={handlePress}>
        <FontAwesomeIcon icon={ faXmark } color={COLORS.tertiary}/>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    width:30,
    backgroundColor:COLORS.primary,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ButtonClose;