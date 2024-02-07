import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { COLORS, SIZES, FONT } from "../../../constants/themes";
import Icons from "../../../constants/icons";
import logo from "../../../constants/images";
import { accountService } from "../../_services/accountService";
import * as Yup from "yup";
import { Formik } from "formik";
import FormContainer from "../Authentification/formulaire/formContainer";
import FormInput from "../Authentification/formulaire/formInput";
import FormSubmitButton from "../Authentification/formulaire/formSubmitButton";
import UserAvatar from "react-native-user-avatar";
// import ImagePicker from "react-native-image-picker";
import * as ImagePicker from "expo-image-picker";

const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(3, "Invalid name!")
    .required("Name is required!"),
  email: Yup.string().email("Invalid email!").required("Email is required!"),
  password: Yup.string()
    .trim()
    .min(8, "Password is too short!")
    .required("Password is required!"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password does not match!"
  ),
});

const EditProfil = ({ navigation, route }) => {
  const { userId } = route.params || {};
  console.log(userId);
  console.log(route);
  console.log(navigation);
  const [allName, setAllName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [email, setEmail] = useState("");

  const handleGoBack = () => {
    navigation.goBack();
  };

  const goToUpdate = () => {
    navigation.navigate("Authentification", { screen: "Login" });
  };
  //methode pour uploder une image de son iphone
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      const selectedAsset = result.assets[0]; // Accédez au premier actif sélectionné
      setUserAvatar(selectedAsset.uri);
      console.log(selectedAsset.uri);
    }
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await accountService.showProfileUser(userId);
        console.log(res);
        setAllName(res.data.user.name);
        setUserAvatar(res.data.user.avatar);
        setEmail(res.data.user.mail);
        setIsLoggedIn(true);
      } catch (error) {
        setMessage(error.response.data.message);
      }
    };

    fetchUserProfile();
  }, []);

  return (
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
                name: "",
                email: "",
              }}
              validationSchema={validationSchema}
              // onSubmit={signUp}
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
                    value={allName}
                    label="Pseudo"
                    color={COLORS.white}
                  />
                  <FormInput value={email} label="Email" color={COLORS.white} />
                  <FormSubmitButton
                    onPress={goToUpdate}
                    title="Modifier mon profil"
                    color={COLORS.secondary}
                    marginTop={10}
                  />
                </>
              )}
            </Formik>
            <View
              style={{
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
                textAlignVertical: "center",
              }}
            ></View>
          </FormContainer>
        </View>
      </View>
    </View>
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
    height: "25%",
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
    top: 40,
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
    top: 100,
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
