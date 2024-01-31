import React, { useState } from "react";
import Header from "../componants/Header";
import Separator from "../componants/Separator";
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
import { COLORS } from "../../../constants/themes";

const LoginForm = () => {
  const { setIsLoggedIn, setProfile } = useLogin();
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userInfo;
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  //checkbox
  const [checked, setChecked] = useState(false);
  const toggleCheckbox = () => setChecked(!checked);

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  //methode pour la navigation
  const goToSignup = () => {
    navigation.navigate("Authentification", { screen: "Signup" });
  };
  const goToLostPassword = () => {
    navigation.navigate("Authentification", { screen: "LostPassword" });
  };

  //gestion des erreurs pour formulaire
  const isValidForm = () => {
    if (!isValidObjField(userInfo))
      return updateError("Required all fields!", setError);
    if (!isValidEmail(email)) return updateError("Invalid email!", setError);

    return true;
  };

  const submitForm = async () => {
    if (isValidForm()) {
      try {
        accountService
          .signin({ ...userInfo })
          .then((res) => {
            setIsLoggedIn(true);
            navigation.navigate("Users", { screen: "Edit_Profile" });
          })
          .catch((error) => {
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
              onChangeText={(value) => handleOnChangeText(value, "email")}
              label="*Adresse mail"
              placeholder="exemple@email.com"
              autoCapitalize="none"
              color={COLORS.white}
            />
            <FormInput
              value={password}
              onChangeText={(value) => handleOnChangeText(value, "password")}
              label="*Mot de passe"
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
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: -18,
                  }}
                >
                  <CheckBox checked={checked} onPress={toggleCheckbox} />
                  <Text style={styles.text1}>Se souvenir de moi</Text>
                </View>
                <TouchableOpacity onPress={goToLostPassword}>
                  <Text style={styles.text2}>Mot de pass oublié?</Text>
                </TouchableOpacity>
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
                textAlignVertical: "center",
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
