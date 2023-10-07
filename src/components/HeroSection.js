import React from 'react';
import Main from "../assets/Slider-Main.jpg";
import Date from "../assets/Time-Icon.png";
import People from "../assets/People-Quantity.png";
import SearchIcon from "../assets/Search-Icon.png";
const HeroSection = () => {
    return (
        <>
          <div className="relative h-screen flex items-center text-start">
            {/* Background Image (Faded) */}
            <div className="absolute inset-0 h-full w-full bg-cover bg-center filter">
              <img
                src={Main}  // Replace with your image URL
                alt="Background"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Content (Text and Button) */}
            <div className="absolute inset-0 flex items-center justify-start p-4 md:p-8 md:ml-20">
              <div className="text-white">
                <h1 className="text-2xl md:text-6xl font-bold mb-2 md:mb-4 text-black">
                  Find <span className='text-red-500'>Banquet</span> Near By<br></br>at Best Prices
                </h1>
                <button className="bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-full text-lg md:text-xl font-semibold transition duration-300 ease-in-out">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className='w-full md:w-5/6 h-20 md:h-16 mb-10 md:mb-25 mx-auto items-center gap-1 border-2 rounded shadow-md justify-center flex self-center my-2'>
            <input
              placeholder='Search city name'
              className='bg-slate-100 p-2 md:p-3 my-2 text-sm md:text-base'
            />
            <div className='flex bg-slate-100 p-2 md:p-3 my-2 text-sm md:text-base'>
              <input placeholder='Search date' />
              <img src={Date} alt='dateicon' className='w-8 h-6 self-center ml-2' />
            </div>
            <div className='flex bg-slate-100 p-2 md:p-3 my-2 text-sm md:text-base'>
              <input placeholder='Search total people' />
              <img src={People} alt='peopleicon' className='w-8 h-6 self-center ml-2' />
            </div>
            <div className='bg-red-500 text-white flex self-center p-2 my-2'>
              <img src={SearchIcon} alt='icon' className='w-8 h-6 self-center ml-2' />
              <button className="text-sm md:text-base ml-2">
                Search
              </button>
            </div>
          </div>
        </>
      );
      
};

export default HeroSection;
