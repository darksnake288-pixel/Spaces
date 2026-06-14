import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div data-aos="fade-down" className="fixed top-0 left-0 w-full h-19 backdrop-blur-md flex items-center px-4">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="w-15 h-15" />
        <h1 className="text-white text-xl font-bold">TCJ-SPACE</h1>
      </div>
      <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:flex hidden">
        <ul className="flex items-center gap-6">
            <li><a href="#" className="text-white hover:text-blue-500">Home</a></li>
            <li><a href="#" className="text-white hover:text-blue-500">About</a></li>
            <li><a href="#" className="text-white hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>
      <button className="ml-auto  text-white px-4 py-2 border border-white rounded-2xl hover:bg-white hover:text-black">Login</button>
    </div>
  )
}

export default Navbar


