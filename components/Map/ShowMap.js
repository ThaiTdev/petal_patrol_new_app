import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { COLORS } from "../../constants/themes";
import { StyleSheet, Button, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import FormSubmitButton from "../../app/(tabs)/Authentification/formulaire/formSubmitButton";
// import { Text } from "react-native-elements";

const ShowMap = ({ offers, setDisplayMap }) => {
  const navigation = useNavigation();

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
        {offers.map((o) => {
          console.log(
            "Marker coordinates:",
            o.coordinates.lat,
            o.coordinates.lng
          );
          return (
            <Marker
              key={o.id}
              coordinate={{
                latitude: o.coordinates.lat,
                longitude: o.coordinates.lng,
              }}
              title={o.description}
              description={o.address}
            />
          );
        })}
      </MapView>

      <View style={styles.button}>
        <FormSubmitButton
          onPress={() => setDisplayMap(false)}
          title=" X "
          color={COLORS.primary}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.tertiary,
    flex: 1,
    width: "100%",
    height: 900,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  button: {
    position: "absolute",
    left: "6%",
    top: "2%",
  },
});

export default ShowMap;
