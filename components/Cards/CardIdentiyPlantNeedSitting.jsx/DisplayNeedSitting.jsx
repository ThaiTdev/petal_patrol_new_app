import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import { Card, Image, Text } from "react-native-elements";

const DisplayNeedSitting = ({
  PlantNeedSitting,
  imagePlant,
  displayMap,
  setDisplayMap,
  onClick
}) => {

  const navigateToDetails = () => {
    navigation.navigate("Ads", { screen: "Ad_Details" });
  };

  const navigation = useNavigation();

  const showMap = () => {
    setDisplayMap(true);
    onClick();
  };
  if (PlantNeedSitting) {
    const textDates = `du ${formatDate(
      PlantNeedSitting.date_from
    )} au ${formatDate(PlantNeedSitting.date_to)}`;
    console.log(PlantNeedSitting.plant.images[0]);
    return (
      <Card containerStyle={styles.cardContainer}>
        <View style={styles.cardContent}>
          <View style={styles.imageBlock}>
            <Image
              source={{
                uri: `${process.env.EXPO_PUBLIC_IMAGE_URL}${imagePlant}/${PlantNeedSitting.plant.images[0]}`,
              }}
              style={styles.cardImage}
            />
            <TouchableOpacity onPress={() => showMap()}>
              <Text style={styles.seeToCart}>voir sur la carte</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textContainer}>
          <Pressable onPress={navigateToDetails}>
              <Text style={styles.title}>{PlantNeedSitting.plant.name}</Text>
            </Pressable>
            <Text style={styles.subtitle}>{PlantNeedSitting.description}</Text>
            <Text style={styles.textDates}>{textDates}</Text>
            <Text style={styles.textToPublish}>
              {PlantNeedSitting.textToPublish}
            </Text>
          </View>
        </View>
      </Card>
    );
  }
};
function formatDate(date) {
  return date ? date.slice(6, 10).split("-").reverse().join("/") : "NA";
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
    height: 140,
    paddingTop: 12,
    paddingLeft: 12,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "start",
  },
  imageBlock: {
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "space-between",
  },
  cardImage: {
    width: 110,
    height: 110,
    borderRadius: 10,
  },
  seeToCart: {
    fontSize: 8,
    textDecorationLine: "underline",
    marginLeft: 15,
  },
  textContainer: {
    marginLeft: 15,
    flex: 1,
    alignSelf: "flex-start",
  },
  title: {
    fontSize: 20,
    marginLeft: 20,
    fontWeight: "bold",
    color: "#B55D45",
  },
  subtitle: {
    fontSize: 13,
    marginLeft: 17,
    marginTop: 8,
    color: "#000000",
  },
  textDates: {
    fontSize: 12,
    textAlign: "center",
    width: 120,
    borderRadius: 5,
    height: 20,
    backgroundColor: "#B55D45",
    color: "#FAFAFA",
    marginLeft: 17,
    marginTop: 5,
  },
  textToPublish: {
    fontSize: 10,
    marginTop: 5,
    marginLeft: 19,
  },
});

export default DisplayNeedSitting;
