// RecentEvent.js

import "../components/RecentEventstyle.css";
import recentEventsData from "../components/RecentEventData";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer";

function RecentEvent() {
  return (
    <>
      <Navigation />
      <div className="recent-events-page">
        <div className="recent-events-container">
          <h1 className="recent-events-title">Recent Events</h1>

          <div className="recent-events-grid">
            {recentEventsData.map((event) => (
              <div className="event-card" key={event.id}>
                <img src={event.image} alt={event.title} />

                <div className="event-overlay">
                  <h3>{event.title}</h3>
                  <p className="event-date">{event.date}</p>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RecentEvent;
