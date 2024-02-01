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
            label: 'Choose',
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

    const rightValues = {
        1: 282,
        2: 222,
        3: 148,
        4: 80,
        5: 5,
      };

    return (
        <View style={styles.menuContainer}>
            <View style={[styles.beforeCircle, { right: rightValues[selectedItem] }]}></View>
            <Menu menuItems={MenuItems} onPress={handleMenuItemPress}  onItemSelect={handleSelectedItem} selectedItem={selectedItem}/>
        </View>
    );
};

const styles = StyleSheet.create({
        menuContainer: {
            position: "absolute",
            bottom: -20,
            right: 0,
            zIndex:1,
            backgroundColor: '#214F3E',
            marginBottom: 10,
            paddingTop: 12,
            paddingLeft: 12,
            height:100,
            overflow: 'visible',
          },
          beforeCircle : {
            position: 'absolute',
            top: -30,
            width: 80,
            height: 80,
            backgroundColor: '#214F3E',
            borderRadius: 50,
            overflow: 'visible',
            zIndex:0,
        }
        });

export default MenuContainer;