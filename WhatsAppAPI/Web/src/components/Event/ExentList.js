import React from "react";
import EventCard from "./EventCard";

function ExentList({ id }) {
  React.useEffect(() => {}, []);
  return (
    <div style={eventList}>
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
  );
}
const eventList = {
  maxWidth: "35.5rem",
  margin: "5px auto",
  overflow: "scroll",
  minHeight: "300px",
  border: "1px dashed steelblue",
  padding: "5px",
  borderRadius: "5px",
};
export default ExentList;
