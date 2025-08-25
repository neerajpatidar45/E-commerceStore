import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Cartitem from "../components/Cartitem";
import { Link } from "react-router-dom";

const Cart=()=>{

    const {cart} = useSelector((state)=> state);
    const [totalamount,settotalamount] = useState(0);

    useEffect(()=>{
        settotalamount(cart.reduce((acc,curr) => acc + curr.price ,0));
    },[cart])

    return(
        <div className="">
            {
                cart.length > 0 ?
                (<div className="flex justify-around h-[80vh]">
                    <div className="flex flex-col"> 
                        {
                            cart.map((item,index)=>{
                                return <Cartitem key={item.id} item={item} itemindex={index}/>
                            })
                        }
                    </div>
                    <div className="flex flex-col mt-10 ml-5 justify-between">
                        <div className="flex flex-col">
                            <div className="font-bold ">YOUR CART</div>
                            <div className="text-3xl text-green-500 font-bold">SUMMARY</div>
                            <p className="mt-2 font-semibold">
                                <span>Total Items: {cart.length}</span>
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-semibold items-center mt-5 w-full">Total Amount: <span className="font-extrabold">${totalamount.toFixed(2)}</span></p>
                            <button className="text-white border-2 bg-green-500 rounded-sm font-semibold text-[12px] p-1 px-3 w-full">
                                Checkout Now
                            </button>
                        </div>
                    </div>
                </div>) :
                (
                    <div className="flex flex-col justify-center items-center gap-2 h-screen">
                        <h1 className="text-3xl">Your Cart is Empty</h1>
                        <Link to="/">
                            <button className="text-white border-2 bg-green-500 rounded-xl font-semibold text-[12px] p-3 px-5 w-full">
                                Shop Now
                            </button>
                        </Link>
                    </div>
                )
            }
        </div>
    );
}
export default Cart; 