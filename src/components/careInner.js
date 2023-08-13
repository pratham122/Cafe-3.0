import React from "react";

function careInner(props) {
    return (
        <div className="carousel-item active">
            <img src={require('{props.careImg}')} alt="Carousel-img-1" className="d-block w-100" />
        </div>
    );
}

export default careInner;

