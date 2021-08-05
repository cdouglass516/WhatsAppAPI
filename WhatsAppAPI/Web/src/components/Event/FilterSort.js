import React from "react";
import EventTypeSort from "./EventTypeSort";
import NameSort from "./NameSort";
import SearchByDistance from "./SearchByDistance";
import SearchTime from "./SearchTime";
function FilterSort({ setSort, sortEvents }) {
  return (
    <div style={container}>
      <div>
        <EventTypeSort setSort={setSort} sortEvents={sortEvents} />
      </div>
      <div>
        <NameSort setSort={setSort} sortEvents={sortEvents} />
      </div>
      <div>
        <SearchTime setSort={setSort} sortEvents={sortEvents} />
      </div>
      <div>
        <SearchByDistance setSort={setSort} sortEvents={sortEvents} />
      </div>
    </div>
  );
}
const buttonCSS = {
  backgroundColor: "#FFFAFA",
  width: "7rem",
  fontSize: ".9rem",
  borderColor: "#e3f2fd",
  borderRadius: "5px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
};
const container = {
  display: "flex",
  justifyContent: "spaceBetween",
  border: "2px solid #063d4d",
  maxWidth: "34.8rem",
  margin: ".5rem auto",
  overflow: "auto",
  minHeight: "90px",
  padding: ".7rem",
};
export default FilterSort;
