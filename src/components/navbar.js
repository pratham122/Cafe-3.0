import React from "react";

function Nav(props) {
    return (
        <div classNameName="navbar">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Menu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Offers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Cart</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About us</a>
                            </li>
                        </ul>

                    </div>
                </nav>

                
            </div>
        </div>
        
    );
}

export default Nav;
