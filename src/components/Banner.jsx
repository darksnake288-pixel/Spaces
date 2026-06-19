import React from 'react'
import satelite_1 from '../assets/satelite1.jpg'
const Banner = () => {
  return (
    <div className='bg-black flex justify-center items-center gap-4 p-6'>
      <div className="flex flex-col md:flex-row items-center gap-7 pb-10 max-w-5xl w-full">
      <img data-aos="zoom-in" src={satelite_1} alt="satelite" className="w-full max-w-[400px] md:w-1/2 h-auto object-cover rounded-xl" />
      <div data-aos="fade-up" className="border-b border-r py-2 px-4 md:pr-28 border-blue-600 w-full md:w-1/2">
      <h1 className="text-blue-600 font-sans">Our Mission</h1>
      <h2 className="text-white uppercase text-2xl sm:text-3xl">Rapidcast</h2>
      <p className="text-white text-pretty my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quas provident assumenda explicabo qui ducimus velit consectetur debitis sit quae officia perferendis illo, in fugiat totam, aliquam quis tempore nulla!</p>
      <button className="bg-blue-600 text-white p-3 rounded-3xl hover:bg-blue-800 transition-colors">Learn more</button>
      </div>
      </div>
    </div>
  )
}

export default Banner
