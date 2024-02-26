import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { accountService } from "../../_services/accountService";
import { Formik } from "formik";
import * as Yup from "yup";
import Header from "../componants/Header";
import ModalSendMail from "../componants/modalMailSend";
import images from "../../../constants/images";
import FormContainer from "./formulaire/formContainer";
import FormInput from "./formulaire/formInput";
import { COLORS } from "../../../constants/themes";
import FormSubmitButton from "./formulaire/formSubmitButton";
import { updateError } from "../../../utils/methods";
import icons from "../../../constants/icons";

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

const SignupForm = ({ navigation }) => {
  const [error, setError] = useState("");
  const [valideMessage, setValideMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleOnChangeText = (value, fieldName, setFieldValue) => {
    setFieldValue(fieldName, value);
  };

  const goToLogin = () => {
    navigation.navigate("Authentification", { screen: "Login" });
  };
  const handleshowPassword = () => {
    setShowPassword(!showPassword);
    console.log(showPassword);
  };
  const handleshowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
    console.log(showConfirmPassword);
  };
  const signUp = async (values, formikActions) => {
    try {
      const res = await accountService.signup(values);
      setValideMessage(res.data.message);
      setShowModal(true);
      formikActions.resetForm();
    } catch (error) {
      updateError("Une erreur s'est produite lors de l'inscription", setError);
    } finally {
      formikActions.setSubmitting(false);
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      {showModal && (
        <ModalSendMail
          Title={"Enregistré avec succès !"}
          Comment={
            "Veuillez vérifier vos mails afin de valider votre compte avant de vous connecter"
          }
        />
      )}
      <View style={styles.page}>
        <Header Title={"M'inscrire"} logo={images.feuilleMarron} />
        <ScrollView style={styles.subPage}>
          <View style={styles.containerForm}>
            <FormContainer>
              {error ? (
                <Text
                  style={{ color: "red", fontSize: 18, textAlign: "center" }}
                >
                  {error}
                </Text>
              ) : null}
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                }}
                validationSchema={validationSchema}
                onSubmit={signUp}
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
                      value={values.name}
                      error={touched.name && errors.name}
                      onChangeText={(value) =>
                        handleOnChangeText(value, "name", setFieldValue)
                      }
                      onBlur={handleBlur("name")}
                      label="*Pseudo"
                      placeholder="John Smith"
                      color={COLORS.white}
                    />
                    <FormInput
                      value={values.email}
                      error={touched.email && errors.email}
                      onChangeText={(value) =>
                        handleOnChangeText(value, "email", setFieldValue)
                      }
                      onBlur={handleBlur("email")}
                      autoCapitalize="none"
                      label="*Email"
                      placeholder="example@email.com"
                      color={COLORS.white}
                    />
                    <View style={styles.containerShowPassWord}>
                      <FormInput
                        value={values.password}
                        error={touched.password && errors.password}
                        onChangeText={(value) =>
                          handleOnChangeText(value, "password", setFieldValue)
                        }
                        onBlur={handleBlur("password")}
                        autoCapitalize="none"
                        secureTextEntry={!showPassword}
                        label="*Mot de passe"
                        placeholder="********"
                        color={COLORS.white}
                      />
                      <TouchableOpacity
                        style={styles.eyeIconContainer}
                        onPress={handleshowPassword}
                      >
                        {showPassword ? (
                          <Image style={styles.ImageEye} source={icons.eye} />
                        ) : (
                          <Image
                            style={styles.ImageEye}
                            source={icons.crossEye}
                          />
                        )}
                      </TouchableOpacity>
                    </View>
                    <View style={styles.containerShowPassWord}>
                      <FormInput
                        value={values.confirmPassword}
                        error={
                          touched.confirmPassword && errors.confirmPassword
                        }
                        onChangeText={(value) =>
                          handleOnChangeText(
                            value,
                            "confirmPassword",
                            setFieldValue
                          )
                        }
                        onBlur={handleBlur("confirmPassword")}
                        autoCapitalize="none"
                        secureTextEntry={!showConfirmPassword}
                        label="*Confirme mot de passe"
                        placeholder="********"
                        color={COLORS.white}
                      />
                      <TouchableOpacity
                        style={styles.eyeIconContainer}
                        onPress={handleshowConfirmPassword}
                      >
                        {showConfirmPassword ? (
                          <Image style={styles.ImageEye} source={icons.eye} />
                        ) : (
                          <Image
                            style={styles.ImageEye}
                            source={icons.crossEye}
                          />
                        )}
                      </TouchableOpacity>
                    </View>
                    <FormSubmitButton
                      submitting={isSubmitting}
                      onPress={handleSubmit}
                      title="C'est parti !"
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
              >
                <Text style={{ fontSize: 15, color: COLORS.gray }}>
                  Déjà un compte ?
                </Text>
                <TouchableOpacity onPress={goToLogin}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: COLORS.secondary,
                      marginLeft: 10,
                    }}
                  >
                    Connectez-vous
                  </Text>
                </TouchableOpacity>
              </View>
            </FormContainer>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  page: {
    position: "relative",
    backgroundColor: COLORS.tertiary,
    height: "100%",
  },
  subPage: {
    backgroundColor: COLORS.primary,
    height: "100%",
    borderTopLeftRadius: "50%",
    // alignItems: "center",
  },
  containerForm: {
    marginTop: "5%",
  },
  containerShowPassWord: {
    position: "relative",
  },
  ImageEye: {
    position: "absolute",
    width: 30,
    height: 30,
    right: 30,
    bottom: 18,
    zIndex: 2000,
  },
  forgotPassWord: {
    width: "90%",
    flexDirection: "row",
    color: COLORS.white,
  },
  text1: { color: "white", marginLeft: "-15%", fontSize: 10 },
  text2: { color: "white", fontSize: 10 },
});

export default SignupForm;
