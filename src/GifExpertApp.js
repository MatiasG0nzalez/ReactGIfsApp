import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Naruto']);

   /*  const handleAdd = () =>{
        setCategorie([...categories, 'Naruto2'])
    } */
    
  return (
    <>
      <h2
      className="text-center text-3xl p-4 bg-gray-400 text-white"
      >GifExpertApp</h2>
      <AddCategory setCategories = {setCategories}/>
      <hr />

    

      
        {categories.map(category => {
          return <GifGrid key={category} category={category}/>
        })}
      
    </>
  );
};
