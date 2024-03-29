import React, {useState, useEffect} from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, Pressable, Image } from "react-native";

const Menu = ({ menuItems, onPress, onItemSelect, selectedItem}) => {
    const screenWidth = Dimensions.get('window').width;

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
                        }}
                        style={styles.pressableContainer}>
                        {item.id === selectedItem && <View style={styles.beforeCircle}></View>}
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
        bottom: 0,
        right: 0,
        zIndex: 1,
        backgroundColor: '#214F3E',
        marginBottom: 10,
        paddingTop: 12,
        paddingLeft: 12,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible',
    },
    itemsContainer: {
        height:70,
        display: 'flex',
        flexDirection: 'row',
        flexGrow:0.8,
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        alignItems: 'center',
        overflow: 'visible',
    },
    pressableContainer: {
        position: 'relative',
        overflow: 'visible',
    },
    selectedItemStyle: {
        left: 0,
        padding:32,
        width: 46,
        height: 46,
        overflow: 'visible',
        zIndex:3,
    },
});

export default Menu;
