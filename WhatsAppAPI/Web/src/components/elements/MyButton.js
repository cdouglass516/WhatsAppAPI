import React from "react";

function MyButton({ cn, text, color, onClick, to }) {
  return (
    <button style={cn} onClick={() => onClick({ to })}>
      {text}
    </button>
  );
}
MyButton.defaultProps = {
  text: "My Button",
  color: "steelblue",
  cn: { backgroundColor: "pink", height: "1.2rem", fontSize: ".6rem" },
  onClick: (to) => {
    alert("Click Button");
  },
};
export default MyButton;
