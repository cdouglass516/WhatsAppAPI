/* eslint-disable default-case */
import React from "react";
import EventCard from "./EventCard";
import {
  getAllEvents,
  getAllEventsByDistance,
} from "../../modules/eventModule";
import FilterSort from "./FilterSort";
function ExentList() {
  const [events, setEvents] = React.useState([]);
  const [sort, setSort] = React.useState("");
  const [location, setLocation] = React.useState(
    "POINT(36.2777542 -86.7188027)"
  );
  const getEvents = () => {
    getAllEvents().then((evs) => setEvents(evs));
  };
  const sortEvents = (sor) => {
    let toSort = [];
    switch (sor) {
      case "name":
        toSort = events;
        toSort.sort((a, b) => {
          let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        });
        setEvents(toSort);
        break;
      case "et":
        toSort = events;
        toSort.sort((a, b) => {
          let fa = a.eventType.toLowerCase(),
            fb = b.eventType.toLowerCase();

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        });
        setEvents(toSort);
        break;
      case "distance":
        getAllEventsByDistance().then((data) => setEvents(data));
        break;
      default:
        toSort = events;
        toSort.sort((a, b) => {
          let fa = a.startDate,
            fb = b.startDate;

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        });
        setEvents(toSort);
        break;
      // code block
    }
  };
  React.useEffect(() => {
    getEvents();
  }, []);
  return (
    <>
      <FilterSort setSort={setSort} sortEvents={sortEvents} />
      <div style={eventList}>
        {events.map((ev) => (
          <EventCard key={ev.id} ev={ev} />
        ))}
      </div>
    </>
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
