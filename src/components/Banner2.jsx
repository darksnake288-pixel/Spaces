import React from 'react'
import satelite_2 from '../assets/satelite2.jpg'
const Banner2 = () => {
  return (
    <div className=' bg-black flex justify-center items-center md:flex-row gap-4 p-6'>
      <div className="flex gap-7 pb-10">
      <img data-aos="zoom-in" src={satelite_2} alt="satelite" className="w-[600px] h-[400px]"/>
      <div data-aos="fade-up" className="border-b border-r py-2 pr-28 border-blue-600">
      <h1 className="text-blue-600 font-sans">Our Mission</h1>
      <h2 className="text-white uppercase text-3xl">Rapidcast</h2>
      <p className="text-white w-[300px] h-[200px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas provident assumenda explicabo qui ducimus velit consectetur debitis sit quae officia perferendis illo, in fugiat totam, aliquam quis tempore nulla!</p>
      <button className="bg-blue-600 text-white p-3 rounded-3xl hover:bg-blue-800 ">Learn more</button>
      </div>
      </div>
    </div>
  )
}

export default Banner2
