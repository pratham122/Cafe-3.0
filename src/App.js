import React from "react";
// import Menu from "./components/Menu";
// import Carousel from "./components/Carousel";
// import Navbar from "./components/navbar";
// import Header from "./components/Header";
import CardBurger from "./pages/Burger";
import CardLattes from "./pages/Lattes";
import Home from "./components/Home";
// import { RouterProvider, createBrowserRouter, Outlet, Route } from 'react-router-dom';
import{BrowserRouter as Router, Routes, Route}from 'react-router-dom'
import CardPizza from "./pages/Pizza";
import CardJacket from "./pages/Jacket";
// import Footer from "./components/Footer";
import SignIn from "./components/signIn";
import Menu from "./components/Menu";



function App() {
   return (
      
      <Router>
       <div>
          <Routes>
             <Route exact path="/" element={<Home />} />
             <Route exact path="/Menu" element={<Menu />} />
             <Route exact path="/login" element={<SignIn />} />
             <Route exact path="/lattes" element={<CardLattes />} />
             {/* <Route exact path="/shakes" element={<Card />} /> */}
             <Route exact path="/burgers" element={<CardBurger />} />
             <Route exact path="/jackets" element={<CardJacket />} />
             <Route exact path="/pizza" element={<CardPizza />} />
             {/* <Route exact path="/lattes" element={<Card />} /> */}
          </Routes>
       </div>
      </Router>
   
   );

}





export default App;