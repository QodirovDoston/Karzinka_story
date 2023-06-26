import { useEffect } from "react";
import { useState } from "react"

const FetchHooks = (url)=>{
    const [datas,setData] = useState(null);
    useEffect(()=>{
        fetch(url).then(val=>val.json())
        .then(data=>setData(data))
        .catch(err=>console.log(err))
    },[])
    return [datas] 
}

export default FetchHooks