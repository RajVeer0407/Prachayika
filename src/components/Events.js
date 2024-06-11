import "./EventsStyles.css"
import EventsData from "./EventsData";
import event1 from "../assets/bday.jpg"
import event2 from "../assets/45.jpg"
import event3 from "../assets/lohri.jpg"

function Event() {
    return (
        <div className="event">
            <h1>Recent Events</h1>
            <div className="eventcard">
                <EventsData
                    image={event1}
                    heading="Birthday Bash at Clark Inn"
                    text="Team Prachayika Events organized and executed the 
                    Birthday Bash for one of the renouned businessman in Raipur. 
                    This was an overnight event which included beautiful decoration 
                    and surprises for the special ones."
                />

                <EventsData
                    image={event2}
                    heading="Wedding at Goa Beach"
                    text="This was one of the amazing events organized for more 
                    than 200 guests in goa. It was a beach wedding with lot of scintillating 
                    memories for diffrent occations like haldi, mehndi, sangeet and many more."
                />

                <EventsData
                    image={event3}
                    heading="Lohri for Residents"
                    text="Team Prachayika organized Lohri party for housing society including 
                    more than 50 families. It included various entertainment and engagement 
                    activities for the participants."
                />
            </div>
        </div>
    )
}

export default Event;