import React from "react";
import { Routes,Route } from "react-router-dom";
import Navbar from "./redux/components/Navbar";
import Home from "./redux/pages/Home";
import Cart from "./redux/pages/Cart";

const Shoppingcard=()=>{
    return(
        <div>
            <div className="bg-slate-900">
                <Navbar/>
            </div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
            </Routes>
        </div>
    );
}
export default Shoppingcard; 


//const API_URL = "https://fakestoreapi.com/products"; 