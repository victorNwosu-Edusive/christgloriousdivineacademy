import logo from '../assets/images/logo.png'
import React, { useState } from 'react';
import { Outlet, NavLink } from "react-router-dom";
import Footer from './Footer';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    
      const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
  
      const closeMenu = () => {
          setIsOpen(false);
        };
   
    return (
      <>
      {/*The Navigation Bar (Responsive)*/}
      <header>
      <nav className='fixed z-30 w-full lg:w-full p-4 flex flex-wrap bg-white/85 backdrop-blur-md justify-between items-center mx-auto max-w-screen-3xl'>
      {/*The Navigation Logo*/}    
          <div className='flex space-x-3 rtl:space-x-reverse'>
            <a href="/" className='font-heading duration-300'>
            <img src={logo} alt="" className="h-16 w-auto"  />
            </a>
          </div>
  
          
          
          {/*The Navigation Links*/}
          <div className='md:flex md:items-center md:space-x-9 md:rtl:space-x-reverse md:text-black md:text-sm'>
            
          {/*The Menu Icon to Mobile menu*/}  
          <div className="lg:hidden" onClick={toggleMenu}>
            <button className="text-white focus:outline-none relative scale-x-[-1] w-6 h-6">
              <span
                className={`block absolute w-6 h-0.5 bg-black transition-transform duration-300 ${
                  isOpen ? 'rotate-45 bg-blue-800' : '-translate-y-1.5'
                }`}
              ></span>
              <span
                className={`block absolute w-5 h-0.5 bg-black transition-opacity duration-300 ${
                  isOpen ? 'opacity-0 bg-blue-800' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`block absolute w-6 h-0.5 bg-black transition-transform duration-300 ${
                  isOpen ? '-rotate-45 bg-blue-800' : 'translate-y-1.5'
                }`}
              ></span>
            </button>
          </div>
  
          {/*The Navigation Links for Desktop Navigation*/}
            <NavLink to="/about" className="hidden lg:block  font-bold p-2 border-b-2 border-transparent rounded-sm hover:bg-blue-800 hover:text-white duration-300 " title="About Us">About Us</NavLink>
            <NavLink to="/academics" className="hidden lg:block  font-bold p-2 border-b-2 border-transparent rounded-sm hover:bg-blue-800 hover:text-white duration-300 " title='Academics'>Academics</NavLink>
            <NavLink to="/admissions" className="hidden lg:block  font-bold p-2 border-b-2 border-transparent rounded-sm  hover:bg-blue-800 hover:text-white duration-300 " title='Admissions'>Admissions</NavLink>
            <NavLink to="/gallery" className="hidden lg:block  font-bold p-2 border-b-2 border-transparent rounded-sm  hover:bg-blue-800 hover:text-white duration-300 " title='Gallery'>Gallery</NavLink>
            <NavLink to="/contact-us" className="hidden lg:block  font-bold p-2 border-b-2 border-transparent rounded-sm  hover:bg-blue-800 hover:text-white duration-300 " title='Contact Us'>Contact Us</NavLink>
          </div>
  
        </nav>

        {/*The Navigation Links for Mobile Menu (Navigation)*/}
        <div id="mobile" className={`${
          isOpen ? "left-0" : "left-full"
            } lg:hidden fixed grid duration-300 ease-out gap-4 text-left z-20 text-black font-primary text-md overflow-y-scroll h-auto w-full p-3 px-6 pb-96 pt-40 bg-white/90 backdrop-blur-md mx-auto max-w-screen-xl `}>
          <NavLink to="/about" className="md:block bg-blue-600/5 p-3 hover:text-blue-900 rounded-md hover:bg-blue-600/10 duration-300 " onClick={closeMenu} title="About Us">About Us </NavLink>
          <NavLink to="/academics" className="md:block  bg-blue-600/5 p-3 hover:text-blue-900 rounded-md  hover:bg-blue-600/10 duration-300 " onClick={closeMenu} title='Academics'>Academics</NavLink>
          <NavLink to="/admissions" className="md:block  bg-blue-600/5 p-3 hover:text-blue-900 rounded-md  hover:bg-blue-600/10 duration-300 " onClick={closeMenu} title='Admissions'>Admissions</NavLink>
          <NavLink to="/gallery" className="md:block  bg-blue-600/5 p-3 hover:text-blue-900 rounded-md hover:bg-blue-600/10 duration-300 " onClick={closeMenu} title='Gallery'>Gallery</NavLink>
          <NavLink to="/contact-us" className="md:block  bg-blue-600/5 p-3 hover:text-blue-900 rounded-md  hover:bg-blue-600/10 duration-300 " onClick={closeMenu} title='Contact Us'>Contact Us</NavLink>
        </div>

        </header>
        <Outlet />
        <Footer />
      </>
    )
  }
  
  export default Navbar
  