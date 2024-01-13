import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { accountService } from "../../_services/accountService";
import { Formik } from "formik";
import * as Yup from "yup";
import { StackActions } from "@react-navigation/native";

import FormContainer from "./formulaire/formContainer";
import FormInput from "./formulaire/formInput";
import FormSubmitButton from "./formulaire/formSubmitButton";
import {
  isValidEmail,
  isValidObjField,
  updateError,
} from "../../../utils/methods";

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
  confirmPassword: Yup.string().equals(
    [Yup.ref("password"), null],
    "Password does not match!"
  ),
});

const SignupForm = ({ navigation }) => {
  const [error, setError] = useState("");

  const handleOnChangeText = (value, fieldName, setFieldValue) => {
    setFieldValue(fieldName, value);
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
      return updateError("Password does not match!", setError);

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
    <FormContainer>
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
              label="name"
              placeholder="John Smith"
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
              label="Password"
              placeholder="********"
            />
            <FormInput
              value={values.confirmPassword}
              error={touched.confirmPassword && errors.confirmPassword}
              onChangeText={(value) =>
                handleOnChangeText(value, "confirmPassword", setFieldValue)
              }
              onBlur={handleBlur("confirmPassword")}
              autoCapitalize="none"
              secureTextEntry
              label="Confirm Password"
              placeholder="********"
            />
            <FormSubmitButton
              submitting={isSubmitting}
              onPress={handleSubmit}
              title="Sign up"
            />
          </>
        )}
      </Formik>
    </FormContainer>
  );
};

const styles = StyleSheet.create({});

export default SignupForm;
