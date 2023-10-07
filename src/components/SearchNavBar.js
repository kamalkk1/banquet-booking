import React from 'react';

const SearchNavBar = () => {
  // Define city options
  const cityOptions = ['Bangalore', 'New Delhi', 'Chennai', 'Gurgaon', 'Hyderabad', 'Noida', 'Mumbai', 'Kolkata'];

  return (
    <div className="p-4 ml-4 md:ml-16 flex items-center justify-between">
      {/* Dropdowns (Hidden on Small and Medium Screens) */}
      <div className="hidden md:flex space-x-4">
        {cityOptions.map((city, index) => (
          <div key={index} className="relative">
            <select
              className="bg-white p-2 focus:outline-none"
            >
              <option value={city}>{city}</option>
              <option value="Hotel A">Hotel A</option>
              <option value="Hotel B">Hotel B</option>
              <option value="Hotel C">Hotel C</option>
            </select>
          </div>
        ))}
      </div>
  
      {/* Search Input (Full Width on Small and Medium Screens) */}
      <div className="flex items-center space-x-2 bg-white rounded-full p-2 w-full md:w-auto">
        <input
          type="text"
          className="px-2 bg-transparent w-full focus:outline-none border rounded-md border-amber-400"
          placeholder="Search Cities..."
        />
        <button className="text-white bg-yellow-500 p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
  
};

export default SearchNavBar;
