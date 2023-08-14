import React from "react";
import Menu from "./components/Menu";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardBurger from "../pages/Burger";

function App(){
    return(<div>
   <Header />
   <Menu />
   <Router>
         <Switch>
            <Route path="/menu-item/:itemId" component={CardBurger} />
            {/* Other routes */}
         </Switch>
      </Router>
   <Carousel />


    </div>);

}


export default App;