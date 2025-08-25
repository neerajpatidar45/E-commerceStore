import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { add, remove } from "../slices/Cartslice";

const Products = ({ item }) => {
    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();

    const addtocart = () => {
        dispatch(add(item));
        toast.success("item added to Cart");
    }
    const removefromcart = () => {
        dispatch(remove(item.id));
        toast.error("item removed from Cart");
    }

    //console.log("i am in products");

    return (
        <div className="flex flex-col items-center justify-between 
        hover:scale-110 transition duration-300 ease-in gap-3 mt-10 ml-5 rounded-xl outline">
            <div className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
                <p>{item.title}</p>
            </div>
            <div className="w-40 text-gray-400 font-normal text-[10px] text-left">
                <p>{item.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
            </div>
            <div className="h-[180px]">
                <img src={item.image} className="h-full w-full " />
            </div>
            <div className="flex justify-center gap-12">
                <div className="mb-5">
                    <p className="text-green-600 font-semibold items-center mt-5 w-full">${item.price}</p>
                </div>
                {
                    cart.some((p) => p.id == item.id) ?
                        (<button className="text-gray-700 border-2 boder-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase 
                            hover:bg-gray-700 hover:text-white transition duration-300 ease-in mb-2"
                        onClick={removefromcart}>
                            Remove Item
                        </button>) :
                        (<button className="text-gray-700 border-2 boder-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase 
                            hover:bg-gray-700 hover:text-white transition duration-300 ease-in mb-2" 
                        onClick={addtocart}>
                            Add to Cart
                        </button>)
                }
            </div>
        </div>
    );
}
export default Products; 