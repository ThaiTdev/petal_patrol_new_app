import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Image, View, Text, Pressable } from "react-native";
import { accountService } from "../../../_services/accountService";
import { SIZES, COLORS, FONT } from "../../../../constants/themes";
import { useRouteContext } from "../../RouteContext";
import { ProgressContext } from "../../navigators/ProgressContext";
import { Platform } from "react-native";
import { userLogin } from "../../../../context/LoginProvider";
import DateTimePicker from "@react-native-community/datetimepicker";
import BaseButton from "../../../../components/Buttons/Base";
import images from "../../../../constants/images";
import ModalSendMail from "../../../../components/modalMailSend";

const Dates_Page = () => {
  const { allData, setAllData, imagesPlant, dataPlant, setDataPlant } =
    userLogin();

  const [completed, setCompleted] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const [valideMessage, setValideMessage] = useState("");
  const [dateOpen1, setDateOpen1] = useState(true);
  const [dateOpen2, setDateOpen2] = useState(true);
  const [isSending, setIsSending] = useState(false);

  const { currentRoute } = useRouteContext();
  const { updateCurrentRoute } = useRouteContext();

  useEffect(() => {
    updateCurrentRoute("PostAd");
  }, []);

  const { handleNextStep } = useContext(ProgressContext);

  useEffect(() => {
    if (Platform.OS === "android") {
      setDateOpen1(false);
      setDateOpen2(false);
    }
    handleNextStep();
    setCompleted(true);
  }, [completed]);

  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const formattedStartDate = selectedStartDate.toLocaleDateString(
    "fr-FR",
    options
  );
  const formattedEndDate = selectedEndDate.toLocaleDateString("fr-FR", options);

  const handleStartDateChange = (event, selectedDate) => {
    if (selectedDate !== undefined) {
      const parsedDate = new Date(selectedDate);
      const options = { year: "numeric", month: "long", day: "numeric" };
      const formattedDate = parsedDate.toLocaleDateString("fr-FR", options);
      console.log(`Date de début sélectionnée: ${formattedDate}`);
      setSelectedStartDate(parsedDate);
      if (Platform.OS === "android") {
        setDateOpen1(false);
      }
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
      if (Platform.OS === "android") {
        setDateOpen2(false);
      }
    } else {
      console.log("Sélection de la date de fin annulée");
    }
  };

  useEffect(() => {
    const modifiedData = {
      ...allData,
      date_from: selectedStartDate,
      date_to: selectedEndDate,
    };

    setAllData(modifiedData);

    const { name } = allData;

    setDataPlant({ image: imagesPlant, name: name, type: "" });
  }, [selectedStartDate, selectedEndDate]);

  const handleValidation = async () => {
    const currentDate = new Date();
    if (!allData.date_from || !allData.date_to) {
      setError(
        "Vous devez renseigner la date de début et de fin de votre offre."
      );
      return;
    }
    if (selectedStartDate.getTime() < currentDate.getTime()) {
      setError(
        "La date de début ne peut pas être antérieure ou égale à la date du jour"
      );

      return;
    }
    if (selectedStartDate.getTime() < selectedEndDate.getTime()) {
      const formData = new FormData();

      // Append images to FormData
      dataPlant.image.forEach((image, index) => {
        formData.append(`image`, {
          uri: image,
          type: "image/jpeg",
          name: `image_${index + 1}.jpg`,
        });
      });

      // Append other fields to FormData
      formData.append("name", dataPlant.name);
      formData.append("type", dataPlant.type);
      if (isSending) return;
      try {
        setIsSending(true);
        //create plant
        const resDataPlant = await accountService.createPlant(formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        // setValideMessage(resDataPlant.data.message);
        console.log(valideMessage);
        console.log(resDataPlant.data.plant);

        const offer = {
          ...allData,
          plantId: resDataPlant.data.plant.id,
        };
        //create ads
        const resData = await accountService.createOffers(offer);
        // setValideMessage(resData.data.message);
        console.log(valideMessage);
        setShowModal(true);
        updateCurrentRoute("Ads");
        console.log("Form submitted!");
      } catch (error) {
        console.error("Error while creating plant:", error);
        setError("Une erreur s'est produite lors de la création de la plante");
      } finally {
        console.log("send is finish");
        setTimeout(() => setIsSending(false), 1000);
      }
    } else {
      setError("La date de début doit être antérieure à la date de fin");
    }
    setError("");
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
        {error ? (
          <Text
            style={{
              color: "red",
              fontSize: 16,
              textAlign: "center",
              marginTop: 10,
            }}
          >
            {error}
          </Text>
        ) : null}
        <View style={styles.form}>
          <Pressable
            onPress={() => Platform.OS === "android" && setDateOpen1(true)}
          >
            <Text style={styles.inputLabel}>
              {selectedStartDate
                ? selectedStartDate.toISOString().slice(0, 10)
                : "Date de début"}
            </Text>
          </Pressable>

          {dateOpen1 && (
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
          )}
        </View>
        <View style={styles.form}>
          <Pressable
            onPress={() => Platform.OS === "android" && setDateOpen2(true)}
          >
            <Text style={styles.inputLabel}>
              {selectedEndDate
                ? selectedEndDate.toISOString().slice(0, 10)
                : "Date de fin"}
            </Text>
          </Pressable>

          {dateOpen2 && (
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
          )}
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
    position: "relative",
    top: -20,
  },
  form: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 5,
  },
  datePicker: {
    width: "100%",
  },
  inputLabel: {
    zIndex: 1,
    fontSize: 16,
    fontFamily: "Roboto-Medium",
    color: COLORS.primary,
    marginLeft: 30,
  },
});

export default Dates_Page;
