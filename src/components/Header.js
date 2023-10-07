import React from 'react'
import Facebook from "../assets/Facebook.png";
import Twitter from "../assets/Twitter.png";
import Instagram from "../assets/Instagram.png";
import Login from "../assets/Login.png";
import Become from "../assets/Become-Member.png";
import RegisterNow from "../assets/Register.png";
const Header = () => {
    return (
        <div>
          <header className="bg-teal-50 py-4 px-4 flex justify-between items-center">
            {/* Left side: Social media links */}
            <div className="hidden md:flex items-center space-x-4 ml-20">
              {/* Replace these with your social media icons and links */}
              <a href="#" className=" hover:text-blue-700">
                <img src={Facebook} alt="Facebook" />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <img src={Twitter} alt="Twitter" />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <img src={Instagram} alt="Instagram" />
              </a>
            </div>
    
            {/* Right side: Login, Register, Become Member links */}
            <div className="flex items-center space-x-4 md:hidden">
              <img src={Login} alt="Login" className="w-6 h-6" />
              <img src={RegisterNow} alt="Register Now" className="w-6 h-6" />
              <img src={Become} alt="Become a Member" className="w-6 h-6" />
            </div>
            <div className="hidden md:flex items-center space-x-4 mr-16">
              <img src={Login} alt="Login" />
              <a href="#" className="hover:text-blue-700 text-xs md:text-base">
                Login
              </a>
              <span className="text-gray-400">|</span>
              <img src={RegisterNow} alt="Register Now" />
              <a href="#" className="hover:text-blue-700 text-xs md:text-base">
                Register Now
              </a>
              <span className="text-gray-400">|</span>
              <img src={Become} alt="Become a Member" />
              <a href="#" className="hover:text-blue-700 text-xs md:text-base">
                Become a Member
              </a>
            </div>
          </header>
        </div>
      );
}

export default Header