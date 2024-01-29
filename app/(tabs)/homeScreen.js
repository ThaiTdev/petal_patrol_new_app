import React, {useCallback} from "react";
import logo from "../../constants/images";
import background from "../../constants/background";
import { SIZES, COLORS } from "../../constants/themes";
import icon from "../../constants/icons";
import { View } from "react-native";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Assurez-vous d'importer ceci depuis votre bibliothèque de navigation
import Menu from "../../components/Menu/Menu";
import { MenuItems } from "../../components/Menu/MenuItems";

export default function HomeScreen() {
  const navigation = useNavigation();
  const goToFirstSlide = () => {
    navigation.navigate("Welcome", { screen: "Carousel" }); // Assurez-vous de remplacer "Carousel" par le nom de votre écran de destination
  };
console.log('ITEMS', MenuItems);
  const handleMenuItemPress = useCallback((itemId) => {
    // Mettez ici le code que vous souhaitez exécuter lorsque l'élément du menu est pressé
    console.log(`L'élément du menu avec l'ID ${itemId} a été pressé.`);
  }, []);

  return (
    <View style={styles.container}>
          <Menu style={styles.menuContainer} menuItems={MenuItems} onMenuItemPress={handleMenuItemPress}/>
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
