import React, { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";


export const GifGrid = ({ category }) => {

  const {data, loading} = useFetchGifs( category );


 

  return (
    <div>
      <h3
      className="text-center text-2xl bg-gray-200 my-3 text-blue-500" 
      > {category} </h3>
      
      <div

       className="flex justify-center align-center flex-wrap gap-6 p-3"

       >

        {
          loading? <p>Cargando...</p> : <></>
        }
        {data.map((gifs) => {
          return <GifGridItem key={gifs.id} {...gifs} />;
        })}
      </div>

      <hr />
    </div>
  );
};
