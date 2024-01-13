import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { useLogin } from "../../../context/LoginProvider";
import { accountService } from "../../_services/accountService";
import {
  isValidEmail,
  isValidObjField,
  updateError,
} from "../../../utils/methods";
import FormContainer from "./formulaire/formContainer";
import FormInput from "./formulaire/formInput";
import FormSubmitButton from "./formulaire/formSubmitButton";

const LoginForm = () => {
  const { setIsLoggedIn, setProfile } = useLogin();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userInfo;
  const [error, setError] = useState("");

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  ///////gestion des erreurs dans mon formulaire
  const isValidForm = () => {
    if (!isValidObjField(userInfo))
      return updateError("Required all fields!", setError);

    if (!isValidEmail(email)) return updateError("Invalid email!", setError);

    if (!password.trim() || password.length < 8)
      return updateError("Password is too short!", setError);

    return true;
  };
  ///////////////////////////////////////////////

  const submitForm = async () => {
    if (isValidForm()) {
      console.log(isValidForm());
      try {
        accountService
          .signin({ ...userInfo })
          .then((res) => {
            console.log(res);
            if (
              res.data.user.validate_account === true &&
              res.data.user.roles.includes("ADMIN")
            ) {
              console.log(res.data.message);
              setUserInfo({ email: "", password: "" });
              setIsLoggedIn(true);
            }
          })
          .catch((error) => {
            // Gestion des erreurs
            console.error("Status Code:", error.response.status);
            setMessage(error.response.data.message);
          });
      } catch (error) {}
    }
  };

  return (
    <FormContainer>
      {error ? (
        <Text style={{ color: "red", fontSize: 18, textAlign: "center" }}>
          {error}
        </Text>
      ) : null}
      <FormInput
        value={email}
        // value={"email"}
        onChangeText={(value) => handleOnChangeText(value, "email")}
        label="Email"
        placeholder="exemple@email.com"
        autoCapitalize="none"
      />
      <FormInput
        value={password}
        onChangeText={(value) => handleOnChangeText(value, "password")}
        label="Password"
        placeholder="********"
        autoCapitalize="none"
        secureTextEntry
      />
      <FormSubmitButton onPress={submitForm} title="Login" />
    </FormContainer>
  );
};

const styles = StyleSheet.create({});

export default LoginForm;
