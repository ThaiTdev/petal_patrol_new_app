import React, { useState } from "react";
import Header from "../componants/Header";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { accountService } from "../../_services/accountService";
import { isValidEmail, updateError } from "../../../utils/methods";
import FormContainer from "./formulaire/formContainer";
import FormInput from "./formulaire/formInput";
import FormSubmitButton from "./formulaire/formSubmitButton";
import images from "../../../constants/images";
import { COLORS } from "../../../constants/themes";
import ModalSendMail from "../../../components/modalMailSend";

const LostPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleOnChangeText = (value, fieldName) => {
    setEmail(value);
  };

  const goToLogin = () => {
    navigation.navigate("Authentification", { screen: "Login" });
    console.log("Navigating to Login");
  };

  const isValidForm = () => {
    if (!isValidEmail(email)) {
      updateError("Invalid email!", setError);
      return false;
    }
    return true;
  };

  const submitForm = async () => {
    if (isValidForm()) {
      try {
        const res = await accountService.forgotPassword({ email });
        setShowModal(true);
        setMessage(res.data.message);
      } catch (error) {
        setMessage(error.response.data.message);
      }
    }
  };

  return (
    <>
      {showModal && (
        <ModalSendMail
          Title={"Envoie avec succès !"}
          Comment={
            "Veuillez vérifier vos mails afin de modifier votre mot de passe pour vous connecter"
          }
          destination={"Authentification"}
          destinationScreen={"Login"}
        />
      )}
      <View style={styles.page}>
        <Header Title={"Mot de passe oublié"} logo={images.feuilleMarron} />
        <View style={styles.subPage}>
          <View style={styles.containerForm}>
            <FormContainer>
              {error ? (
                <Text
                  style={{ color: "red", fontSize: 18, textAlign: "center" }}
                >
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
    </>
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
