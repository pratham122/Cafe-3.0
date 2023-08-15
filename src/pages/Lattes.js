import React from "react";
import {CardDataLattes} from "../pages/CardData";
import CardItem from "./CardItem";

function createCard(cardProps){
    return(<CardItem
    key={cardProps.id}
    imgURL={cardProps.imgURL}
    name={cardProps.name}
    price={cardProps.price}
     />);
}

function CardLattes(){
   return(      
   <div className="menu-card container-fluid">
            <div className="row">
              {CardDataLattes.map(createCard)}
            </div>
    </div>);
}

export default CardLattes;