import React, { useEffect, useState } from "react";
import Spinner from "../../blogcontexts/Spinner"
import Products from "../components/Products";

const Home=()=>{
    const API_URL = "https://fakestoreapi.com/products";
    const [loading,setloading] = useState(false);
    //posts=items
    const [items,setitems] = useState([]);

    async function fetchproductdata(){
        setloading(true);
        try{
            const res = await fetch(API_URL);
            const data = await res.json();
            setitems(data);
            //console.log(data);
        }
        catch(error){
            console.log("Error aagaya hai");
            setitems([]);
        }
        setloading(false);
    }

    useEffect(()=>{
        fetchproductdata();
    },[])

    return(
        <div>
            {
                loading ? <Spinner/> : (
                    items.length > 0) ?
                    (<div className="grid xs:gid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto space-y-10 space-x-5 min-h-[80vh]">
                        {
                            items.map((item)=> (
                                <Products key={item.id} item={item}/>
                            ))
                        }
                    </div>
                    ) :
                    <div className="flex justify-center items-center">
                        <p>No Data Found</p>
                    </div>
            }
        </div>
    );
}
export default Home; 