import React from 'react'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navigation from '../components/Navigation/Navigation';
import { ThemeData } from '../components/ThemsData';
// import Them from '../components/Them';

const ThemeParty = () => {
  return (
    <>
        <Navigation/>
        <Hero 
        cName="hero-mid"
        heroImg="https://images.pexels.com/photos/296649/pexels-photo-296649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="Theme Party"
        btnClass="hide"
        />
        {/* <ThemeData/> */}
        {/* <Them/> */}
        </>
  )
}

export default ThemeParty