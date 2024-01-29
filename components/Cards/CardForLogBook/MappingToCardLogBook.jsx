import { View } from "react-native-web";
import { CardLogBook } from "./CardLogBook";
import React, { useContext, useState } from "react";
import DisplayCardLogBook from "./DisplayCardLogBook";

// Bouclage sur les données reçu pour affichage


// map sur les données pour les afficher
const LogBook = () => {
    const books = GetLogBook();

    return (
        books.map((book, index) =>(
            <DisplayCardLogBook key={index} CardLogBook={book} />
        ))
    );
}
// fontion qui ira chercher en BDD les tables nécessaires à la boucle pour affiché les messages
function GetLogBook(){
    return [
        new CardLogBook("Ajouté le 12/08/23", "Journal de bord","Premier jour de garde l’aloe se plaît bien près de la fenêtre. Arrosage ok !" ),
        new CardLogBook("Ajoutée le  13/08/2024", "Journal de bord", "L’aloe semble apprécier la température ambiante.")
    ];
}


export default LogBook;