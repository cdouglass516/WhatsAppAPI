import React from "react";

function LinkComponent({ url, name }) {
  return (
    <div>
      <a href={url} rel="noreferrer" target="_blank">
        {name}!
      </a>
    </div>
  );
}

export default LinkComponent;
