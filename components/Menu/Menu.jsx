import React from 'react';
import { View, Text, FlatList,StyleSheet, Dimensions, Pressable, Image } from "react-native";

const Menu = ({ menuItems, onMenuItemPress }) => {
    const screenWidth = Dimensions.get('window').width;
    console.log(menuItems);
    return (
      <View style={[styles.menuContainer, {width: screenWidth}]}>
        <FlatList
        style={styles.ItemsContainer}
          data={menuItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable onPress={() => onMenuItemPress(item.id)}>
              <Image source={item.imageUrl} style={{ width: 24, height: 24 }} />
              <Text>{item.label}</Text>
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
  }
});

export default Menu;