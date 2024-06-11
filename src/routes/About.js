import Navbar from "../components/Navbar"
// import Hero from "../components/Hero";
import Footer from "../components/Footer";
import aboutimg from "../assets/39.jpg"
import AboutUs from "../components/AboutUs";
import Navigation from "../components/Navigation/Navigation";

function About () {
    return(
        <>
        {/* <Navbar/> */}
        <Navigation/>
        {/* <Hero 
        cName="hero-mid"
        heroImg={aboutimg}
        title="About Us"
        btnClass="hide"
        /> */}
        <AboutUs/>
        <Footer/>
        </>
    )
}

export default About;