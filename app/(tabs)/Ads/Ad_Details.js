import React, { useCallback, useEffect, useState } from "react";
import { View, Text, SectionList } from "react-native";
import { SIZES, COLORS } from "../../../constants/themes";
import { StyleSheet, Image } from "react-native";
import { accountService } from "../../_services/accountService";

const Ads_List = () => {
  const [ad, setAd] = useState();
  useEffect(() => {
    async function fetchAd() {
      // const res = await accountService.showAllAds();
      // setAds(res.offers);
      setAd({
        id: 1,
        description: "une nouvelle offre",
        address: "rue Hélène de savoie",
        zip: "34980",
        city: "Saint clément de rivières",
        coordinates: { lat: 43.65424896265026, lng: 3.8366643846566095 },
      });
    }
    fetchAd();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Coucou c'est l'annonce 1 même si tu as cliqué sur 2 </Text>
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
