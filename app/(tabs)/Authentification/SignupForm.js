import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { accountService } from "../../_services/accountService";
import { Formik } from "formik";
import * as Yup from "yup";
import Header from "../componants/Header";
import images from "../../../constants/images";
import FormContainer from "./formulaire/formContainer";
import FormInput from "./formulaire/formInput";
import { COLORS } from "../../../constants/themes";
import FormSubmitButton from "./formulaire/formSubmitButton";
import { updateError } from "../../../utils/methods";

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
  const handleOnChangeText = (value, fieldName, setFieldValue) => {
    setFieldValue(fieldName, value);
  };

  const goToLogin = () => {
    navigation.navigate("Authentification", { screen: "Login" });
  };

  const signUp = async (values, formikActions) => {
    try {
      const res = await accountService.signup(values);
      setValideMessage(res.data.message);
      formikActions.resetForm();
    } catch (error) {
      updateError("Une erreur s'est produite lors de l'inscription", setError);
    } finally {
      formikActions.setSubmitting(false);
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
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
              ) : valideMessage ? (
                <Text
                  style={{ color: "green", fontSize: 18, textAlign: "center" }}
                >
                  {valideMessage}
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
                    <FormInput
                      value={values.password}
                      error={touched.password && errors.password}
                      onChangeText={(value) =>
                        handleOnChangeText(value, "password", setFieldValue)
                      }
                      onBlur={handleBlur("password")}
                      autoCapitalize="none"
                      secureTextEntry
                      label="*Mot de passe"
                      placeholder="********"
                      color={COLORS.white}
                    />
                    <FormInput
                      value={values.confirmPassword}
                      error={touched.confirmPassword && errors.confirmPassword}
                      onChangeText={(value) =>
                        handleOnChangeText(
                          value,
                          "confirmPassword",
                          setFieldValue
                        )
                      }
                      onBlur={handleBlur("confirmPassword")}
                      autoCapitalize="none"
                      secureTextEntry
                      label="*Confirme mot de passe"
                      placeholder="********"
                      color={COLORS.white}
                    />
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
  forgotPassWord: {
    width: "90%",
    flexDirection: "row",
    color: COLORS.white,
  },
  text1: { color: "white", marginLeft: "-15%", fontSize: 10 },
  text2: { color: "white", fontSize: 10 },
});

export default SignupForm;
