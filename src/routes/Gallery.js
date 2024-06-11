import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Gallery () {
    return(
        <>
        <Navbar/>
        <Hero 
        cName="hero-mid"
        heroImg="https://images.pexels.com/photos/296649/pexels-photo-296649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="GALLERY"
        btnClass="hide"
        />
        <Footer/>
        </>
    )
}

export default Gallery;