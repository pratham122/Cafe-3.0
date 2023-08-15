import React from "react";
import Menu from "./components/Menu";
// import Carousel from "./components/Carousel";
import Header from "./components/Header";
import CardBurger from "./pages/Burger";
import Home from "./components/Home";
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';






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
            path: "/Burger",
            element: <CardBurger />
         }
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


// const App = () => {
//    return (<div>
//       <Header />
//       {/* <RouterProvider router={appRouter} /> */}



//    </div>);

// }



export default App;