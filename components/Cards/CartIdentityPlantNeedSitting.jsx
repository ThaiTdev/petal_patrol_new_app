import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';

const IdentityPlantNeed = () => {
    return (
    <View style={styles.CardContainer}>
        <Text>Plant Name</Text>
    </View>);
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const styles =StyleSheet.create({
    CardContainer: {
        backgroundColor: '#F6F6F6',
        flex: 1,
    },
    CardSize: {
        width: 100,
        height: 75,
    }
})


export default IdentityPlantNeed;