import Content from "../components/Content";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import Events from "../components/Events";
import img40 from "../assets/54.jpg"
import Slider from "../components/Slider";
import Navigation from "../components/Navigation/Navigation";
import TopBar from "../components/TopBar";

function Home () {
    return(
        <>
        {/* <Navbar/> */}
        {/* <TopBar/> */}
        <Navigation/>
        {/* <Hero 
        cName="hero"
        heroImg={img40}
        title="ITS TIME TO CELEBRATE!"
        text="Life is an event. Make it memorable."
        buttonText="Explore"
        url="/"
        btnClass="show"
        />    */}
        <Slider/>
        <Content/>
        <Events/>
        <Footer/>
        </>
    )
}

export default Home;