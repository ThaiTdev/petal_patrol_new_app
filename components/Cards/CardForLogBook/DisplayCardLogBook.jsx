import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Image, Text, Icon } from 'react-native-elements';

const DisplayCardLogBook = ({CardLogBook}) => {
  if(CardLogBook) {
    return (
    <>
    <Card containerStyle={styles.cardContainer}>

      <View style={styles.alignement}>
      
        <View style={styles.imageBlock}>
          <Image // changer ici la source et mettre imagePlant
            source={require('../../../assets/images/plants/goodPlant.png')}
            style={styles.first}
          />
        </View>   
        <View style={styles.textContainer}>
          <Text style={styles.dateToAdd}>{CardLogBook.dateToAdd}</Text>

        <View style={styles.descriptionContainer}>
          <Icon name='book' type='ionicon' color='#B55D45' size={15} style={styles.icon}/>
          <Text style={styles.subtitle}>{CardLogBook.subtitle}</Text>
          
        </View>
        <Text style={styles.descriptionText}>{CardLogBook.descriptionText}</Text>
        </View>

      </View>
    </Card>
  </>
  );
    }
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10, 
    backgroundColor: '#FAFAFA',
    padding: 0,
  },

 alignement: {
  // flex: 1,
  flexDirection: 'row',
  alignItems: 'space-between',
  padding: 0,
 },
 first:{
  margin:0,
  height: 125,
  width: 115,
  borderTopLeftRadius: 10,
  borderBottomLeftRadius: 10,
 },
 descriptionContainer: {
  flexDirection: "row",
  justifyContent: "start",
  alignItems: "center"
 },
 icon: {
  marginRight: 10,
  marginTop: 10,
 },
 subtitle: {
  fontSize: 13, 
  fontWeight: 'bold',
  color: '#B55D45',
  marginTop: 10,
},
  descriptionText: {
  fontSize: 13, 
  marginTop: 10,
  marginRight: 10,
  fontWeight: '300',
  alignSelf: 'flex-start',
  color: '#B55D45',
},
 cardContent: {
  flexDirection: 'row',
  alignItems: 'start',
},
textContainer: {
  marginLeft: 10, 
  flex: 1,
  alignSelf: 'flex-start',
},
dateToAdd: {
  fontSize: 12, 
  marginTop: 10,
  fontWeight: '300',
  alignSelf: 'flex-start',
  color: '#000000',
},




});

export default DisplayCardLogBook;