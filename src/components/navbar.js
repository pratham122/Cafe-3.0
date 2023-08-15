import React from "react";
import NavLink from "./navLinks";
import navbarComponents from "./navitems";
// import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src={require("../images/logo3.png")} alt="My Logo" className="logo" />
            <a className="navbar-brand" href="/">Cafe</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                    {navbarComponents.map(NavLink)}
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;
