import React from "react";

function MenuItems(props){
   return( <div className="col-lg-2 col-md-4 col-sm-6">
                    <a href="latte.html"> <img src={props.ImgURL}alt="lattes" height="150rem" width="150rem" className="menu-image" /></a>
                    <h5 className="dish">{props.name}</h5>
                </div>);
}

export default MenuItems;