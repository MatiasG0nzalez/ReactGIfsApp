import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const [images, setImges] = useState([]);

  //  Ejecuta una funcion en relacion a sus dependencias
  //  Si no se colocan dependencias se ejecuta cuando el componente es rendeerizado por primera vez

  useEffect(() => {
    getGifs(category).then((images) => setImges(images));
  }, [category]); //si la categoria cambia va volver a ejecutar este efecto

  return (
    <div>
      <h3> {category} </h3>
      <div className="card_container">
        {images.map((gifs) => {
          return <GifGridItem key={gifs.title} {...gifs} />;
        })}
      </div>

      <hr />
    </div>
  );
};
