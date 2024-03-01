import React, { useState } from "react";
import { StyleSheet, Text, ScrollView } from "react-native";

import { COLORS } from "../../../constants/themes";

const CGUComponent = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Conditions Générales d'Utilisation</Text>
      <Text style={styles.heading}>
        1. Acceptation des conditions d'utilisation
      </Text>
      <Text style={styles.paragraph}>
        En utilisant cette application mobile, vous acceptez d'être lié par les
        présentes conditions d'utilisation. Si vous n'acceptez pas ces
        conditions, veuillez ne pas utiliser l'application.
      </Text>
      <Text style={styles.heading}>2. Utilisation de l'application</Text>
      <Text style={styles.paragraph}>
        Vous vous engagez à utiliser cette application de manière légale,
        éthique et conforme aux présentes conditions. Vous ne devez pas utiliser
        l'application de manière à causer des dommages, une interruption ou un
        accès non autorisé à nos services.
      </Text>
      <Text style={styles.heading}>
        3. Confidentialité et données personnelles
      </Text>
      <Text style={styles.paragraph}>
        Nous respectons votre vie privée. En utilisant cette application, vous
        consentez à la collecte et à l'utilisation de vos données personnelles
        conformément à notre politique de confidentialité.
      </Text>
      <Text style={styles.heading}>4. Compte utilisateur</Text>
      <Text style={styles.paragraph}>
        Pour accéder à certaines fonctionnalités de l'application, vous pourriez
        avoir besoin de créer un compte utilisateur. Vous êtes responsable de
        maintenir la confidentialité de vos informations de compte.
      </Text>
      <Text style={styles.heading}>5. Modifications des conditions</Text>
      <Text style={styles.paragraph}>
        Nous nous réservons le droit de modifier ces conditions d'utilisation à
        tout moment. Les modifications seront effectives dès leur publication
        dans l'application. Il est de votre responsabilité de vérifier
        régulièrement les mises à jour.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16, // Ajout de la marge sur les côtés
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20, // Ajout d'une marge sous le titre
    textAlign: "center",
    color: COLORS.secondary,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "justify", // Justification du texte
  },
});

export default CGUComponent;
