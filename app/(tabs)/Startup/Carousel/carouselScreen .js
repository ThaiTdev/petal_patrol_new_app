import React from 'react';
import { StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import Slide1 from "./firstSlide";
import Slide2 from "./secondSlide";
import Slide3 from "./thirdSlide";


const CarouselScreen = () => {

  return (
    <Swiper style={styles.wrapper} loop={false}>
      <Slide1 />
      <Slide2 />
      <Slide3 />
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
});

export default CarouselScreen;
