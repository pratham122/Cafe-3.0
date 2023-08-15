import React, { useState } from "react";

function CardItem(props) {
   const [count, setCount] = useState(0);
   const [added, setAdded] = useState(false); // Track whether the item is added

   function handleAddClick() {
      if (!added) {
         setAdded(true); // Mark item as added
      }
      setCount(count + 1);
   }

   function handleDecreaseClick() {
      if(count===1){setAdded(false);}
      setCount(count - 1);
   }

   return (
      <div className="menu-items col-lg-4 col-md-6">
         <div className="card">
            <img src={props.imgURL} className="card-img-top" alt="..." height="200px" width="735px" />
            <div className="card-body">
               <h5 className="card-title">{props.name}</h5>
               <p>{props.price} Rs</p>
               <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
               {added ? (
              <div className="row">
                <div className="col-lg-10 col-md-8 col-sm-6 add-buttons"> 
                    <button onClick={handleAddClick} className="btn btn-outline-success qty-btnPlus">+</button>
                     <p className="qty-count">{count}</p>
                    <button onClick={handleDecreaseClick} className="btn btn-outline-success qty-btnMinus">-</button>
                </div>
              </div>
               ) : (
                  <button onClick={handleAddClick} className="btn btn-successbtn btn-outline-success add-btn">Add Item</button>
               )}
            </div>
         </div>
      </div>
   );
}

export default CardItem;