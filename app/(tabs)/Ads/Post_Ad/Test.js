import React, { Component, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { COLORS } from "../../../../constants/themes";
import { StyleSheet, Button, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
// import { Text } from "react-native-elements";

const Test = () => {
  const navigation = useNavigation();
  const [offers, setOffers] = useState([
    {
      id: 1,
      description: "Offre 1",
      address: "56 truc",
      zip: "46646",
      city: "Montpellier",
      coordinates: { lat: 43.62505, lng: 3.862038 },
      allow_advices: false,
      advice: null,
      complete: false,
      date_from: "2024-01-03T00:00:00.000Z",
      date_to: "2024-06-03T00:00:00.000Z",
    },
    {
      id: 2,
      description: "offre 2",
      address: "56 jzjaidjzk",
      zip: "46646",
      city: "usjzjzjdjd",
      coordinates: { lat: 43.62, lng: 3.83 },
      allow_advices: false,
      advice: null,
      complete: false,
      date_from: "2024-01-03T00:00:00.000Z",
      date_to: "2024-06-03T00:00:00.000Z",
    },
    {
      id: 3,
      description: "offre 3",
      address: "56 jzjaidjzk",
      zip: "46646",
      city: "usjzjzjdjd",
      coordinates: { lat: 43.64, lng: 3.89 },
      allow_advices: false,
      advice: null,
      complete: false,
      date_from: "2024-01-03T00:00:00.000Z",
      date_to: "2024-06-03T00:00:00.000Z",
    },
  ]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: 43.62505,
          longitude: 3.862038,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {offers.map((o) => (
          <Marker
            key={o.id}
            coordinate={{
              latitude: o.coordinates.lat,
              longitude: o.coordinates.lng,
            }}
            title={o.description}
            description={o.address}
          />
        ))}
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.tertiary,
    flex: 1,
    width: "400px",
    height: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default Test;
