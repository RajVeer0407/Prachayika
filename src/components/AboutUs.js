import React from 'react'
import "./AboutStyles.css"
import banner from "../assets/63.jpg"
import { Link } from "react-router-dom";

function AboutUs() {
    return (

        // <section className='about-section sp-two'>
        <div>
            <img src={banner} alt='no' className='banner' />
            <div class="about-text">
                <h1>About Us</h1>
                <ul class="about-text-1">
                    <li><Link to="/prachayika" className='Home-link'>Home</Link></li>
                </ul>
            </div>
            <div className='container1'>
                <div className='sec-title centered'></div>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='about-text-block'>
                            <div className='top-content'>
                                <div className='inner-box'>
                                    <div className='content-text'>
                                        <h4 className='about'>About</h4>
                                        <h2>Prachayika Events</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='lower-content'>
                                <h4>
                                    Prachayika Events is a recognized and trusted Event Management Company,actively working in every field of event organization.
                                </h4>
                                <div className='text'>
                                    We are a professional event management company in Delhi  NCR, Raipur,
                                    Mumbai and Goa with innovative concepts, work ethics and positivity.
                                    We are well known for innovative ideas and creating subjective themes
                                    as per the requirements, allocated budget & permitted timeline.
                                    Working on detailed planning, visualizing, conceptualizing, production
                                    and finally turning each event into a huge success.
                                    <br></br>
                                    <br></br>

                                    "Our work profile includes designing and production of corporate &
                                    commercial events, brand promotions, theme parties & social events.
                                    we have been bringing in happiness for last five years and are one
                                    of the creative event management companies in the market."
                                    <br></br>
                                    <br></br>
                                    To summarize, Prachayika Events is a complete package service event
                                    management company in <b>Delhi NCR, Raipur, Mumbai & Goa.</b> From business
                                    conferences to gala dinner to theme parties to fat weddings, we are
                                    capable of handling events in each & every format and in every shape
                                    & size. For all these years, we have handled almost every type of
                                    corporate & social occasion and celebration you can imagine. These
                                    experiences help to ensure that our event planning services are
                                    unmatched within the service industry.                                    <br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </section>


    )
}

export default AboutUs;