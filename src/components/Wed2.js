import cake from "../assets/73.jpg"
import cake1 from "../assets/55.jpg"
import cake2 from "../assets/58.jpg"
import cake3 from "../assets/68.jpg"
import WedData2 from "./WedData2"
import banner from "../assets/63.jpg"
import "./ContentStyles.css"

const Wed2 = () => {
    return(
        <div className="content">
            <WedData2
            className="first-cont"
            heading="Prachayika Events"
            text="Prachayika Events is a leading event management & wedding 
            planning company in Delhi, Raipur, Goa & Mumbai. We help to organize 
            different type of event services like corporate events, wedding events,
            destination wedding, digital events, bachelor parties, wedding decorations, 
            brand activation, fashion shows, corporate parties, manpower management etc."
            img1={cake}
            img2={cake1}
            />

<WedData2
className="first-cont-reverse"
            heading="More About Prachayika Events"
            text="Planning an Event involves visualizing concepts, budgeting, organizing 
            and executing the auspicious moments to make it memorable. We do our works with 
            our full commitment and hard determination to achieve client expectations. Our 
            services also include music, light, catering, and decoration.
            We at, Prachayika Events help our clients attain their objectives via the 
            innovations and execution of customized special events."
            img1={cake2}
            img2={cake3}
            />
        </div>
    )
}

export default Wed2;