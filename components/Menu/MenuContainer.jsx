import React from 'react';
import Menu from './Menu';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const MenuContainer = () => {
    const navigation = useNavigation();

    const handleMenuItemPress = (item) => {
        console.log(`L'utilisateur a cliqué sur l'élément avec l'ID ${item.id}`);
        navigation.navigate(item.label, { screen: item.label });
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
            <Menu menuItems={MenuItems} onPress={handleMenuItemPress}/>
        </View>
    );
};

const styles = StyleSheet.create({
    menuContainer: {
        // Styles pour le conteneur du menu
    },
});

export default MenuContainer;