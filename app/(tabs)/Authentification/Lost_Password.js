import React, { useState } from "react";
import Header from "../componants/Header";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { accountService } from "../../_services/accountService";
import { useNavigation } from "@react-navigation/native";
import { isValidEmail, updateError } from "../../../utils/methods";
import FormContainer from "./formulaire/formContainer";
import FormInput from "./formulaire/formInput";
import FormSubmitButton from "./formulaire/formSubmitButton";
import images from "../../../constants/images";
import { COLORS } from "../../../constants/themes";

const LostPassword = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState({
    email: "",
  });
  const [message, setMessage] = useState("");

  const { email } = userInfo;
  const [error, setError] = useState("");

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  //methode de navigation
  const goToLogin = () => {
    navigation.navigate("Authentification", { screen: "Login" });
    console.log("Navigating to Signup");
  };

  //gestion des erreurs dans mon formulaire
  const isValidForm = () => {
    if (!isValidEmail(email)) return updateError("Invalid email!", setError);
    return true;
  };

  const submitForm = async () => {
    console.log(...userInfo);
    if (isValidForm()) {
      try {
        accountService
          .forgotPassword({ ...userInfo })
          .then((res) => {
            setMessage(res.data.message);
          })
          .catch((error) => {
            setMessage(error.response.data.message);
          });
      } catch (error) {}
    }
  };

  return (
    <View style={styles.page}>
      <Header Title={"Mot de passe oublié"} logo={images.feuilleMarron} />
      <View style={styles.subPage}>
        <View style={styles.containerForm}>
          <FormContainer>
            {error ? (
              <Text style={{ color: "red", fontSize: 18, textAlign: "center" }}>
                {error}
              </Text>
            ) : message ? (
              <Text
                style={{ color: "green", fontSize: 18, textAlign: "center" }}
              >
                {message}
              </Text>
            ) : null}
            <FormInput
              value={email}
              onChangeText={(value) => handleOnChangeText(value, "email")}
              label="*Adresse mail"
              placeholder="exemple@email.com"
              autoCapitalize="none"
              color={COLORS.white}
            />
            <View
              style={{
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
                textAlignVertical: "center",
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: "8%",
                  width: "90%",
                  marginTop: "-6%",
                }}
              ></View>
            </View>
            <FormSubmitButton
              onPress={submitForm}
              title="Me connecter"
              color={COLORS.secondary}
            />
            <View
              style={{
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
                textAlignVertical: "center",
              }}
            >
              <TouchableOpacity onPress={goToLogin}>
                <Text
                  style={{
                    fontSize: 15,
                    color: COLORS.lightWhite,
                    marginLeft: 10,
                  }}
                >
                  Revenir à la page de connexion ?
                </Text>
              </TouchableOpacity>
            </View>
          </FormContainer>
        </View>
      </View>
    </View>
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
    alignItems: "center",
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

export default LostPassword;
