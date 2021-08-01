import React from "react";

function EventCard(props) {
  return (
    <>
      <div style={eventContainer}>
        <img
          src="https://i.ibb.co/wKzfpjF/music.jpg"
          alt="music"
          border="0"
          style={eventImage}
        />
        <div style={eventText}>
          <h6>Event Header</h6>
          <span>This is a sale on whiskey sours</span>
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
