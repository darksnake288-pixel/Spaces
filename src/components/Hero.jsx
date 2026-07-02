import React from 'react'

const Hero = () => {
  return (
    <div data-aos="fade-up" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 w-full px-4 max-w-[90vw] sm:max-w-2xl">
      <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-balance">Orbite The Earth</h1>
        <p className="text-white text-base sm:text-lg mt-4 mx-auto max-w-[60ch] text-pretty">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quas illum corrupti odio maxime tenetur inventore omnis nostrum et deleniti? Eum voluptates sapiente pariatur id maiores quidem velit dicta fugit.</p>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 transition-colors">Learn More</button>
    </div>
  )
}

export default Hero
