import React, { createContext, useContext, useReducer } from "react";
const CartStateContext=createContext();
const CartDispatchContext=createContext();
const reducer=(state,action)=>{
   switch(action.type){
     case "ADD":
        return [...state,{id:action.id,name:action.name,qty:action.qty,price:action.price,img:action.img}]
     case "REMOVE":
        let newArr=[...state];
        newArr.splice(action.index,1);
        return newArr
        case "DECREASE":
            if (state[action.index].qty === 1) {
                // If the quantity is 1, remove the item from the cart
                return state.filter((item, index) => index !== action.index);
            } else {
                // Decrease the quantity of the item
                return state.map((item, index) => {
                    if (index === action.index) {
                        return { ...item, qty: item.qty - 1 };
                    }
                    return item;
                });
            }
        // case "INCREASE":
        //     // Increase the quantity of the item
        //     return state.map((item, index) => {
        //         if (index === action.index) {
        //             return { ...item, qty: item.qty + 1 };
        //         }
        //         return item;
        //     });
        default:
            console.log("Error in Reducer")
   }
}
export const CartProvider=({children})=>{
    const[state,dispatch]=useReducer(reducer,[])
    return(
       <CartDispatchContext.Provider value={dispatch} >
        <CartStateContext.Provider value={state}>
            {children}
        </CartStateContext.Provider>
       </CartDispatchContext.Provider>
    )
}

export const useCart=()=>useContext(CartStateContext);
export const useDispatchCart=()=>useContext(CartDispatchContext);