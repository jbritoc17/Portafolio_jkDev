import React, { useState, useEffect } from "react";
import { fetchElectronics } from "../Api/fetchElectronics";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

const Electronics = () => {
  /* const { categoryname } = useParams(); */
  const [electronic, setElectronic] = useState([]);

  useEffect(() => {
    const getElectronic = async () => {
      const data = await fetchElectronics();
      console.log(data);
      setElectronic(data);
    };
    getElectronic();
  }, []);

  return (
    <div className="mb-28">
      {electronic.length ? (
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto gap-4 lg:grid-cols-4 mt-4  ">
          {electronic.map((electro) => (
            <li key={electro.id} className="group">
              <article className="bg-white rounded overflow-hidden flex flex-col group   hover:transition-transform group-hover:border-1 group-hover:border-[#b997ec08] group-hover:shadow-2xl group-hover:shadow-[#b997ec] group-hover:scale-105 group-hover:bg-[#ffffff6b] duration-300 group-hover:rounded-xl">
                <div className="h-52 mt-5">
                  <img
                    className="h-full w-full  object-contain object-center mx-auto group-hover:scale-90 duration-500"
                    src={electro.image}
                    alt=""
                  />
                </div>
                <div class="p-5 space-y-3 flex-1 ">
                  <h2>{electro.category}</h2>
                  <h3 class="text-sm font-semibold text-sky-500">
                    {electro.title}
                  </h3>
                  <h2 class="text-xl font-semibold text-slate-800 leading-tight">
                    $ {electro.price}
                  </h2>
                  {/* <p className="text-[12px] hidden sm:block group-hover:block ">{electro.description}</p> */}
                </div>
              </article>
            </li>
          ))}
        </ul>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Electronics;
