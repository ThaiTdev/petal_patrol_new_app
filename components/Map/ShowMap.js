import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useRouteContext } from "../../app/(tabs)/RouteContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigationState } from "@react-navigation/native";
import { View } from "react-native";
import { COLORS } from "../../constants/themes";
import { StyleSheet, Button, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import FormSubmitButton from "../../app/(tabs)/Authentification/formulaire/formSubmitButton";
import { BaseButton } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();

const ShowMap = ({ offers, setDisplayMap, selectedItemIndex }) => {
  const { updateCurrentRoute, currentRoute } = useRouteContext();

console.log("OFFERS IN SHOWMAP", offers);
console.log("SELECTED INDEX", selectedItemIndex);

  useEffect(() => {
    updateCurrentRoute("Map");
  }, []);

  const coordinatesItem = offers[selectedItemIndex].coordinates;
  console.log('COORDINATES ITEM', coordinatesItem);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        // region={{
        //   latitude: 43.62505,
        //   longitude: 3.862038,
        //   latitudeDelta: 0.0922,
        //   longitudeDelta: 0.0421,
        // }}
        region={{
          latitude: offers[selectedItemIndex].coordinates.latitude,
          longitude : offers[selectedItemIndex].coordinates.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
      {/* Afficher uniquement le marker de la carte sélectionnée */}
      <Marker
        key={offers[selectedItemIndex].id}
        coordinate={offers[selectedItemIndex].coordinates}
        title={offers[selectedItemIndex].plant.name}
        description={offers[selectedItemIndex].address}
      />
      
      {/* Afficher toutes les annonces sur la carte */}
      {/* {offers.map((o) => {
        return (
          <Marker
            key={o.id}
            coordinate={o.coordinates}
            title={o.plant.name}
            description={o.address}
          />
        );
      })} */}
      </MapView>

      {/* <View style={styles.button}>
        <FormSubmitButton
          onPress={() => setDisplayMap(false)}
          title=" X "
          color={COLORS.primary}
        />
      </View> */}
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
    zIndex: 1
  },
  button: {
    position: "absolute",
    left: "6%",
    top: "2%",
  },
  buttonContainer: {
    position: "absolute",
    top: 20, // Positionnez-le où vous le souhaitez par rapport au haut de la carte
    left: 20, // Positionnez-le où vous le souhaitez par rapport à la gauche de la carte
    zIndex: 5, // Assurez-vous qu'il est au-dessus de la carte
  },
});

export default ShowMap;
