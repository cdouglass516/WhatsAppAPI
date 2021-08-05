import React from "react";
import MyButton from "../elements/MyButton";

function EventTypeSort({ setSort, sortEvents }) {
  const callSort = () => {
    setSort("et");
    sortEvents("et");
  };
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <MyButton text={"Sort by Event Type"} cn={btnCss} onClick={callSort} />
    </div>
  );
}
const btnCss = {
  margin: "3px",
  height: "4rem",
  color: "#d7aff0",
  background: "purple",
  width: "7.7rem",
  fontSize: "1rem",
};
export default EventTypeSort;
