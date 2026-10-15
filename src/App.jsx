import React from 'react'
import Bg from './assets/Earth.mp4'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Banner from './components/Banner'
import Banner2 from './components/Banner2'
import Footer from './components/Footer'
import AOS from "aos";
import "aos/dist/aos.css"
const App = () => {
  React.useEffect(()=>{
    AOS.init({
      duration:1200,
      easing:"ease-in-out",
    }
    )
  })
  return (
    <div className="overflow-x-hidden">
      <video autoPlay loop muted playsInline className="w-full h-screen h-dvh object-cover">
        <source src={Bg} type="video/mp4" />
      </video>
      <div>
        {/**Section */}
        <Navbar />
        <Hero />
        <Services />
        <Banner />
        <Banner2 />
        <Footer />
      </div>

    </div>
  )
}

export default App
