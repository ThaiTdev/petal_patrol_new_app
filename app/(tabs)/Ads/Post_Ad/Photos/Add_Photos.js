import React, {useCallback, useContext, useEffect, useState} from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable } from 'react-native';
import Swiper from 'react-native-swiper';
import * as ImagePicker from 'expo-image-picker';
import { SIZES, COLORS } from "../../../../../constants/themes";
import { StyleSheet, Image} from "react-native";
import { ProgressContext } from '../../../navigators/ProgressContext';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BaseButton from "../../../../../components/Buttons/Base";
import imagesApp from "../../../../../constants/images";

const Add_Photos = () => {
    const navigation = useNavigation();
    const goToValidatePhotos = () => {
        console.log('go to validate photos')
        navigation.navigate("PostAd", { screen: "Validate_Photos" });
    };

    const { handleNextStep } = useContext(ProgressContext);
    const [completed, setCompleted] = useState(false);
    const [images, setImages] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('Add_Photos_Completed').then((value) => {
            if (value !== null) {
                setCompleted(true);
            }
        });
    }, []);

    useEffect(() => {
        if (!completed) {
            handleNextStep();
            AsyncStorage.setItem('Add_Photos_Completed', 'true');
            setCompleted(true);
        }
    }, [completed]);



    const pickImage = async () => {
      console.log("pickImage function called");
      try {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsMultipleSelection: true,
          selectionLimit: 5,
          aspect: [4, 3],
          quality: 1,
        });
        console.log("ImagePicker result:", result);
        if (!result.cancelled) {
          if (images.length >= 5) {
            alert('You can only select up to 5 images');
            return;
          }
          setImages(oldImages => [...oldImages, ...result.assets.map(asset => asset.uri)]);
          }
      } catch (error) {
        console.error("Error picking image:", error);
      }
    };

    return (
        <View style={styles.container}>
           <Text style={{ fontSize: 20, color: COLORS.primary, fontFamily: "Merriweather-Bold", marginTop: 20, width: "50%", lineHeight: 30}}>Montrez-nous sa petite frimousse !</Text>
           {images.length > 0 ?
              <Swiper
              nextButton={<Text style={styles.buttonText}>›</Text>}
              prevButton={<Text style={styles.buttonText}>‹</Text>}
              activeDot={<View style={{backgroundColor: COLORS.secondary, width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
              style={styles.wrapper}
              showsButtons={true}>
              {images.map((image, index) => (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image key={index} source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 10}} />
                </View>
              ))}
            </Swiper>
            :
              <Image source={imagesApp.frimousse} style={styles.frimousse}></Image>
            }
           <View style={styles.addPhotoscontainer}>
            <View>
              <Text style={[{fontFamily: "Roboto-Bold", color: COLORS.primary, marginBottom: 10}]}>Ajouter des photos</Text>
              <Text  style={[{fontFamily: "Roboto-Regular", color: COLORS.secondary, marginBottom: 30}]}>Vous pouvez ajouter jusqu'à 5 photos</Text>
            </View>
            <Pressable style={styles.buttonStyle} onPress={goToValidatePhotos}>
              <Text style={styles.buttonTitle}>Mes plantes</Text>
              <MaterialCommunityIcons name="folder-image" size={24} color={COLORS.primary} />
            </Pressable>

            <Pressable style={styles.buttonStyle} onPress={pickImage}>
              <Text style={styles.buttonTitle}>Ajouter une photo</Text>
              <AntDesign name="pluscircle" size={24} color={COLORS.primary} />
            </Pressable>
            
          </View>
            <BaseButton
            title="Continuer"
            height={40}
            padding={10}
            marginBottom={95}
            handlePress={goToValidatePhotos}>
            </BaseButton>
        </View>
    );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.tertiary,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    overflow: 'visible',
    height: 200,
    width: "65%",
  },
  frimousse: {
    width: 200,
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
    borderRadius: 14,
    borderColor: COLORS.secondary,
    borderWidth: 3

  },
  wrapper: {},
  addPhotoscontainer: {
    marginTop: 30,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%"
  },
  buttonStyle: {
    width: "70%",
    backgroundColor: "white",
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    marginBottom: 20,
    fontFamily: "Roboto-Regular",
    paddingLeft: 22,
    paddingRight: 25
  },
  buttonText: {
    color: COLORS.secondary,
    fontSize: 60
  }
  });
export default Add_Photos;