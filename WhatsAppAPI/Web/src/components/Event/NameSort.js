import React from "react";
import MyButton from "../elements/MyButton";

function NameSort({ setSort, sortEvents }) {
  const callSort = () => {
    setSort("name");
    sortEvents("name");
  };
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <MyButton text={"Sort by Event Name"} cn={btnCss} onClick={callSort} />
    </div>
  );
}
const btnCss = {
  margin: "3px",
  height: "4rem",
  color: "#a1cfa9",
  background: "#095215",
  width: "7.7rem",
  fontSize: "1rem",
};
export default NameSort;
