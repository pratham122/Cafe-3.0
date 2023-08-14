import React from "react";
import { Link } from "react-router-dom";

function MenuItems(props) {
   return (
      <div className="col-lg-2 col-md-4 col-sm-6">
         <Link to={props.navigate}>
            <img src={props.ImgURL} alt={props.name} height="150rem" width="150rem" className="menu-image" />
         </Link>
         <h5 className="dish">{props.name}</h5>
      </div>
   );
}

export default MenuItems;
