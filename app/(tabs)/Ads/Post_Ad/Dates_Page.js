import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Image, View, Text } from "react-native";
import { SIZES, COLORS, FONT } from "../../../../constants/themes";
import { ProgressContext } from "../../navigators/ProgressContext";
import { userLogin } from "../../../../context/LoginProvider";
import DateTimePicker from '@react-native-community/datetimepicker';
import BaseButton from "../../../../components/Buttons/Base";
import images from "../../../../constants/images";
import ModalSendMail from "../../../../components/modalMailSend";

const Dates_Page = () => {
  const navigation = useNavigation();
  const { startDate, setStartDate, endDate, setEndDate} = userLogin();
  const [completed, setCompleted] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);


  const { handleNextStep } = useContext(ProgressContext);

  useEffect(() => {
    handleNextStep();
    setCompleted(true);
  }, [completed]);

  useEffect(() => {
    setStartDate(selectedStartDate);
  }, [selectedStartDate]);

  useEffect(() => {
    setEndDate(selectedEndDate);
  }, [selectedEndDate]);

const formattedStartDate = selectedStartDate.toLocaleString("fr-FR");
const formattedEndDate = selectedEndDate.toLocaleString("fr-FR");

console.log("startDate:", formattedStartDate);
console.log("endDate:", formattedEndDate);

  const handleStartDateChange = (event, selectedDate) => {
    if (selectedDate !== undefined) {
      const parsedDate = new Date(selectedDate);
      const options = { year: "numeric", month: "long", day: "numeric" };
      const formattedDate = parsedDate.toLocaleDateString("fr-FR", options);
      console.log(`Date de début sélectionnée: ${formattedDate}`);
      setSelectedStartDate(parsedDate);
    } else {
      console.log("Sélection de la date de début annulée");
    }
  };

  const handleEndDateChange = (event, selectedDate) => {
    if (selectedDate !== undefined) {
      const parsedDate = new Date(selectedDate);
      const options = { year: "numeric", month: "long", day: "numeric" };
      const formattedDate = parsedDate.toLocaleDateString("fr-FR", options);
      console.log(`Date de fin sélectionnée: ${formattedDate}`);
      setSelectedEndDate(parsedDate);
    } else {
      console.log("Sélection de la date de fin annulée");
    }
  };

  const handleValidation = () => {
    const currentDate = new Date();
    if (selectedStartDate.getTime() < currentDate.getTime()) {
      console.log("La date de début ne peut pas être antérieure à la date du jour");
      return;
    }
    if (selectedStartDate.getTime() < selectedEndDate.getTime()) {
      setShowModal(true);
      console.log("Form submitted!");
    } else {
      console.log("La date de début doit être antérieure à la date de fin");
    }
  };


  return (
    <View style={styles.container}>
      {showModal && (
        <ModalSendMail
          Title={"Annonce enregistrée avec succès !"}
          Comment={
            "Après validation par nos équipes elle apparaîtra dans la liste des annonces"
          }
          destination={"Ads"}
          destinationScreen={"Ads_List"}
        />
      )}
      <View style={styles.subContainer}>
        <Text
          style={{
            fontSize: 20,
            color: COLORS.primary,
            fontFamily: "Merriweather-Bold",
            marginTop: 20,
            width: "100%",
            lineHeight: 30,
          }}
        >
          L’instant plaisant
        </Text>
        <View style={styles.title}>
          <Text
            style={{
              fontSize: SIZES.medium,
              color: COLORS.secondary,
              marginTop: 20,
              width: "70%",
              fontWeight: FONT.bold,
            }}
          >
            Dites-nous quand vous avez besoin d’un plant-sitter
          </Text>
          <Image source={images.calandar} style={styles.icons} />
        </View>
        <View style={styles.form}>
        <Text style={styles.inputLabel}>Date de début</Text>
          <View>
          <DateTimePicker
            value={selectedStartDate}
            mode="date"
            display="default"
            onChange={handleStartDateChange}
            locale="fr"
            style={styles.datePicker}
            accentColor={COLORS.white || undefined}
          />
          </View>
        </View>
        <View style={styles.form}>
          <Text style={styles.inputLabel}>Date de fin</Text>
          <View>
          <DateTimePicker
            value={selectedEndDate}
            mode="date"
            display="default"
            onChange={handleEndDateChange}
            locale="fr"
            style={styles.datePicker}
            accentColor={COLORS.primary || undefined}
          />
          </View>
        </View>
        <BaseButton
          title="Valider"
          height={40}
          padding={10}
          marginTop={25}
          handlePress={handleValidation}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: COLORS.tertiary,
    position: "relative",
  },
  subContainer: {
    position: "relative",
    top: -40,
    width: "90%",
    height: "65%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    position: 'relative',
    top: -20
  },
  form: {
    width: "90%",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 5,
  },
  datePicker: {
    width: '100%',
  },
  inputLabel: {
    zIndex: 1,
    fontSize: 16,
    fontFamily: "Roboto-Medium",
    color: COLORS.primary,
    marginLeft: 30
  },
});

export default Dates_Page;
