import React from "react";

function Footer(){
    return(<section id="footer">
        <div className="rowf row">
            <div className="colf col-lg-2">
                <img src={require('../images/logo3.png')} alt="" />
            </div>

            <div className="colf col-lg-3">
                <h2 className="h2f">About us</h2>
                <ul className="list">
                    Team
                </ul>
                <ul className="list">
                    Project
                </ul>

            </div>

            <div className="colf col-lg-3">
                <h2 className="h2f">Facilities</h2>
                <ul className="list">
                    Pleasant Atmosphere
                </ul>
                <ul className="list">
                    Wifi
                </ul>
                <ul className="list">
                    Wireless Charging
                </ul>
                <ul className="list">
                    Hygiene
                </ul>
            </div>

            <div className="colf col-lg-3">
                <h2 className="h2f">Details</h2>
                <ul className="list">
                    Location
                </ul>
                <ul className="list">
                    ABCD
                </ul>
            </div>
        </div>
    </section>);
}

export default Footer;