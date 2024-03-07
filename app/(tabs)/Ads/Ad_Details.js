import React, { useState, useEffect, useCallback } from "react";
import { SIZES, COLORS } from "../../../constants/themes";
import { useNavigationState } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput,
} from "react-native";
import logo from "../../../constants/images";
import PlantNeedSit from "../../../components/Cards/CardIdentiyPlantNeedSitting.jsx/MappingNeedSitting";

const Ad_Details = () => {

    return (
      <>
        <View style={styles.container}>
            <Text>Coucou c'est le détail de l'annonce</Text>
        </View>
    <View style={styles.page}>
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <SafeAreaView style={styles.elementHeaderDirection}>
            <Image source={logo.logo} style={styles.logo}></Image>
          </SafeAreaView>
        </View>
      </View>

      <ScrollView style={styles.subPage}>
      </ScrollView>
    </View>
    </>
  );
};
const styles = StyleSheet.create({
  page: {
    height: "100%",
    width: "100%",
    backgroundColor: COLORS.primary,
  },
  headerContainer: {
    backgroundColor: COLORS.tertiary,
    width: "100%",
    height: "30%",
  },
  titleContainer: {
    backgroundColor: COLORS.primary,
    width: "100%",
    height: "100%",
    borderBottomRightRadius: 50,
  },
  elementHeaderDirection: {
    top: "10%",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    width: "30%",
    height: "30%",
    resizeMode: "contain",
  },
  input: {
    marginTop: 15,
    backgroundColor: COLORS.white,
    height: 35,
    borderRadius: 8,
    fontSize: 16,
    textAlign: "center",
    width: "90%",
  },
  semiContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "50%",
    width: "100%",
    marginBottom: "10%",
  },
  txtSolo: {
    color: "#FAFAFA",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    paddingTop: "5%",
    paddingBottom: "5%",
    left: "30%",
    marginRight: "15%",
    marginBottom: "15%",
  },
  iconFleur: {
    width: "40%",
    height: "35%",
    resizeMode: "contain",
    marginBottom: 70,
    marginRight: 15,
  },
  subPage: {
    backgroundColor: COLORS.tertiary,
    height: "100%",
    borderTopLeftRadius: 50,
  },
});
      
export default Ad_Details;