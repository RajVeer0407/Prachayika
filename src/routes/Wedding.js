import React from 'react'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navigation from '../components/Navigation/Navigation';
import { WeddingData } from '../components/WeddingData';

const Wedding = () => {
  return (
    <>
    <Navigation/>
        {/* <Hero 
        cName="hero-mid"
        heroImg="https://images.pexels.com/photos/296649/pexels-photo-296649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="Wedding"
        btnClass="hide"
        /> */}
        <WeddingData/>
        <Footer/>
        </>
  )
}

export default Wedding