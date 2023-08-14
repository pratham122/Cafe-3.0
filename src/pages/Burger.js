import React from "react";
import {CardDataBurger} from "../pages/CardData";
import CardItem from "./CardItem";

function createCard(cardProps){
    return(<CardItem
    key={cardProps.id}
    imgURL={cardProps.imgURL}
    name={cardProps.name}
    price={cardProps.price}
     />);
}
function CardBurger(){
   
   return(      
   <div className="menu-card container-fluid">
            <div className="row">
              {CardDataBurger.map(createCard)}
            </div>
    </div>);
}

export default CardBurger;