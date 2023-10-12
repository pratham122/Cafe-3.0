import  React  from "react";
import { Link } from "react-router-dom";
function NavLink(props){
    return(<li className="nav-item">
          <Link className="nav-link" to={props.navigate}>{props.item}</Link>
    </li>);
} 

export default NavLink;