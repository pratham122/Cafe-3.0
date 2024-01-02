import React from "react";
import {CardDataPizza} from "../pages/CardData";
import CardItem from "./CardItem";
import Navbar from "../components/navbar";

function createCard(cardProps){
  return(<CardItem
 foodItem={cardProps}

   />);
}

function CardPizza(){
   return(
    <div>   
    <Navbar />  
   <div className="menu-card container-fluid">
            <div className="row">
              {CardDataPizza.map(createCard)}
            </div>
    </div>
    </div> );
}

export default CardPizza;