import React from "react";

export const GifGridItem = ({ title, url }) => {
  return (

    <div
     className=" md:w-[35vw] md:h-[35vh] w-full h-{40vh}  border border-black flex flex-col overflow-hidden rounded-xl bg-gray-700 text-white hover:bg-gray-500 hover:scale-[1.05]"
     >

      <img 
      src={url} 
      alt={title}
      className=" w-full h-4/5  overflow-hidden object-cover"
      />

      <p 
      className="w-full h-1/5 text-center pt-4"
      >
        {title}

      </p>
    </div>
  );
};
