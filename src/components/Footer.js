import React from 'react';
import logo from "../assets/BanquetBooking-Logo.png";
import download from "../assets/Download.png";

const Footer = () => {
  return (
    <>
      <div className='bg-amber-100 w-full h-3/5 min-h-screen flex flex-col md:flex-row justify-center items-center p-4 md:p-0'>
        {/* Section 1: Logo and Download Links */}
        <div className='flex flex-col md:flex-row space-x-0 md:space-x-4 border-b md:border-b-0 pb-4 md:pb-0 md:pr-4'>
          <div className='w-64 h-auto text-center md:text-left'>
            <img src={logo} alt="Logo" className='w-64 mx-auto md:mx-0'/>
            <p className='opacity-50 text-xs md:my-8 text-center md:text-left'>Banquet Booking is committed towards building an organization centered on the highest standards of transparency and corporate</p>
            <img src={download} alt="Logo" className='w-64 mx-auto md:mx-0'/>
          </div>
        </div>

        {/* Section 2: Useful Links */}
        <div className='flex flex-col text-center md:text-left mt-4 md:mt-0 md:border-l md:border-r md:px-4 md:w-1/4' >
          <h3 className='mb-2 md:mb-8'>USEFUL LINKS</h3>
          <ul className='opacity-50'>
            <li><a href='#'>About us</a></li>
            <li><a href='#'>Team/Careers</a></li>
            <li><a href='#'>News blog</a></li>
            <li><a href='#'>Support</a></li>
            <li><a href='#'>Frames</a></li>
            <li><a href='#'>Circle</a></li>
            <li><a href='#'>Press Kit</a></li>
          </ul>
        </div>

        {/* Section 3: Terms and Conditions */}
        <div className='flex flex-col text-center md:text-left mt-4 md:mt-0 md:border-r md:px-4 md:w-1/4 mb-4 md:mb-0'>
          <h3 className='opacity-50 mb-8 md:mb-8'>Terms and Conditions</h3>
          <ul className='opacity-50'>
            <li><a href='#'>Terms of Service</a></li>
            <li><a href='#'>Privacy Policy</a></li>
            <li><a href='#'>Guest Policy</a></li>
          </ul>
        </div>

        {/* Section 4: Newsletter */}
        <div className='flex flex-col text-center md:text-left mt-6 md:w-1/4'>
          <h3 className='md:mb-8'>NEWSLETTER</h3>
          <p className='opacity-50 mt-2 md:mt-10'>Subscribe to our newsletter</p>
          <form>
            <input type='text' placeholder='Your name' className='w-60 p-2 rounded-md m-2' />
            <input type='email' placeholder='Your email' className='w-60 p-2 rounded-md m-2' />
            <button type='submit' className='bg-red-500 text-white px-6 md:px-20 mx-2 md:mx-9 rounded-md mt-2 md:mt-0'>Submit</button>
          </form>
        </div>
      </div>
      <div className='bg-amber-400 w-full h-14 flex justify-center items-center'>
        Copyright @ All right reserve. Designed by Kamal Kishore
      </div>
    </>
  );
}

export default Footer;
