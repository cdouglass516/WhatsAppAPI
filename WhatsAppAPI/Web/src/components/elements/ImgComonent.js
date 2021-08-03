import React from "react";

function ImgComonent({ url, sty }) {
  return (
    <div>
      <img src={url} alt="event" style={sty} />
    </div>
  );
}

export default ImgComonent;
