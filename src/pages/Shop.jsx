import { useSelector } from "react-redux"


const Shop = () => {
  const data = useSelector((state) => state.shop.shop)


  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <h1 className="text-[29px] py-10 font-bold">Your karzina</h1>
        <div className="lg:flex grid gap-5 ">
          {data.map((val, ind) => {
            return (
              <div key={ind} className="w-[946px] flex overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
                <figure>
                  <img src={val.img} alt="card image" className="aspect-video w-[400px] h-[260px] p-1" />
                </figure>
                <div>

                  <div className="p-6  ml-[10px] ">
                    <header className="mb-4">
                      <h3 className=" w-[300px]  text-xl font-medium text-slate-700">{val.title}</h3>
                      <p className="w-[300px] ">{val.price}</p>
                    </header>
                    <p className="w-[300px] text-slate-400"> {val.about}</p>
                  </div>
                  <div className="flex gap-2  " >
                    <button className="inline-flex items-center justify-center w-[20px] h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                      <span>+</span>
                    </button>
                    <button className="inline-flex items-center justify-center w-[150px] h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                      <span>Remove </span>
                    </button>
                    <button className="inline-flex items-center justify-center w-[20px] h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                      <span>-</span>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default Shop