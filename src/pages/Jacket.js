import React from "react";
import {CardDataJacket} from "../pages/CardData";
import CardItem from "./CardItem";

function createCard(cardProps){
    return(<CardItem
    key={cardProps.id}
    imgURL={cardProps.imgURL}
    name={cardProps.name}
    price={cardProps.price}
     />);
}

function CardJacket(){
   return(      
   <div className="menu-card container-fluid">
            <div className="row">
              {CardDataJacket.map(createCard)}
            </div>
    </div>);
}

export default CardJacket;