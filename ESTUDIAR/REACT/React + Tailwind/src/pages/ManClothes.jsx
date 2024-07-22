import React, { useEffect, useState } from "react";
import { fetchManClothes } from "../Api/fetchManClothes";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";


const ManClothes = ()=>{
const { categoryName } = useParams();
  const [manClothes, setManClothes] = useState([])

  useEffect(()=>{
    const fetchData = async()=>{
      const data = await fetchManClothes(categoryName);
      setManClothes(data)
    }
    fetchData()
  },[categoryName])

    return (
      <div className="mb-28">
        {manClothes.length ?(

      <ul className="grid sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto gap-4 lg:grid-cols-4 mt-4 ">
      {manClothes.map((item, index) => (
          <li key={item.id} className="group ">
            <article className="bg-white rounded overflow-hidden flex flex-col group   hover:transition-transform group-hover:border-1 group-hover:border-[#b997ec08] group-hover:shadow-2xl group-hover:shadow-[#b997ec] group-hover:scale-105 group-hover:bg-[#ffffff6b] duration-300 group-hover:rounded-xl ">
              <div className="h-52 mt-5">
                <img
                  className="h-full w-full  object-contain object-center mx-auto group-hover:scale-90 duration-500"
                  src={item.image}
                  alt=""
                />
              </div>
              <div class="p-5 space-y-3 flex-1 ">
                <h2>{item.category}</h2>
                <h3 class="text-sm font-semibold text-sky-500">{item.title}</h3>
                <h2 class="text-xl font-semibold text-slate-800 leading-tight">
                  $ {item.price}
                </h2>
              {/*   <p className="text-[12px] ">{item.description}</p> */}
              </div>
            </article>
          </li>
      )
    )}
    </ul>
        ):(
          <Loading/>
        )}
    </div>
    );
}

export default ManClothes