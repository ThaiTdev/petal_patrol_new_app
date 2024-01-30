import React, {useState} from 'react';
import Menu from './Menu';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const MenuContainer = () => {
    const navigation = useNavigation();
    const [selectedItem, setSelectedItem] = useState(3);

    const handleSelectedItem = (item) => {
      setSelectedItem(item.id);
    };

    const handleMenuItemPress = (item) => {
        console.log(`L'utilisateur a cliqué sur l'élément avec l'ID ${item.id}`);
        navigation.navigate("Menu", { screen: item.label });
    };

    const MenuItems = [
        {
            id: 1,
            label: 'Research',
            imageUrl: require('../../assets/images/icons/recherche.png'),
        },
        {
            id: 2,
            label: 'Notifications',
            imageUrl: require('../../assets/images/icons/notification.png'),
        },
        {
            id: 3,
            label: 'Ads',
            imageUrl: require('../../assets/images/icons/plante.png'),
        },
        {
            id: 4,
            label: 'Messages',
            imageUrl: require('../../assets/images/icons/discution.png'),
        },
        {
            id: 5,
            label: 'Profile',
            imageUrl: require('../../assets/images/icons/botanist.png'),
        },
    ];

    return (
        <View style={styles.menuContainer}>
            <Menu menuItems={MenuItems} onPress={handleMenuItemPress}  onItemSelect={handleSelectedItem} selectedItem={selectedItem}/>
        </View>
    );
};

const styles = StyleSheet.create({
        menuContainer: {
            position: "absolute",
            bottom: -20, // position from the top of the container
            right: 0, // position from the right of the container
            zIndex:1,
            backgroundColor: '#214F3E',
            marginBottom: 10,
            paddingTop: 12,
            paddingLeft: 12,
            height:100,
          },
          ItemsContainer: {
            display: 'flex',
            flexDirection: 'row',
          },
        });

export default MenuContainer;