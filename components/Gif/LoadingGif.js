import React from "react";
import { View, Image, StyleSheet } from "react-native";
import loadingGif from "../../constants/loadingGif";

const LoadingGifComponent = () => {
  return (
    <View style={styles.loadingContainer}>
      <Image source={loadingGif.loadingPlant} style={styles.loadingGif} />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingGif: {
    width: 100, // Ajustez la largeur en fonction de vos besoins
    height: 100, // Ajustez la hauteur en fonction de vos besoins
  },
});

export default LoadingGifComponent;
