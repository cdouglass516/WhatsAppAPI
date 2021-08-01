import React from "react";

function Button({ cn, text, color, onClick, to }) {
  return (
    <button
      style={{ backgroundColor: color }}
      className={cn}
      onClick={() => onClick({ to })}
    >
      {text}
    </button>
  );
}
Button.defaultProps = {
  color: "steelblue",
  cn: "btn",
  onClick: (to) => {
    if (to) {
    }

    alert("Click Button");
  },
};
export default Button;
