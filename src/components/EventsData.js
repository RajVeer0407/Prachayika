import "./EventsStyles.css"

function EventsData(props) {
    return (
        <div className="e-card">
            <div className="e-image">
                <img src={props.image} alt="image" />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}
export default EventsData;