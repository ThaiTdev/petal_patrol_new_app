import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, FONT } from "../../../constants/themes";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import logo from "../../../constants/images";
import DisplayNeedSitting from "../../../components/Cards/CardIdentiyPlantNeedSitting.jsx/DisplayNeedSitting";
import PlantNeedSit from "../../../components/Cards/CardIdentiyPlantNeedSitting.jsx/MappingNeedSitting";
import { AntDesign } from "@expo/vector-icons";

const TemplateScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");
  return (
    <View style={styles.page}>
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <SafeAreaView style={styles.elementHeaderDirection}>
            <Image source={logo.logo} style={styles.logo}></Image>
            <TextInput
              style={styles.input}
              value={searchText}
              placeholder="Rechercher sur petal Patrol"
              onChangeText={(text) => setSearchText(text)}
            />
            <View style={styles.semiContainer}>
              <Text style={styles.txtSolo}>
                Elles attendent d'être bichonnées...
              </Text>
              <Image
                source={require("../../../assets/images/logo/icone_fleur.png")}
                style={styles.iconFleur}
              />
            </View>
          </SafeAreaView>
        </View>
      </View>

      <ScrollView style={styles.subPage}>
        <PlantNeedSit searchText={searchText} />
      </ScrollView>
    </View>
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

export default TemplateScreen;
