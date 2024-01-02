import React from "react";
import {CardDataBurger} from "../pages/CardData";
import CardItem from "./CardItem";
import Navbar from "../components/navbar";

function createCard(cardProps){
  return(<CardItem
 foodItem={cardProps}

   />);
}
function CardBurger(){
   
   return(  
    <div> 
     <Navbar />     
      <div className="menu-card container-fluid">
            <div className="row">
              {CardDataBurger.map(createCard)}
            </div>
      </div>
   </div>);
}

export default CardBurger;