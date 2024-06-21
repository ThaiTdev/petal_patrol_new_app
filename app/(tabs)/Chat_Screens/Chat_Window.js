import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import io from "socket.io-client";
import { COLORS } from "../../../constants/themes";
import images from "../../../constants/images";
import Header from "../componants/Header";

const Chat = () => {
  // State pour stocker les messages
  const [messages, setMessages] = useState([]);
  // State pour stocker le message actuellement en cours de saisie
  const [currentMessage, setCurrentMessage] = useState("");
  // State pour stocker l'instance du socket
  const [socket, setSocket] = useState(null);
  const [keyboardShown, setKeyboardShown] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    // Connexion au serveur Socket.IO
    const newSocket = io("YOUR_SOCKET_SERVER_URL");
    setSocket(newSocket);

    // Écoute des nouveaux messages entrants
    newSocket.on("message", (message) => {
      // Mise à jour de la liste des messages avec le nouveau message
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Ajout des écouteurs pour détecter l'apparition et la disparition du clavier
    const keyboardWillShowListener = Keyboard.addListener(
      "keyboardWillShow",
      (event) => {
        setKeyboardShown(event.endCoordinates.height);
        setKeyboardShown(true);
      }
    );
    const keyboardWillHideListener = Keyboard.addListener(
      "keyboardWillHide",
      () => {
        setKeyboardShown(false);
      }
    );

    return () => {
      // Déconnexion du socket lors du démontage du composant
      newSocket.disconnect();
      keyboardWillShowListener.remove();
      keyboardWillHideListener.remove();
    };
  }, []);
  // Fonction pour envoyer un message
  const sendMessage = () => {
    if (currentMessage.trim() !== "") {
      // Émission du message vers le serveur
      socket.emit("message", currentMessage);
      // Réinitialisation du message actuel
      setCurrentMessage("");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <Header Title={"Espace discution"} logo={images.feuilleMarron} />
        {/* Liste des messages */}
        <FlatList
          data={messages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text style={styles.message}>{item}</Text>}
          inverted // Pour afficher le dernier message en bas
        />
        {/* Zone de saisie de texte et bouton d'envoi */}
        <View style={styles.inputContainer}>
          <TextInput
            value={currentMessage}
            onChangeText={setCurrentMessage}
            placeholder="Type your message"
            style={{
              ...styles.input, // Conserver les styles définis dans styles.input
              marginBottom: keyboardShown ? 0 : 100, // Ajouter la condition pour modifier le marginBottom en fonction de l'état du clavier
            }}
          />
          <TouchableOpacity
            style={{
              ...styles.sendButton, // Conserver les styles définis dans styles.input
              marginBottom: keyboardShown ? 0 : 100, // Ajouter la condition pour modifier le marginBottom en fonction de l'état du clavier
            }}
            onPress={sendMessage}
          >
            <Image source={images.pencil} style={styles.sendIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: 20,
  },
  message: {
    fontSize: 16,
    color: COLORS.white,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: COLORS.secondary,
    borderRadius: 5,
    padding: 10,
  },
  sendIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.white,
  },
});

export default Chat;
