import React from "react";
import {CardDataLattes} from "../pages/CardData";
import CardItem from "./CardItem";
import Navbar from "../components/navbar";


function createCard(cardProps){
    return(<CardItem
   foodItem={cardProps}
  
     />);
}

function CardLattes(){
   return(  
    <div> 
      <Navbar />   
       <div className="menu-card container-fluid">
            <div className="row">
              {CardDataLattes.map(createCard)}
            </div>
      </div>
    </div>);
}

export default CardLattes;