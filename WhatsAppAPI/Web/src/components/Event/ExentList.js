import React from "react";
import EventCard from "./EventCard";
import { getAllEvents } from "../../modules/eventModule";
function ExentList() {
  const [events, setEvents] = React.useState([]);
  const getEvents = () => {
    getAllEvents().then((evs) => setEvents(evs));
  };

  React.useEffect(() => {
    getEvents();
  }, []);
  return (
    <div style={eventList}>
      {events.map((ev) => (
        <EventCard key={ev.id} ev={ev} />
      ))}
    </div>
  );
}
const eventList = {
  maxWidth: "35.5rem",
  margin: "5px auto",
  overflow: "auto",
  minHeight: "300px",
  border: "1px dashed steelblue",
  padding: "5px",
  borderRadius: "5px",
};
export default ExentList;
