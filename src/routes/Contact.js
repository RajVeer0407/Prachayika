import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { ContactUs } from "../components/ContactUs";
import Navigation from "../components/Navigation/Navigation";
// import ContactForm from "../components/ContactForm";

function Contact () {
    return(
        <>
        {/* <Navbar/> */}
        <Navigation/>
        {/* <Hero 
        cName="hero-mid"
        heroImg="https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="CONTACT"
        btnClass="hide"
        /> */}
        <ContactUs/>
        <Footer/>
        </>
    )
}

export default Contact;