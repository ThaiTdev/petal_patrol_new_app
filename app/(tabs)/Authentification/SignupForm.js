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
import { StackActions } from "@react-navigation/native";
import Header from "../Ads/componants/Header";
import images from "../../../constants/images";
import FormContainer from "./formulaire/formContainer";
import FormInput from "./formulaire/formInput";
import { COLORS } from "../../../constants/themes";
import FormSubmitButton from "./formulaire/formSubmitButton";
import {
  isValidEmail,
  isValidObjField,
  updateError,
} from "../../../utils/methods";

const validationSchema = Yup.object({
  name: Yup.string().trim().min(3, "Invalid name!").required("Is required!"),
  email: Yup.string().email("Invalid email!").required("Is required!"),
  password: Yup.string()
    .trim()
    .min(8, "Password is too short!")
    .required("Password Is required!"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password not match!"
  ),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Invalid phone number")
    .required("Is required"),
});

const SignupForm = ({ navigation }) => {
  const [error, setError] = useState("");

  const handleOnChangeText = (value, fieldName, setFieldValue) => {
    setFieldValue(fieldName, value);
  };

  const goToLogin = () => {
    navigation.navigate("Authentification", { screen: "Login" });
  };

  const isValidForm = (userInfo) => {
    if (!isValidObjField(userInfo))
      return updateError("Required all fields!", setError);
    if (!userInfo.fullname.trim() || userInfo.name.length < 3)
      return updateError("Invalid name!", setError);
    if (!isValidEmail(userInfo.email))
      return updateError("Invalid email!", setError);
    if (!userInfo.password.trim() || userInfo.password.length < 8)
      return updateError("Password is less than 8 characters!", setError);
    if (userInfo.password !== userInfo.confirmPassword)
      return updateError("Password not match!", setError);
    if (userInfo.phone || userInfo.phone.length < 10)
      return updateError("Invalid phone!", setError);

    return true;
  };

  const submitForm = (userInfo) => {
    if (isValidForm(userInfo)) {
      // submit form
      console.log(userInfo);
    }
  };

  const signUp = async (values, formikActions) => {
    try {
      const res = await accountService.signup(values);
      console.log(res);

      if (res.data.success) {
        // const signInRes = await client.post("/sign-in", {
        const signInRes = accountService
          .signin({ email: values.email, password: values.password })
          .then((res) => {
            {
            }
          });

        if (signInRes.data.success) {
          navigation.dispatch(
            StackActions.replace("ImageUpload", {
              token: signInRes.data.token,
            })
          );
        }
      }

      formikActions.resetForm();
    } catch (error) {
      // Gérer les erreurs ici
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
              ) : null}
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                  phone: "",
                }}
                validationSchema={validationSchema}
                onSubmit={signUp}
              >
                {({
                  values,
                  errors,
                  touched,
                  isSubmitting,
                  handleChange,
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
                      label="Pseudo"
                      placeholder="John Smith"
                      color={COLORS.white}
                    />
                    <FormInput
                      value={values.phone}
                      error={touched.phone && errors.phone}
                      onChangeText={(value) =>
                        handleOnChangeText(value, "phone", setFieldValue)
                      }
                      onBlur={handleBlur("phone")}
                      autoCapitalize="none"
                      label="Numéro de téléphone"
                      placeholder="07 ** ** ** **"
                      color={COLORS.white}
                      keyboardType="phone-pad"
                    />
                    <FormInput
                      value={values.email}
                      error={touched.email && errors.email}
                      onChangeText={(value) =>
                        handleOnChangeText(value, "email", setFieldValue)
                      }
                      onBlur={handleBlur("email")}
                      autoCapitalize="none"
                      label="Email"
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
                      label="Mot de passe"
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
                      label="confirme mot de passe"
                      placeholder="********"
                      color={COLORS.white}
                    />

                    <FormSubmitButton
                      onPress={submitForm}
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
                  textAlignVertical: "center", // Utilisez cette propriété pour aligner le texte verticalement
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    color: COLORS.gray,
                  }}
                >
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
                    Cnnectez-vous
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
