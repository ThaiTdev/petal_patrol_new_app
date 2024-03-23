import React, { useCallback } from "react";
import logo from "../../constants/images";
import background from "../../constants/background";
import { SIZES, COLORS } from "../../constants/themes";
import icon from "../../constants/icons";
import { accountService } from "../_services/accountService";
import { View } from "react-native";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { userLogin } from "../../context/LoginProvider";

export default function HomeScreen({ navigation }) {
  const { setIsLoggedIn, setProfile } = userLogin();
  const goToFirstSlide = async () => {
    await accountService.isAuthenticated().then((res) => {
      if (res.data) {
        console.log("je suis connecté " + res.data.message);
        // setProfile({
        //   userId: res.data.user.id,
        //   name: res.data.user.name,
        //   email: res.data.user.email,
        //   avatar: res.data.user.avatar,
        // });
        setIsLoggedIn(true);
        navigation.navigate("Ads", {
          screen: "Ads_List",
        });
      } else {
        console.log("je ne pas suis connecté " + res);
        navigation.navigate("Welcome", { screen: "Carousel" }); // Assurez-vous de remplacer "Carousel" par le nom de votre écran de destination
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          source={background.backgroundHomePage}
          style={styles.backgroundImage}
        ></Image>
        <Image source={logo.titleHomePage} style={styles.titleHomePage}></Image>
        <Image source={logo.logo2} style={styles.logo2}></Image>
        <TouchableOpacity style={styles.iconBoxArrow} onPress={goToFirstSlide}>
          <Image source={icon.arrow} style={styles.iconArrow}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    // backgroundColor: "white",
    backgroundColor: COLORS.lightWhite,
    position: "relative",
  },
  subContainer: {
    width: "100%",
    height: "100%",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    position: "absolute",
  },
  iconBoxArrow: {
    position: "absolute",
    left: "50%",
    top: "78%",
    marginLeft: -45, // La moitié de la largeur de l'icône
    marginTop: -45,
  },
  iconArrow: {
    width: 90,
    height: 90,
  },

  titleHomePage: {
    position: "absolute",
    left: "50%",
    marginLeft: "-22%",
    top: "1%",
    width: 230, // La largeur fixe que vous souhaitez
    height: undefined, // Laissez la hauteur comme undefined pour conserver le ratio d'aspect
    aspectRatio: 1, // Ratio d'aspect (width / height)
    resizeMode: "contain",
    zIndex: 1000,
  },

  logo2: {
    position: "absolute",
    left: "50%",
    marginLeft: "-20%",
    top: "3%",
    width: 200, // La largeur fixe que vous souhaitez
    height: undefined, // Laissez la hauteur comme undefined pour conserver le ratio d'aspect
    aspectRatio: 1, // Ratio d'aspect (width / height)
    resizeMode: "contain",
  },
});
