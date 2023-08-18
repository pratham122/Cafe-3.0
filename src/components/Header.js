import React from "react";
// import Navbar from "./navbar";
import backgroundImage from "../images/Bg1.jpg"; // Update the path

function Header() {
   return (
      <section className="title" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize:"cover", backgroundRepeat:"no-repeat",position:"relative" }}>
         {/* <Navbar /> */}
         <div className="home">
            <div className="head-container">
               <h1 className="big-heading">It's Coffee Time</h1>
            </div>
            <div className="Login-button">
               <button type="button" className="btn btn-light">Sign in</button>
               <button type="button" className="btn btn-light">Sign up</button>
            </div>
         </div>
      </section>
   );
}

export default Header;



