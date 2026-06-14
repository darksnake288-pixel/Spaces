import React from 'react'
import { FaReact } from 'react-icons/fa'
import {FaSpaceAwesome,FaShuttleSpace} from 'react-icons/fa6'
import logo from '../assets/logo.gif'
import moon from '../assets/moon.png'
const Services = () => {
    const ServiceData = [
        {
            title : "HST",
            content : "300-150km",
            description : "Used for astronomical observations, capturing stunning images of the universe.",
            icon : <FaReact className="text-7xl " />,
            aosDisplay : "300"
        },
        {
            title : "ISS",
            content : "400km",
            description : "A space station that serves as a microgravity research laboratory and living space for astronauts.",
            icon : <FaSpaceAwesome className="text-7xl " />,
            aosDisplay : "500"
        },
        {
            title : "GPS",
            content : "20,200km",
            description : "A satellite-based navigation system that provides accurate positioning and timing information worldwide.",
            icon : <FaShuttleSpace className="text-7xl " />,
            aosDisplay : "700"
        }

    ]

  return (
    <div data-aos="fade-up" className= "bg-black text-white relative z-50 gap-10">
    <div className= "Container">
      <div className= "min-h-[400px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {ServiceData.map((data,index) => 
            ( 
                <div className="min-h-[180px] flex flex-col gap-2 justify-center items-center rounded-xl bg-sky-900/60 backdrop-blur-sm text-center py-9 px-3 w-full text-2xl lg:w-[300px] mx-auto  ">
                    <div>{data.icon}</div>
                    <h1>{data.title}</h1>
                    <p>{data.content}</p>
                    <p>{data.description}</p>
                    
                </div>
                ))}
            
           

        </div>
        </div>
        <div>
            <img src={logo} alt="Logo" className="h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0]" />

        </div>
        {/* surage section**/ }
        <div>
            <img src={moon} alt="Moon" className="absolute left-0 bottom-150 w-[1300px] brightness-50 z-10" />
        </div>
      </div>
      <div className="absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:h-[60px]"></div>

    </div>
  )
}

export default Services
