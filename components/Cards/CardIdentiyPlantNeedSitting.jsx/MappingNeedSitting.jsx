import { View } from "react-native-web";
import DisplayNeedSitting from "./DisplayNeedSitting";
import { PlantNeedSitting } from "./CardNeedSitting";
import React, { useContext, useEffect, useState } from "react";
import { accountService } from "../../../app/_services/accountService";


// Bouclage sur les données reçues pour affichage


// map sur les données pour les afficher
const PlantNeedSit = () => {
    const [needSitting, setNeedSitting] = useState([])
    const [imagesRoutes, setImagesRoutes] = useState("")

    useEffect(() => {
        console.log('coucou')
        async function getData() {
            const datas = await GetNeedSitting()
            if (!datas.offers) return;
            setNeedSitting(datas.offers);
            setImagesRoutes(datas.imageRoute)
        }
        getData()
    }, [])
    console.log(needSitting)
    return (
        needSitting.map((needSit, index) => (
            <DisplayNeedSitting key={index} PlantNeedSitting={needSit} imagePlant={imagesRoutes} />
            
        ))
    );
}


// fontion qui ira chercher en BDD les tables nécessaires à la boucle pour affiché les messages
async function GetNeedSitting(){
    const res = await accountService.showAllOffers()
    return res.data
    
}


export default PlantNeedSit;
