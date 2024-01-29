import { View } from "react-native-web";
import DisplayNeedSitting from "./DisplayNeedSitting";
import { PlantNeedSitting } from "./CardNeedSitting";
import React, { useContext, useState } from "react";


// Bouclage sur les données reçues pour affichage


// map sur les données pour les afficher
const PlantNeedSit = () => {
    const needSitting = GetNeedSitting();

    return (
        needSitting.map((needSit, index) => (
            <DisplayNeedSitting key={index} PlantNeedSitting={needSit} />
        ))
    );
}

// fontion qui ira chercher en BDD les tables nécessaires à la boucle pour affiché les messages
function GetNeedSitting(){
    return [
        new PlantNeedSitting("Tagada Fraisia", "J'ai besoin d'amour", "Du 04/09 au 10/10","Publié le 25/08/2024"),
        new PlantNeedSitting("Tagada Fraisia", "J'ai besoin d'amour", "Du 12/07 au 10/05","Publié le 25/03/2024"),
        
    ];
}


export default PlantNeedSit;
