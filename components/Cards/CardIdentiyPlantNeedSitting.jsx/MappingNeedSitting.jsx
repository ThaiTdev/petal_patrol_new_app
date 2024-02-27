import { View } from "react-native-web";
import DisplayNeedSitting from "./DisplayNeedSitting";
import { PlantNeedSitting } from "./CardNeedSitting";
import React, { useContext, useEffect, useState } from "react";
import { accountService } from "../../../app/_services/accountService";


// Bouclage sur les données reçues pour affichage


// map sur les données pour les afficher
const PlantNeedSit = () => {
    const [needSitting, setNeedSitting] = useState([])
    useEffect(() => {
        console.log('coucou')
        async function getData() {
            const datas = await GetNeedSitting()
            setNeedSitting(datas)
        }
        getData()
    }, [])
    console.log(needSitting)
    return (
        needSitting.map((needSit, index) => (
            <DisplayNeedSitting key={index} PlantNeedSitting={needSit} />
        ))
    );
}


// fontion qui ira chercher en BDD les tables nécessaires à la boucle pour affiché les messages
async function GetNeedSitting(){
    const res = await accountService.showAllOffers()
    return res.data.offers
    
}


export default PlantNeedSit;
