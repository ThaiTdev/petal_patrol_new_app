import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, Pressable, Image } from "react-native";

const Menu = ({ menuItems, onPress }) => {
    const screenWidth = Dimensions.get('window').width;
    console.log(menuItems);

    return (
        <View style={[styles.menuContainer, { width: screenWidth }]}>
            <FlatList
                contentContainerStyle={styles.itemsContainer}
                data={menuItems}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Pressable onPress={() => onPress(item)}>
                        <Image source={item.imageUrl} style={{ width: 45, height: 45 }} />
                        {/* <Text>{item.label}</Text> */}
                    </Pressable>
                )}
                horizontal={true}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    menuContainer: {
        position: "absolute",
        bottom: -20, // position from the top of the container
        right: 0, // position from the right of the container
        zIndex: 2,
        backgroundColor: '#214F3E',
        marginBottom: 10,
        paddingTop: 12,
        paddingLeft: 12,
        height: 120,
        alignItems: 'center',
    justifyContent: 'center'
    },
    itemsContainer: {
        height:70,
        display: 'flex',
        flexDirection: 'row',
        flexGrow:0.8,
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        alignItems: 'center',
    }
});

export default Menu;
