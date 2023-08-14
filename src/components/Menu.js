import React from "react";
import MenuItems from "./MenuItems";
import MenuImages from "./MenuImagedata";
function Menu(){
    return(
    <section id="Menu">
        <div className="container-fluid">
            <div className="row">
               {MenuImages.map(MenuItems)}
            </div>
        </div>
    </section>);
}

export default Menu;