import { useState, useEffect } from "react";
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = (category) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    })


     
  //  Ejecuta una funcion en relacion a sus dependencias
  //  Si no se colocan dependencias se ejecuta cuando el componente es rendeerizado por primera vez
 //si la categoria cambia va volver a ejecutar este efecto
    useEffect( ( ) => {
      
        getGifs( category )
        .then( gifs =>{

            setState({
                data: gifs,
                loading: false
            })
            
        })
    
      
    }, [category])
    

    return state;
}
