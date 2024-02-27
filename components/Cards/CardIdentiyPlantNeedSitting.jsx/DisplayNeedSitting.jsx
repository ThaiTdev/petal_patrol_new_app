import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Image, Text } from 'react-native-elements';

const DisplayNeedSitting = ({ PlantNeedSitting  }) => {
  if (PlantNeedSitting) {
    const textDates = `du ${formatDate(PlantNeedSitting.date_from)} au ${formatDate(PlantNeedSitting.date_to)}`
    console.log(PlantNeedSitting.plant.images[0])
    return (
        <Card containerStyle={styles.cardContainer}>
          <View style={styles.cardContent}>
            <View style={styles.imageBlock}>
              <Image 
                  source={{uri:`http://192.168.168.199:5000/images/plants/${PlantNeedSitting.plant.images[0]}`}}
                  style={styles.cardImage}
              />
              <Text style={styles.seeToCart}>voir sur la carte</Text>
            </View>   
            <View style={styles.textContainer}>
              <Text style={styles.title}>{PlantNeedSitting.plant.name}</Text>
              <Text style={styles.subtitle}>{PlantNeedSitting.description}</Text>
              <Text style={styles.textDates}>{textDates}</Text>
              <Text style={styles.textToPublish}>{PlantNeedSitting.textToPublish}</Text>
            </View>
          </View>
        </Card>
    );
  }
  
}
function formatDate(date) {
  return date.slice(6, 10).split('-').reverse().join('/')
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10, 
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
    height: 140,
    paddingTop: 12,
    paddingLeft: 12,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'start',
  },
  imageBlock: {
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'space-between',
  },
  cardImage: {
    width: 110, 
    height: 110, 
    borderRadius: 10, 
  },
  seeToCart: {
    fontSize: 8,
    textDecorationLine: 'underline',
    marginLeft: 15,
  },
  textContainer: {
    marginLeft: 15, 
    flex: 1,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 20, 
    marginLeft: 20,
    fontWeight: 'bold',
    color: '#B55D45',
  },
  subtitle: {
    fontSize: 13, 
    marginLeft: 17,
    marginTop: 8,
    color: '#000000',
  },
  textDates: {
    fontSize: 12,
    textAlign:'center',
    width: 120,
    borderRadius: 5,
    height: 20,
    backgroundColor: "#B55D45",
    color: "#FAFAFA",
    marginLeft: 17,
    marginTop: 5
  },
  textToPublish: {
    fontSize: 10,
    marginTop: 5,
    marginLeft: 19,
  },
});

export default DisplayNeedSitting;