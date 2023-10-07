import React from 'react'
import logo from "../assets/BanquetBooking-Logo.png";
import WorkingHours from "../assets/Working-Hours.png";
import phone from "../assets/Phone.png";
const Logo = () => {
  return (
    <>
    <div className="flex justify-between items-center text-start">
  {/* Left side: Logo */}
  <div className="w-90 mt-6 h-15 ml-12 pl-10">
    {/* Replace with your logo */}
    <img src={logo} alt="Logo" className="w-full h-full object-cover" />
  </div>

  {/* Right side: Inquiry details */}
  <div className="flex flex-row gap-6 mr-16 mt-10">
    <div className="flex items-center">
      {/* CallUs icon */}
      <img src={phone} alt="Call Us" className="w-7 h-7 mr-2" />
      <span>Call Us: 28748932674<br />
     <span className="flex items-center opacity-50">The email: support2@gmail.com</span></span>
    </div>
    <div className="flex items-center">
      {/* Working hours */}
      <img src={WorkingHours} alt="Call Us" className="w-7 h-7 mr-2" />
      <span>Working Hours: <br /><span className='opacity-50'>Mon-Sun(8:00 AM to 12:00 AM)</span></span>
    </div>
  </div>
 
</div>
 <hr className='mt-8 w-full bg-black'/>
 </>
  )
}

export default Logo