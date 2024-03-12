import DisplayNeedSitting from "./DisplayNeedSitting";
import { PlantNeedSitting } from "./CardNeedSitting";
import { useNavigationState } from "@react-navigation/native";
import { useRouteContext } from "../../../app/(tabs)/RouteContext";
import { SIZES, COLORS, FONT } from "../../../constants/themes";
import ShowMap from "../../Map/ShowMap";
import { View, StyleSheet, Button } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { accountService } from "../../../app/_services/accountService";
import { BaseButton } from "react-native-gesture-handler";

// Bouclage sur les données reçues pour affichage

// map sur les données pour les afficher
const PlantNeedSit = ({ searchText, navigation, displayMap, setDisplayMap }) => {
  const [needSitting, setNeedSitting] = useState([]);
  const [imagesRoutes, setImagesRoutes] = useState("");
 
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const { currentRoute } = useRouteContext();
  const { updateCurrentRoute } = useRouteContext();


  useEffect(() => {
    console.log("coucou");
    async function getData() {
      const datas = await GetNeedSitting();
      if (!datas.offers) return;
      setNeedSitting(datas.offers);
      setImagesRoutes(datas.imageRoute);
    }
    getData();
  }, [currentRoute]);

  const handleClick = (index) => {
    setSelectedItemIndex(index);
    setDisplayMap(true);
  };

  console.log("NEED SITTING",needSitting);
  const filteredData = needSitting.filter((plant) =>
    plant.plant.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const closeMapAndNavigateToAds = () => {
    setDisplayMap(false);
    updateCurrentRoute("Ads");
  };
  console.log('DISPLAYMAP', displayMap);

  return (
    <>
      {displayMap ? (
       <View style={styles.mapContainer}>
          <View style={styles.buttonContainer}>
            <Button style={styles.button}
              title="Fermer la carte"
              onPress={() => closeMapAndNavigateToAds()}
            />
          </View>
          <View>
            <ShowMap offers={needSitting} setDisplayMap={setDisplayMap} selectedItemIndex={selectedItemIndex}/>
          </View>
        </View>
      ) : (
        filteredData.map((needSit, index) => (
          <DisplayNeedSitting
            key={index}
            PlantNeedSitting={needSit}
            imagePlant={imagesRoutes}
            displayMap={displayMap}
            setDisplayMap={setDisplayMap}
            onClick={() => handleClick(index)}
          />
        ))
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    position: "absolute",
    top: -40,
    left: 0,
    width: "100%",
    flex: 1,
  },
  buttonContainer: {
    position: "fixed",
    top: 90,
    left: 170,
    width: 200,
    zIndex: 1,
    backgroundColor: "#F2FFF2",
    borderRadius: 10,
    paddingLeft: 8,
    paddingRight: 8,
  },
  button: {
    color: COLORS.primary,
  },
});


// fontion qui ira chercher en BDD les tables nécessaires à la boucle pour affiché les messages
async function GetNeedSitting() {
  const res = await accountService.showAllOffers();
  return res.data;
}

export default PlantNeedSit;
