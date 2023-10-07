import React from 'react';
import BanquetFind from "../assets/Find-Banquet-1.png";
import BanquetFind2 from "../assets/Enjoy-Your-Moment-1.png";
import BanquetFind3 from "../assets/Booking-Your-Space-2.png";
import Find1 from "../assets/Find-Banquet-Icon.png";
import Find2 from "../assets/Bookiing-Your-Space-icon.png";
import Find3 from "../assets/Enjoy-your-moments-icon.png";

const Steps = () => {
  return (
    <div className='my-12'>
      <h1 className='text-4xl text-center mt-16 mb-8 md:mb-16'>
        Simple Steps
      </h1>
      <div className="flex flex-col gap-9 mx-auto w-3/4">
        {/** Step 1 */}
        <div className='border rounded flex flex-col-reverse md:flex-row md:h-96'>
        <img src={BanquetFind} alt='find' className='w-full h-96 md:w-1/2 object-cover' />
          <div className='m-6 md:m-16 text-start text-2xl md:w-1/2 gap-5 flex flex-col'>
            <img src={Find1} alt='find icon' className='w-20 h-20 md:w-24 md:h-24' />
            <h2 className='text-4xl'>Find Banquets</h2>
            <p className='opacity-50 mt-3'>Discover custom for your home or batch formulas for restaurants and commercials</p>
          </div>
         
        </div>

        {/** Step 2 */}
        <div className='border rounded flex flex-col-reverse md:flex-row md:h-96'>
          <div className='m-6 md:m-16 text-start text-2xl md:w-1/2 gap-5 flex flex-col'>
            <img src={Find2} alt='find icon' className='w-20 h-20 md:w-24 md:h-24' />
            <h3 className='text-4xl'>Booking Your Space</h3>
            <p className='opacity-50 mt-3'>Discover custom for your home or batch formulas for restaurants and commercials</p>
          </div>
          <img src={BanquetFind3} alt='find' className='w-full h-96 md:w-1/2 object-cover' />
        </div>

        {/** Step 3 */}
        <div className='border rounded flex flex-col-reverse md:flex-row md:h-96'>
        <img src={BanquetFind2} alt='find' className='w-full h-96 md:w-1/2 object-cover' />
          <div className='m-6 md:m-16 text-start text-2xl md:w-1/2 gap-5 flex flex-col'>
            <img src={Find3} alt='find icon' className='w-20 h-20 md:w-24 md:h-24' />
            <h4 className='text-4xl'>Enjoying Your Moments</h4>
            <p className='opacity-50 mt-3'>Discover custom for your home or batch formulas for restaurants and commercials</p>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Steps;
