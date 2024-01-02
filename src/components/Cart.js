import React, { useState } from "react";
import {useDispatchCart } from "./ContextReducer";

function Cart(props) {
    let dispatch=useDispatchCart();
    let index=props.index;
    const [count, setCount] = useState(props.qty);
    const [added, setAdded] = useState(false);
    function handleAddClick() {
        if (!added) {
            setAdded(true); // Mark item as added
        }
        setCount(count + 1);
    }
 
    function handleDecreaseClick() {
        if (count === 1) {
            setAdded(false);
        }
        setCount(count - 1);
    }
    return (
        <div className="card-body">
                                {/* <!-- Single item --> */}
                                <div className="row">
                                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                        {/* <!-- Image --> */}
                                        <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                            <img src={props.img}
                                                className="w-100" alt="" />

                                        </div>
                                        {/* <!-- Image --> */}
                                    </div>

                                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                        {/* <!-- Data --> */}
                                        <p><strong>{props.name}</strong></p>
                                        <button type="button" className="btn btn-danger btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                                            title="Remove item" onClick={()=>{dispatch({type:"REMOVE",index:index})}}>
                                            <i className="fas fa-trash"></i>
                                        </button>
                                        {/* <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                                            title="Move to the wish list">
                                            <i className="fas fa-heart"></i>
                                        </button> */}
                                        {/* <!-- Data --> */}
                                    </div>

                                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                        {/* <!-- Quantity --> */}
                                        <div className="d-flex mb-4" style={{ "max-width": "300px" }}>


                                            
                                                <div className="col-lg-10 col-md-8 col-sm-6 add-buttons">
                                                    <button onClick={handleAddClick} className="btn btn-outline-success qty-btnPlus">+</button>
                                                    <p className="qty-count">{count}</p>
                                                    <button onClick={handleDecreaseClick} className="btn btn-outline-success qty-btnMinus">-</button>
                                                </div>
                                            


                                        </div>
                                        {/* <!-- Quantity --> */}

                                        {/* <!-- Price --> */}
                                        <p className="text-start text-md-center">
                                            <strong>{props.price}</strong>
                                        </p>
                                        {/* <!-- Price --> */}
                                    </div>
                                </div>
                                {/* <!-- Single item --> */}

                                <hr className="my-4" />


                            </div>


    );
}

export default Cart;