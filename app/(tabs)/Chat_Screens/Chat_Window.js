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
import { userLogin } from "../../../context/LoginProvider";

const Chat = () => {
  // State pour stocker les messages
  const [room, setRoom] = useState("");
  const [rooms, setRooms] = useState([]);
  const [messages, setMessages] = useState([]);
  // State pour stocker le message actuellement en cours de saisie
  const [currentMessage, setCurrentMessage] = useState("");
  // State pour stocker l'instance du socket
  const [socket, setSocket] = useState(null);
  const [keyboardShown, setKeyboardShown] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const { profile } = userLogin();

  useEffect(() => {
    console.log("login:", profile);
    // Connexion au serveur Socket.IO
    console.log("socket:", process.env.EXPO_PUBLIC_SOCKET_URL);
    const newSocket = io(process.env.EXPO_PUBLIC_SOCKET_URL, {
      auth: { token: process.env.EXPO_PUBLIC_SOCKET_TOKEN },
    });
    setSocket(newSocket);
    newSocket.emit("rooms");

    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    console.log("MESS[]", messages);
    if (socket) {
      // Écoute des nouveaux messages entrants
      socket.on("messageSended", (message) => {
        // Mise à jour de la liste des messages avec le nouveau message
        setMessages((prevMessages) => [...prevMessages, message.message]);
      });

      socket.on("roomJoined", (data) => {
        console.log("roomJoined", data);
        setRoom(data.room);
        setMessages(data.messages);
      });

      socket.on("rooms", (data) => {
        // console.log(
        //   "ROOMS",
        //   data.rooms.filter((r) => r.users.includes(profile.userId.toString()))
        // );
        setRooms(
          data.rooms.filter((r) => r.users.includes(profile.userId.toString()))
        );
        // socket.emit("joinRoom", data.rooms[0].name, profile.userId.toString());
      });
    }

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
      // newSocket.disconnect();
      if (socket) {
        socket.off("messageSended");
        socket.off("rooms");
        socket.off("roomJoined");
      }

      keyboardWillShowListener.remove();
      keyboardWillHideListener.remove();
    };
  }, [socket, messages, room]);

  // Fonction pour envoyer un message
  const sendMessage = () => {
    if (currentMessage.trim() !== "") {
      // Émission du message vers le serveur
      socket.emit("sendMessage", {
        name: room,
        user: {
          id: profile.userId.toString(),
          username: profile.name,
          avatar: profile.avatar,
        },
        content: currentMessage,
      });

      // Réinitialisation du message actuel
      setCurrentMessage("");
    }
  };

  const enterRoom = (room) => {
    console.log("click on enter");
    socket.emit("joinRoom", room, profile.userId.toString());
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {room ? (
        <View style={styles.container}>
          <Header Title={room} logo={images.feuilleMarron} />
          <TouchableOpacity
            style={styles.returnBtn}
            onPress={() => setRoom("")}
          >
            <Image
              source={{
                uri: "https://icons.veryicon.com/png/o/miscellaneous/energy-system-icon/return-57.png",
              }}
              style={styles.return}
            />
          </TouchableOpacity>
          {/* Liste des messages */}
          {messages.length > 0 && (
            <FlatList
              data={messages}
              keyExtractor={(_, index) => index}
              renderItem={({ item }) => (
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: 16,
                    alignItems:
                      profile.userId.toString() === item.userId
                        ? "flex-end"
                        : "flex-start",
                  }}
                >
                  <View style={styles.messageView}>
                    <Text style={styles.username}>
                      {item.username}, le{" "}
                      {item.createdAt
                        .slice(0, 10)
                        .split("-")
                        .reverse()
                        .join("/")}{" "}
                      à {item.createdAt.slice(11, 19)}
                    </Text>
                    <Text
                      style={{
                        textAlign:
                          profile.userId.toString() === item.userId
                            ? "right"
                            : "left",
                        color: "#242424",
                      }}
                    >
                      {item.content}
                    </Text>
                  </View>
                </View>
              )}
            />
          )}
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
      ) : (
        <View style={styles.container}>
          {rooms && (
            <FlatList
              data={rooms}
              keyExtractor={(_, index) => index}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.room}
                  onPress={() => enterRoom(item.name)}
                >
                  <Image source={images.logo} style={styles.avatar} />
                  <Text>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
      )}
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
  messageView: {
    maxWidth: "75%",
    borderRadius: 40,
    padding: 8,
    color: COLORS.white,
    backgroundColor: "#e8e8e8",
    marginTop: 8,
    marginBottom: 8,
    textAlign: "center",
  },
  username: {
    fontSize: 10,
    color: "gray",
  },
  content: {
    textAlign: "right",
    color: "#242424",
  },
  inputContainer: {
    position: "absolute",
    bottom: 20,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
  room: {
    backgroundColor: COLORS.white,
    padding: 20,
    margin: 8,
    borderRadius: 16,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 16,
    marginRight: 16,
  },
  return: {
    width: 30,
    height: 30,
  },
  returnBtn: {
    position: "absolute",
    top: 24,
    right: 30,
  },
});

export default Chat;
