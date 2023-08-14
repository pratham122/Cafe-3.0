import React from "react";
// import careInner from "./careInner";
// import data from "./careInnerData";

function Carousel() {
    return(<div className="container ">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="1800"
            data-pausa="hover">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                {/* {data.map(careInner)} */}

                <div className="carousel-item active">
                    <img src={require("../images/Carousel1.png")} alt="Carousel-img-1" className="d-block w-100" />
                </div>

                <div className="carousel-item">
                    <img src={require("../images/Carousel2.png")} alt="Carousel-img-2" className="d-block w-100" />
                </div>
                <div className="carousel-item">
                    <img src={require("../images/Carousel3.jpg")} alt="Carousel-img-3" className="d-block w-100" />
                </div>

            </div>

            <a className="controls carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>

            <a className="controls carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>);
}

export default Carousel;