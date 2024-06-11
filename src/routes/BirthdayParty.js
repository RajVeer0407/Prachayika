import React from 'react'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navigation from '../components/Navigation/Navigation';
import { BirthdayData } from '../components/BirthdayData';

const CoroprateEvents = () => {
  return (
    <>
        <Navigation/>
        {/* <Hero 
        cName="hero-mid"
        heroImg="https://images.pexels.com/photos/296649/pexels-photo-296649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="Corporate events"
        btnClass="hide"
        /> */}
        <BirthdayData/>
        <Footer/>
        </>
  )
}

export default CoroprateEvents