import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const { cart } = useSelector((state)=> state);
    return (
        <div className="">
            <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
                <NavLink to="/">
                    <div>
                        <img className="ml-5 h-14"
                            src="src\redux\components\ecomzylogo.png" />
                    </div>
                </NavLink>
                <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
                    <NavLink to="/">
                        <p>Home</p>
                    </NavLink>
                    <div className="relative">
                        <NavLink to="/cart">
                            <FaShoppingCart className="text-2xl" />
                            {
                                cart.length > 0 &&
                                <span className="absolute top-1 right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>
                            }
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar; 