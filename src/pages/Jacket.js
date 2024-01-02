import React from "react";
import { CardDataJacket } from "../pages/CardData";
import CardItem from "./CardItem";
import Navbar from "../components/navbar";

function createCard(cardProps) {
    return ( < CardItem foodItem = { cardProps }

        />);
    }

    function CardJacket() {
        return ( <
            div >
            <
            Navbar / >
            <
            div className = "menu-card container-fluid" >
            <
            div className = "row" > { CardDataJacket.map(createCard) } < /div> <
            /div> <
            /div>);
        }

        export default CardJacket;