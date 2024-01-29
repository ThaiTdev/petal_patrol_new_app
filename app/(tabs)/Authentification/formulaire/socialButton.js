import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { COLORS } from "../../../../constants/themes";
import images from "../../../../constants/images";

const SocialButton = ({ title, submitting, onPress, images }) => {
  return (
    <View style={styles.containerButton}>
      <TouchableOpacity
        onPress={!submitting ? onPress : null}
        style={[styles.container]}
      >
        <View style={styles.contentContainer}>
          <Image source={images} style={styles.backgroundImage} />
          <Text
            style={{
              fontSize: 18,
              color: COLORS.gray,
            }}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: 45,
    width: "90%",
    borderRadius: 8,
    backgroundColor: COLORS.lightWhite,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  contentContainer: {
    flexDirection: "row", // Aligner les éléments horizontalement
    alignItems: "center", // Centrer les éléments verticalement
  },
  backgroundImage: {
    marginRight: 10, // Ajouter un espacement entre l'image et le texte
  },
});

export default SocialButton;
