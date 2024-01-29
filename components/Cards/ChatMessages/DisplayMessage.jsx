import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Image, Text } from 'react-native-elements';

// Modéle pour les cards de la messagerie 
    //affichage image/texte ect avec leurs styles

const DisplayMessage = ({Message}) => {
  if(Message){
    return (
      <Card containerStyle={styles.cardContainer}>
        <View style={styles.cardContent}>
          <View style={styles.imageBlock}>
            <Image 
              source={require('../../../assets/images/emilie_joli.jpg')} // remplacer ici par la propriété imageProfile dans la class Message
              style={styles.cardImage}
            />
          </View>   
          <View style={styles.textContainer}>
            <Text style={styles.title}>{Message.user}</Text>
            <Text style={styles.subtitle}>{Message.message}</Text>
            <Text style={styles.subtitle}>{Message.sendAt}</Text>
          </View>
        </View>
      </Card>
    );

  }
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10, 
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
    height: 90,
    width: 280,
    paddingTop: 9,
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
    width: 70, 
    height: 70, 
    borderRadius: 70, 
  },
  textContainer: {
    marginLeft: 5, 
    flex: 1,
    alignItems: 'start',
    // justifyContent: 'space-between'
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
    marginTop: 6,
    color: '#000000',
  },

});

export default DisplayMessage;
