import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { COLORS, SIZES, FONT } from "../../../constants/themes";
import { userLogin } from "../../../context/LoginProvider";
import Icons from "../../../constants/icons";
import logo from "../../../constants/images";
import UserAvatar from "react-native-user-avatar";

const ProfilMenu = ({ navigation }) => {
  const { profile } = userLogin();
  console.log(navigation);
  const [allName, setAllName] = useState(profile.name);
  const [Avatar, setAvatar] = useState(profile.Avatar);
  const [email, setEmail] = useState(profile.email);
  const goToParamSettings = () => {
    navigation.navigate("Users", {
      screen: "EditProfil",
    });
  };
  const goToMyAds = () => {
    navigation.navigate("Users", {
      screen: "MyAds",
    });
  };
  const goToMyPlants = () => {
    navigation.navigate("Users", {
      screen: "EditProfil",
    });
  };
  const goToSupport = () => {
    navigation.navigate("ContactSupport", {
      screen: "ContactSupportForm",
    });
  };
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.page}>
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <View style={styles.LinksContainer}>
            <TouchableOpacity onPress={handleGoBack}>
              <Image
                source={Icons.arrowBack}
                style={{ ...styles.icons, marginLeft: 10 }}
              />
            </TouchableOpacity>
            <Image
              source={Icons.closeButton}
              style={{ ...styles.icons, marginRight: 10 }}
            />
          </View>
        </View>
      </View>
      <View style={styles.boxAvatar}>
        <UserAvatar
          size={100}
          name={allName}
          source={Avatar ? Avatar : logo.logo2}
          style={styles.Avatar}
        />
        <Text style={styles.Name}>{allName ? allName : "Grainou"}</Text>
      </View>
      <View style={styles.BodyContainer}>
        <View style={styles.subPage}>
          <View style={styles.containerLinks}>
            <Text style={styles.title1}>Mon profil</Text>
            <TouchableOpacity onPress={goToParamSettings}>
              <View style={styles.boxLink}>
                <Image source={Icons.settings} style={styles.icons} />
                <Text style={styles.text}>Paramètre du compte</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity s onPress={goToMyAds}>
              <View style={styles.boxLink}>
                <Image source={Icons.ads} style={styles.icons} />
                <Text style={styles.text}>Mes annonces</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToMyPlants}>
              <View style={styles.boxLink}>
                <Image source={Icons.plantLogo} style={styles.icons} />
                <Text style={styles.text}>Mes plantes</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.title2}>Support</Text>
            <TouchableOpacity onPress={goToSupport}>
              <View style={styles.boxLink}>
                <Image source={Icons.contact} style={styles.icons} />
                <Text style={styles.text}>Nous contacter</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    height: "100%",
    width: "100%",
    position: "relative",
  },

  //Header styles
  headerContainer: {
    backgroundColor: COLORS.tertiary,
    width: "100%",
    height: "20%",
    alignItems: "center",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: COLORS.primary,
    width: "100%",
    height: "100%",
    borderBottomRightRadius: "50%",
  },
  LinksContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
    marginTop: 20,
  },
  title1: {
    alignItems: "baseline",
    color: COLORS.secondary,
    fontSize: SIZES.xLarge,
    fontWeight: FONT.bold,
    marginTop: 15,
    marginBottom: 15,
  },
  title2: {
    alignItems: "baseline",
    color: COLORS.secondary,
    fontSize: SIZES.large,
    fontWeight: FONT.bold,
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 5,
  },
  //Avatar
  boxAvatar: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    top: 80,
    left: 50,
    zIndex: 1000,
  },
  Avatar: {
    width: 100, // La largeur fixe que vous souhaitez
    height: undefined, // Laissez la hauteur comme undefined pour conserver le ratio d'aspect
    aspectRatio: 1,
    borderRadius: 50,
  },
  Name: {
    marginLeft: 10,
    fontWeight: FONT.bold,
    fontSize: SIZES.large,
    color: COLORS.lightWhite,
    marginBottom: 50,
  },

  //Body styles
  BodyContainer: {
    backgroundColor: COLORS.primary,
    height: "70%",
  },

  subPage: {
    display: "flex",
    justifyContent: "flex-start",
    backgroundColor: COLORS.tertiary,
    height: "100%",
    borderTopLeftRadius: "50%",
    alignItems: "center",
  },
  containerLinks: {
    display: "flex",
    flexDirection: "column",
    marginTop: 50,
    width: "90%",
    height: "70%",
    marginLeft: 10,
  },
  boxLink: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    marginTop: 5,
    paddingTop: 5,
    paddingBottom: 5,
  },
  icons: {
    width: 20, // La largeur fixe que vous souhaitez
    height: undefined, // Laissez la hauteur comme undefined pour conserver le ratio d'aspect
    aspectRatio: 1,
  },
  text: {
    color: COLORS.primary,
    marginLeft: 10,
    fontWeight: FONT.bold,
  },
});

export default ProfilMenu;
