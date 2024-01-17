import React from 'react';
import { View, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { Card, Image, Text, Icon } from 'react-native-elements';

const InputContact = () => {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');
  
    return (
        <View style={styles.descriptionContainer}>
      <SafeAreaView style={styles.alignement}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Contacter le propriétaire"

        />
        <View style={styles.iconLogo}>
        <Icon name='sc-telegram'
        type='evilicon' color='#FFFFFF' size={40} style={styles.icon}/></View>
      </SafeAreaView>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    input: {
      backgroundColor: '#FFFFFF',
      height: 40,
      width: 280,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderWidth: 0,
      borderRadius: 30,
    },
    alignement: {
        // flex: 1,
        flexDirection: 'row',
        justifyContents: 'space-between',

       },
    descriptionContainer: {
        flexDirection: "row",
        alignItems: "center"
       },
    iconLogo: {
        flexDirection: 'row',
        alignItems: 'center',
    }  

  });


export default InputContact;