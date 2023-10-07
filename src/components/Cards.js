import React from 'react';
import Heart from "../assets/Heart-Icon.png";
import Comment from "../assets/Comment.png";

// Define an array with data for each card, including image URLs
const cardData = [
  {
    title: 'Indian Hotel 1',
    description: 'Main Dish',
    details: 'Spicy combination of beef and tomato sauces',
    image: require("../assets/Banquet-1.png") 
  },
  {
    title: 'Indian Hotel 2',
    description: 'Main Dish',
    details: 'Spicy combination of beef and tomato sauces',
    image: require("../assets/Banquet-2.png")
  },
  {
    title: 'Indian Hotel 3',
    description: 'Main Dish',
    details: 'Spicy combination of beef and tomato sauces',
    image: require("../assets/Banquet-3.png")
  },
  {
    title: 'Indian Hotel 4',
    description: 'Main Dish',
    details: 'Spicy combination of beef and tomato sauces',
    image: require("../assets/Banquet-4.png")
  },
  {
    title: 'Indian Hotel 5',
    description: 'Main Dish',
    details: 'Spicy combination of beef and tomato sauces',
    image: require("../assets/Banquet-5.png")
  },
  {
    title: 'Indian Hotel 6',
    description: 'Main Dish',
    details: 'Spicy combination of beef and tomato sauces',
    image: require("../assets/Banquet-6.png")
  },
];

const Cards = () => {
    return (
      <div className="container mx-auto py-11 my-11">
        <h1 className="text-4xl font-bold mb-4 text-center">Our Top Banquets</h1>
        <p className="text-center">Make Your Function More Impressive with Banquet Booking</p>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-6 mx-4 sm:mx-8 lg:mx-11 px-4 sm:px-8 lg:px-11">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-slate-200 rounded-lg shadow-md flex flex-col h-96"
            >
              <img
                src={card.image} // Use the image URL from the card data
                alt="hotel"
                className="w-full h-60 object-cover"
              />
              <div className="w-12 h-12 inline-block ml-6 mt-6">
                <img src={Heart} alt="heart" className="w-12" />
                <img src={Comment} alt="comment" className="w-12" />
              </div>
  
              <div className="p-4 mt-48 z-auto absolute sm:w-auto sm:h-auto lg:w-64 lg:h-48 flex-1 text-start flex flex-col justify-end self-end bg-white">
                <p className="text-sm inline-block self-end">posted by Kamal Kishore</p>
                <div className="my-3">
                  <h2 className="text-xl font-semibold">{card.title}</h2>
                  <p className="text-pink-400 text-sm">{card.description}</p>
                  <p className="text-gray-600 text-sm mt-2">{card.details}</p>
                </div>
                <a href="#" className="text-blue-500 mt-2">
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-red-500 hover:bg-red-600 mt-8 sm:mt-12 text-white py-4 px-8 sm:px-11 rounded-full text-lg md:text-2xl font-semibold transition duration-300 ease-in-out mx-auto block">
          Find Out More
        </button>
        <hr className="mt-8 sm:mt-12 mx-auto w-5/6 sm:w-5/6 bg-black" />
      </div>
    );
  };
  
  export default Cards;
  