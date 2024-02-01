import React, { useCallback, useEffect, useState } from "react";
import { View, Text, SectionList } from "react-native";
import { SIZES, COLORS } from "../../../constants/themes";
import { StyleSheet, Image } from "react-native";
import { accountService } from "../../_services/accountService";
import { useNavigation } from "expo-router";

const Ads_List = ({ navigation }) => {
  // const navigation = useNavigation();
  const [ads, setAds] = useState([]);
  useEffect(() => {
    async function fetchAds() {
      // const res = await accountService.showAllAds();
      // setAds(res.offers);
      setAds([
        {
          id: 1,
          description: "une nouvelle offre",
          address: "rue Hélène de savoie",
          zip: "34980",
          city: "Saint clément de rivières",
          coordinates: { lat: 43.65424896265026, lng: 3.8366643846566095 },
        },
        {
          id: 2,
          description: "une nouvelle offre",
          address: "934 rue de la valsière",
          zip: "34790",
          city: "Grabels",
          coordinates: { lat: 43.647639873269135, lng: 3.8285304288358484 },
        },
      ]);
    }
    fetchAds();
  }, []);

  const handleClick = (id) => {
    console.log(id);
    navigation.navigate("ad", { screen: "Ad" });
  };

  return (
    <View style={styles.container}>
      <Text>Coucou c'est la liste des Annonces </Text>
      {ads.length > 1 && (
        <SectionList
          sections={ads.map((ad) => ({ title: ad.id, data: [ad] }))}
          renderItem={({ item }) => (
            <Text onClick={() => handleClick(item.id)}>{item.address}</Text>
          )}
          keyExtractor={(item) => `ads-${item.id}`}
        />
      )}
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
export default Ads_List;
