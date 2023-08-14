import React from "react";

function CardItem(props){
    return(     
    <div className="menu-items col-lg-4 col-md-6">
        <div className="card">
            <img src={props.imgURL} className="card-img-top" alt="..." height="200px" width="735px" />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p>{props.price} Rs</p>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="/" className="add-btn btn btn-success">Add Item</a>
                </div>
            </div>
    </div>
    );
}

export default CardItem;