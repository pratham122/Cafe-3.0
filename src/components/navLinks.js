import  React  from "react";

function NavLink(props){
    return(<li className="nav-item">
          <a className="nav-link" href={props.navigate}>{props.item}</a>
    </li>);
} 

export default NavLink;