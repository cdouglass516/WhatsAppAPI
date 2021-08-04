import ImgComonent from "../elements/ImgComonent";
import LinkComponent from "../elements/LinkComponent";
import DateComponent from "../elements/DateComponent";
import Location from "../location/Location";
import LocationDiv from "../location/LocationDiv";
import React from "react";
function EventCard({ ev }) {
  const [img, setImg] = React.useState("https://i.ibb.co/gdJ2LLZ/logo.png");
  const openDetail = (id) => {};
  React.useEffect(() => {
    var startDt = new Date(ev.startDate);
    var endDt = new Date(ev.endDate);
    startDt.setHours(startDt.getHours() - 1);
    var today = new Date();
    if (ev.eventImageURL) {
      setImg(ev.eventImageURL);
    }
  }, [ev]);
  return (
    <>
      <div style={eventContainer} onClick={() => openDetail(ev.id)}>
        <div>
          <p>{ev.eventType}</p>
          <ImgComonent url={img} sty={eventImage} />
        </div>

        <div style={eventText}>
          <h6>
            {ev.eventURL && <LinkComponent url={ev.eventURL} name={ev.name} />}
            {!ev.eventURL && ev.name}
          </h6>
          <span>{ev.description}</span>
          <DateComponent type={"Start Date"} date={ev.startDate} />
          <DateComponent type={"End Date"} date={ev.endDate} />
          <LocationDiv
            loc={ev.location}
            url={ev.locationUrl}
            latlon={ev.latLon}
          />
        </div>
      </div>
    </>
  );
}
const eventText = {
  margin: "5px",
  maxWidth: "30rem",
  padding: "10px 20px",
  cursor: "pointer",
};
const eventImage = {
  height: 90,
  width: 125,
  objectFit: "contain",
};
const eventContainer = {
  display: "flex",
  background: "#edf7fa",
  maxWidth: "35rem",
  margin: ".5rem auto",
  overflow: "auto",
  minHeight: "6rem",
  border: "1px solid darkblue",
  padding: ".5rem",
  borderRadius: "5px",
};
export default EventCard;
