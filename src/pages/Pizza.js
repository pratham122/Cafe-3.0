import React from "react";
import {CardDataPizza} from "../pages/CardData";
import CardItem from "./CardItem";

function createCard(cardProps){
    return(<CardItem
    key={cardProps.id}
    imgURL={cardProps.imgURL}
    name={cardProps.name}
    price={cardProps.price}
     />);
}

function CardPizza(){
   return(      
   <div className="menu-card container-fluid">
            <div className="row">
              {CardDataPizza.map(createCard)}
            </div>
    </div>);
}

export default CardPizza;