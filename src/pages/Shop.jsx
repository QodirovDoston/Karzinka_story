import { useEffect, useState } from "react";
import { useSelector } from "react-redux"


const Shop = ()=>{
 const data = useSelector((state)=>state.shop.shop)
    console.log(data);
   

    return(
        <>
           {data.map((val, ind) => {
          return (
              <div key={ind} className="w-[346px] overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
                <figure>
                  <img src={val.img} alt="card image" className="aspect-video w-[400px] h-[260px] p-1" />
                </figure>
                <div className="p-6">
                  <header className="mb-4">
                    <h3 className=" w-[300px]  text-xl font-medium text-slate-700">{val.title}</h3>
                  <p className="w-[300px] ">{val.price}</p>
                  </header>
                    <p className="w-[300px] text-slate-400"> {val.about}</p>
                </div>
                
              </div>
          )
        })}

                 
        </>
    )
}
export default Shop