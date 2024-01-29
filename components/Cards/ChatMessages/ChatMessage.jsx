import { View } from "react-native-web";
import DisplayMessage from "./DisplayMessage"
import { Message } from "./Message";
import React, { useContext, useState } from "react";

// Bouclage sur les données reçues pour affichage


// map sur les données pour les afficher
const ChatMessages = () => {
    const messages = GetMessages();

    return (
        messages.map((message, index) => (
            <DisplayMessage key={index} Message={message} />
        ))
    );
}

// fontion qui ira chercher en BDD les tables nécessaires à la boucle pour affiché les messages
function GetMessages(){
    return [
        new Message("mon message 1", "12/01/2024", "Roxane","../../assets/images/emilie_joli.jpg"),
        new Message("Je suis passé aujourd'hui", "12/01/2024", "Benoit", "htjpgtps://xsgames.co/randomusers/assets/avatars/male/4.")
    ];
}


export default ChatMessages;
