import React, { useState } from "react";
import Header from "../Ads/componants/Header";
import Separator from "../Ads/componants/Separator";
import SocialButton from "./formulaire/socialButton";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native-elements";
import { useLogin } from "../../../context/LoginProvider";
import { accountService } from "../../_services/accountService";
import { useNavigation } from "@react-navigation/native";
import {
  isValidEmail,
  isValidObjField,
  updateError,
} from "../../../utils/methods";
import FormContainer from "./formulaire/formContainer";
import FormInput from "./formulaire/formInput";
import FormSubmitButton from "./formulaire/formSubmitButton";
import images from "../../../constants/images";
import { COLORS, SIZES, FONT } from "../../../constants/themes";

const LoginForm = () => {
  const { setIsLoggedIn, setProfile } = useLogin();
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [isSelected, setSelection] = useState(false);

  const { email, password } = userInfo;
  const [error, setError] = useState("");

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };
  const goToSignup = () => {
    navigation.navigate("Authentification", { screen: "Signup" });
    console.log("Navigating to Signup");
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
    <View style={styles.page}>
      <Header Title={"Me Connecter"} logo={images.feuilleMarron} />
      <View style={styles.subPage}>
        <View style={styles.containerForm}>
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
              label="Adresse mail"
              placeholder="exemple@email.com"
              autoCapitalize="none"
              color={COLORS.white}
            />
            <FormInput
              value={password}
              onChangeText={(value) => handleOnChangeText(value, "password")}
              label="Mot de passe"
              placeholder="********"
              autoCapitalize="none"
              secureTextEntry
              color={COLORS.white}
            />
            <View
              style={{
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
                textAlignVertical: "center", // Utilisez cette propriété pour aligner le texte verticalement
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
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: -18,
                  }}
                >
                  <CheckBox value={isSelected} onValueChange={setSelection} />
                  <Text style={styles.text1}>Se souvenir de moi</Text>
                </View>
                <Text style={styles.text2}>Mot de pass oublié?</Text>
              </View>
            </View>
            <FormSubmitButton
              onPress={submitForm}
              title="Me connecter"
              color={COLORS.secondary}
            />
            <Separator Title={"OU ALORS"} color={COLORS.white} />
            <SocialButton
              title="Continuer avec Google"
              images={images.google}
            />
            <SocialButton
              title="Continuer avec Apple"
              images={images.apple}
              style={{ width: "90%" }}
            />

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
                Pas de compte chez nous?
              </Text>
              <TouchableOpacity onPress={goToSignup}>
                <Text
                  style={{
                    fontSize: 15,
                    color: COLORS.secondary,
                    marginLeft: 10,
                  }}
                >
                  S'inscrire
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

export default LoginForm;
