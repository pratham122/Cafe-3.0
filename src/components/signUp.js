import React from "react";

function signUp(){
    return(
       <form>
        <input name="email" type="text" placeholder="Email"/>
        <input name="password" type="password" placeholder="Password"/>
        <input name="confirmPassword" type="password" placeholder="Confirm Password"/>
       </form> 
    );
};

export default signUp;

