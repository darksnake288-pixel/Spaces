import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div data-aos="fade-down" className="fixed top-0 left-0 z-50 w-full h-16 sm:h-20 backdrop-blur-md flex items-center px-4 sm:px-6">
      <div className="flex items-center gap-2 sm:gap-3">
        <img src={logo} alt="Logo" className="w-10 h-10 sm:w-14 sm:h-14" />
        <h1 className="text-white text-lg sm:text-xl font-bold">TCJ-SPACE</h1>
      </div>
      <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:flex hidden">
        <ul className="flex items-center gap-6">
            <li><a href="#" className="text-white hover:text-blue-500">Home</a></li>
            <li><a href="#" className="text-white hover:text-blue-500">About</a></li>
            <li><a href="#" className="text-white hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>
      <button className="ml-auto text-white text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2 border border-white rounded-2xl hover:bg-white hover:text-black transition-colors">Login</button>
    </div>
  )
}

export default Navbar


