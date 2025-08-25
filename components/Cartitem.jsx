import React from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { remove } from "../Cartslice";

const Cartitem=({item,itemindex})=>{

    const dispatch = useDispatch();

    const removefromcart=()=>{
        dispatch(remove(item.id));
        toast.error("Item removed from Cart");
    }
    return(
        <div>
            <div className="flex border-b-2  mt-10 ml-5 gap-x-7" >
                <div className="h-[180px] mb-10">
                    <img src={item.image} className="h-full w-full "/>
                </div>
                <div className="flex flex-col w-xs gap-y-3">
                    <h1 className="text-gray-700 font-semibold text-lg text-left mt-1 ">{item.title}</h1>
                    <h1>{item.description.split(" ").slice(0, 15).join(" ") + "..."}</h1>
                    <div className="flex justify-between">
                        <p className="text-green-600 font-semibold items-center mt-5 w-full">${item.price}</p>
                        <div className="font-semibold mt-6 rounded-full w-6 h-6 flex justify-center items-center bg-red-300"
                        onClick={removefromcart}>
                            <FcDeleteDatabase />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cartitem; 
