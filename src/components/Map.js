import React from 'react';
import map from "../assets/Map.png";
import One from "../assets/Img.png";

const Map = () => {
  return (
    <div className="relative h-screen flex items-center text-start">
      <div className="absolute inset-0 h-full w-full bg-cover bg-center filter">
        <img
          src={map}
          alt="Background"
          className="h-3/4 w-full object-cover"
        />
      </div>
      
      {/* Left Side Div */}
      <div className="absolute inset-0 flex justify-start items-center p-8 my-18">
        <div className="text-black ml-16">
          <h1 className="text-2xl md:text-3xl font-bold">World's Fastest Growing Banquet Chain</h1>
          <p className='opacity-50'>More Destinations. More Ease. More Affordable</p>
          <div className='flex gap-12 mt-6 md:mt-10'>
            <div className="text-3xl font-bold text-red-500">
              <p className='text-black text-lg opacity-50'>800+</p>
              <p className='mt-1 md:mt-0'>Cities</p>
            </div>
            <div className="text-3xl font-bold text-red-500">
              <p className='text-black text-lg opacity-50'>43000+</p>
              <p className='mt-1 md:mt-0'>Exclusive Banquets</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Side Div */}
      <div className="absolute inset-0 flex justify-end items-center p-8 mb-24 md:mb-44">
        <img src={One} alt="Image" />
      </div>
    </div>
  );
}

export default Map;
