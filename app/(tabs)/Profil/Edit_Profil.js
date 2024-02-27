import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { COLORS, SIZES, FONT } from "../../../constants/themes";
import { Formik } from "formik";
import { accountService } from "../../_services/accountService";
import { userLogin } from "../../../context/LoginProvider";
import Icons from "../../../constants/icons";
import Separator from "../componants/Separator";
import * as Yup from "yup";
import FormContainer from "../Authentification/formulaire/formContainer";
import FormInput from "../Authentification/formulaire/formInput";
import FormSubmitButton from "../Authentification/formulaire/formSubmitButton";
import UserAvatar from "react-native-user-avatar";
import * as ImagePicker from "expo-image-picker";
import ModalSendMail from "../../../components/modalMailSend";

const validationSchema = Yup.object({
  allName: Yup.string()
    .trim()
    .min(3, "Invalid name!")
    .required("Name is required!"),
  email: Yup.string().email("Invalid email!").required("Email is required!"),
});

const EditProfil = ({ navigation }) => {
  const { profile } = userLogin();
  const [allName, setAllName] = useState(profile.name);
  const [Avatar, setAvatar] = useState(profile.Avatar);
  const [email, setEmail] = useState(profile.email);
  const [showModal, setShowModal] = useState(false);
  const [userAvatar, setUserAvatar] = useState(Avatar);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const goToResetPassword = () => {
    navigation.navigate("Users", {
      screen: "UpdatePassword",
    });
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      const selectedAsset = result.assets[0];
      setUserAvatar(selectedAsset.uri);
      console.log(selectedAsset.uri);
    }
  };

  const modifUser = async (values, formikActions) => {
    try {
      const res = await accountService.UpdateProfilUser(values, userId);
      setShowModal(true);
      formikActions.resetForm();
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la modification du profil:",
        error
      );
    } finally {
      formikActions.setSubmitting(false);
    }
  };

  return (
    <>
      {showModal && (
        <ModalSendMail
        Title={"Vos Modification ont réussi !"} 
        Comment={""}
        destination={"Authentification"}
        destinationScreen={"Login"} />
      )}
      <View style={styles.page}>
        <View style={styles.headerContainer}>
          <View style={styles.titleContainer}>
            <View style={styles.LinksContainer}>
              <TouchableOpacity onPress={handleGoBack}>
                <Image
                  source={Icons.arrowBackGreen}
                  style={{ ...styles.icons, marginLeft: 10 }}
                />
              </TouchableOpacity>
              <Image
                source={Icons.CloseButtonGreen}
                style={{ ...styles.icons, marginRight: 10 }}
              />
            </View>
          </View>
        </View>
        <View style={styles.boxAvatar}>
          <Text style={styles.title1}>Profile</Text>
          <UserAvatar
            size={100}
            name={allName}
            src={userAvatar}
            style={styles.Avatar}
          />
        </View>
        <View style={styles.cameraBox}>
          <TouchableOpacity onPress={pickImage}>
            <Image source={Icons.camera} />
          </TouchableOpacity>
        </View>
        <View style={styles.BodyContainer}>
          <View style={styles.subPage}>
            <FormContainer>
              <Formik
                initialValues={{
                  allName: allName,
                  email: email,
                  avatar: userAvatar,
                }}
                validationSchema={validationSchema}
                onSubmit={modifUser}
              >
                {({
                  values,
                  errors,
                  touched,
                  isSubmitting,
                  handleBlur,
                  handleSubmit,
                  setFieldValue,
                }) => (
                  <>
                    <FormInput
                      value={values.allName}
                      error={touched.allName && errors.allName}
                      onChangeText={(value) => setFieldValue("allName", value)}
                      onBlur={handleBlur("allName")}
                      label="*Pseudo"
                      placeholder="John Smith"
                      color={COLORS.white}
                    />
                    <FormInput
                      value={values.email}
                      error={touched.email && errors.email}
                      onChangeText={(value) => setFieldValue("email", value)}
                      onBlur={handleBlur("email")}
                      autoCapitalize="none"
                      label="*Email"
                      placeholder="example@email.com"
                      color={COLORS.white}
                    />
                    <FormSubmitButton
                      onPress={handleSubmit}
                      title="Modifier mon profil"
                      color={COLORS.secondary}
                      marginTop={10}
                    />
                  </>
                )}
              </Formik>
              <Separator Title={"Sécurité"} />
              <FormSubmitButton
                onPress={goToResetPassword}
                title="Modifier mon mot de passe"
                color={COLORS.secondary}
                marginTop={0}
              />
            </FormContainer>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  page: {
    height: "100%",
    width: "100%",
    position: "relative",
  },

  //Header styles
  headerContainer: {
    backgroundColor: COLORS.primary,
    width: "100%",
    height: "22%",
    alignItems: "center",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: COLORS.tertiary,
    width: "100%",
    height: "100%",
    borderBottomRightRadius: "50%",
  },
  LinksContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
    marginTop: 20,
  },
  title1: {
    alignItems: "baseline",
    color: COLORS.secondary,
    fontSize: SIZES.xLarge,
    fontWeight: FONT.bold,
    marginTop: 15,
    marginBottom: 15,
  },
  title2: {
    alignItems: "baseline",
    color: COLORS.secondary,
    fontSize: SIZES.large,
    fontWeight: FONT.bold,
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 5,
  },
  //Avatar
  boxAvatar: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    top: 28,
    left: "50%",
    transform: [{ translateX: -50 }],
    zIndex: 1000,
  },
  Avatar: {
    width: 100, // La largeur fixe que vous souhaitez
    height: undefined, // Laissez la hauteur comme undefined pour conserver le ratio d'aspect
    aspectRatio: 1,
    borderRadius: 50,
  },
  Name: {
    marginLeft: 10,
    fontWeight: FONT.bold,
    fontSize: SIZES.large,
    color: COLORS.lightWhite,
    marginBottom: 50,
  },
  cameraBox: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    borderRadius: 50,
    borderColor: COLORS.lightWhite,
    borderWidth: 3,
    width: 40,
    height: 40,
    top: 90,
    left: "55%",
    zIndex: 2000,
  },
  //Body styles
  BodyContainer: {
    backgroundColor: COLORS.tertiary,
    height: "70%",
  },

  subPage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    height: "100%",
    borderTopLeftRadius: "50%",
    alignItems: "center",
  },

  containerLinks: {
    display: "flex",
    flexDirection: "column",
    marginTop: 50,
    width: "90%",
    height: "70%",
    marginLeft: 10,
  },
  boxLink: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    marginTop: 5,
    paddingTop: 5,
    paddingBottom: 5,
  },
  icons: {
    width: 20, // La largeur fixe que vous souhaitez
    height: undefined, // Laissez la hauteur comme undefined pour conserver le ratio d'aspect
    aspectRatio: 1,
  },
  text: {
    color: COLORS.primary,
    marginLeft: 10,
    fontWeight: FONT.bold,
  },
});

export default EditProfil;
