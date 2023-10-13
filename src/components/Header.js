// import React, { useState } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../images/Bg1.jpg";

function Header() {
  return (
    <section className="title" style={{backgroundImage: `url(${backgroundImage})`,backgroundSize: "cover",backgroundRepeat: "no-repeat",position: "relative",}}>
      <div className="home">
        <div className="head-container">
          <h1 className="big-heading">It's Coffee Time</h1>
        </div>
  
        <div className="Login-button">
                    <Link to={"/login"}><button type="button" className="btn btn-light">Sign in</button></Link>
                    <Link to={"/createuser"}><button type="button" className="btn btn-light">Sign up</button></Link>
        </div>
        <div className="Search">
           <form className="d-flex">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
           </form>
         </div>
      </div>
    </section>
  );
}
  
export default Header;