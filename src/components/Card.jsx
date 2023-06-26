/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import axios from "axios"

const Card = () => {
  const [img, setimg] = useState([]);
  const [title, setAnswer] = useState([])
  const [about, setAbout] = useState([]);
  const [price, setPrise] = useState([]);
  let obj = {
    img: img,
    title: title,
    price: price,
    about: about
  }

  const getData = () => {
    axios.get('https://rasm-uchun.onrender.com/data', obj)
      .then((data) => {
        setAnswer(data.data),
          setPrise(data.data),
          setAbout(data.data),
          setimg(data.data)
      })
  }

  useEffect(() => {
    getData()
  }, [])
  const handleClick= ()=>{

  } 


  return (
    <div className="container  mx-auto ">
      <h1 className="text-[35px] font-bold mt-7">Product</h1>
      <div className="flex flex-wrap gap-10 mt-[14px]">
        {title.map((val, ind) => {
          return (
            <>
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
                <div className="flex justify-end p-6 pt-0">
                  <button onClick={() => handleClick()} className="inline-flex items-center justify-center w-full h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                    <span>Order now!</span>
                  </button>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Card;

