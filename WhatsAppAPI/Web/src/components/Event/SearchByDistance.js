import React from "react";
import MyButton from "../elements/MyButton";
function SearchByDistance({ setSort, sortEvents }) {
  const callSort = () => {
    setSort("distance");
    sortEvents("distance");
  };
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <MyButton text={"Sort by Distance"} cn={btnCss} onClick={callSort} />
    </div>
  );
}
const btnCss = {
  margin: "3px",
  height: "4rem",
  color: "#88badb",
  background: "#01416b",
  width: "7.7rem",
  fontSize: ".9rem",
};
export default SearchByDistance;
