import React from "react";
// import Menu from "./components/Menu";
// import Carousel from "./components/Carousel";
import Header from "./components/Header";
import CardBurger from "./pages/Burger";
import CardLattes from "./pages/Lattes";
import Home from "./components/Home";
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import CardPizza from "./pages/Pizza";
import CardJacket from "./pages/Jacket";

const appRouter = createBrowserRouter([
   {
      path: "/",
      element: <div>
         <Outlet />
      </div>,
      children: [
         {
            path: "/",
            element: <Home />
         },
         {
            path: "/burgers",
            element: <CardBurger />
         },
         {
            path: "/lattes",
            element: <CardLattes />
         },
         {
            path: "/pizza",
            element: <CardPizza />
         },
         {
            path: "/shakes",
            element: <CardLattes />
         },
         {
            path: "/jackets",
            element: <CardJacket />
         },
         {
            path: "/extras",
            element: <CardLattes />
         },
         
      ]
   },
])

function App() {
   return (
      <div>
         <Header />
         <RouterProvider router={appRouter} />
      </div>
   );

}





export default App;