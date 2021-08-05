import React from "react";
import MyButton from "../elements/MyButton";
function SearchTime({ setSort, sortEvents }) {
  const callSort = () => {
    setSort("Time");
    sortEvents("time");
  };
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <MyButton text={"Sort by Start Time"} cn={btnCss} onClick={callSort} />
    </div>
  );
}
const btnCss = {
  margin: "3px",
  height: "4rem",
  color: "#ffff4a",
  background: "#b0bd06",
  width: "7.7rem",
  fontSize: "1rem",
};
export default SearchTime;
