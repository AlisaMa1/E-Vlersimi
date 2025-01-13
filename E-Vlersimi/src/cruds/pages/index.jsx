import React, {useState}from 'react'
import Navbar from '../Navbar'
import HeroSection from '../HeroSection';




const Home = () => {
    const [isOpen, setIsOpen] =useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

  return (
    <>
      
        <Navbar toggle={toggle} />
        <HeroSection />
       

    </>
  )
}

export default Home 