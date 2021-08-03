import ImgComonent from "../elements/ImgComonent";
import LinkComponent from "../elements/LinkComponent";
import DateComponent from "../elements/DateComponent";
import Location from "../location/Location";

function EventCard({ ev }) {
  const openDetail = (id) => {};
  return (
    <>
      <div style={eventContainer} onClick={() => openDetail(ev.id)}>
        <ImgComonent url={ev.eventImageURL} sty={eventImage} />
        <div style={eventText}>
          <h6>
            <LinkComponent url={ev.eventURL} name={ev.name} />
          </h6>
          <span>{ev.description}</span>
          <DateComponent type={"Start Date"} date={ev.startDate} />
          <DateComponent type={"End Date"} date={ev.endDate} />
          <Location locationId={ev.locationId} />
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
