import axios from "axios"
import { useEffect, useState } from "react"


function Table() {
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
    const getAllData = () => {
        axios.get("https://rasm-uchun.onrender.com/data", obj)
            .then((data) => {
                setAnswer(data?.data),
                    setPrise(data?.data),
                    setAbout(data?.data),
                    setimg(data?.data)
            })
    }
    const delete_func = (id) => {
        axios.delete(`https://rasm-uchun.onrender.com/data/${id}`)
            .then((res) => {
                alert(res.statusText)
                setPrise(name.filter((el) => el.id !== id))
            })
    }
    useEffect(() => {
        getAllData()
    }, [])


    return (
        <div className="container mx-auto py-[10px] px-[30px] overflow-x-auto">
            <table className="w-full text-left border border-collapse rounded sm:border-separate border-slate-200" >
                <tbody>
                    <tr>
                        <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">ID</th>
                        <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">img</th>
                        <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Title</th>
                        <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Price</th>
                        <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Description</th>
                        <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Actions</th>

                    </tr>
                    {title.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td className="h-12 w-[20px] px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{value.id}</td>
                                <td className="h-12 w-[200px] px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                                    <img className="w-[130px] h-[80px]" src={value.img} alt="" />
                                </td>
                                <td className="h-12 w-[230px] px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{value.title}</td>
                                <td className="h-12 w-[300px] px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{value.price}</td>
                                <td className="h-12 w-[200px] px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{value.about}</td>
                                <td className="pl-10  h-12 w-[300px] px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                                    <button onClick={() => delete_func(value.id)} className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide transition duration-300 border rounded shadow-lg focus-visible:outline-none whitespace-nowrap border-emerald-500 text-emerald-500 shadow-emerald-200 hover:border-emerald-600 hover:text-emerald-600 focus:border-emerald-700 focus:text-emerald-700 hover:shadow-md hover:shadow-emerald-200 focus:shadow-md focus:shadow-emerald-200 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:text-emerald-300 disabled:shadow-none">
                                        <span>Delete</span>
                                    </button>
                                    <button onClick={() => delete_func(value.id)} className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide transition duration-300 border rounded shadow-lg focus-visible:outline-none whitespace-nowrap border-emerald-500 text-emerald-500 shadow-emerald-200 hover:border-emerald-600 hover:text-emerald-600 focus:border-emerald-700 focus:text-emerald-700 hover:shadow-md hover:shadow-emerald-200 focus:shadow-md focus:shadow-emerald-200 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:text-emerald-300 disabled:shadow-none">
                                        <span> Edite</span>
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table
