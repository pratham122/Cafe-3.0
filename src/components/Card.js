import React from "react";
import {CardDataBurger} from "../components/CardData";
import CardItem from "./CardItem";

function createCard(cardProps){
    return(<CardItem
    key={cardProps.id}
    imgURL={cardProps.imgURL}
    name={cardProps.name}
    price={cardProps.price}
     />);
}
function Card(){
   
   return(      
   <div className="menu-card container-fluid">
            <div className="row">
              {CardDataBurger.map(createCard)}
            </div>
    </div>);
}

export default Card;