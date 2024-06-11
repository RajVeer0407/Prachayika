import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation/Navigation";
// import Serv from "../components/Serv";

function Service () {
    return(
        <>
        {/* <Navbar/> */}
        <Navigation/>
        <Hero 
        cName="hero-mid"
        heroImg="https://images.pexels.com/photos/96627/pexels-photo-96627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="SERVICE"
        btnClass="hide"
        /> 
        {/* <Card/> */}
        {/* <Serv/>        */}
        <Footer/>
        </>
    )
}

export default Service;