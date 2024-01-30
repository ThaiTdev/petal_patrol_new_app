import React, {useState, useEffect} from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, Pressable, Image } from "react-native";

const Menu = ({ menuItems, onPress, onItemSelect, selectedItem}) => {
    const screenWidth = Dimensions.get('window').width;

    console.log("SELECTED ITEM",selectedItem);

    return (
        <View style={[styles.menuContainer, { width: screenWidth }]}>
            <FlatList
                contentContainerStyle={styles.itemsContainer}
                data={menuItems}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => {
                            onItemSelect(item);
                            onPress(item);
                        }}>
                        <Image 
                        style={[
                        styles.iconStyle, 
                        { width: 45, height: 45 },
                        item.id === selectedItem ? styles.selectedItemStyle : {}
                        ]}
                        source={item.imageUrl}/>
                    </Pressable>
                )}
                horizontal={true}
                extraData={selectedItem} 
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
    },
    selectedItemStyle: {
        backgroundColor: 'red',
    },
});

export default Menu;
