import React from "react";
import LinkComponent from "../elements/LinkComponent";
function LocationDiv({ loc, url, latlon }) {
  const [map, setMap] = React.useState("");
  React.useEffect(() => {
    let LatLong = latlon.substr(7, latlon.length).replace(")", "").split(" ");
    setMap(
      `https://www.google.com/maps/search/?api=1&query=${LatLong[0]},${LatLong[1]}`
    );
  }, []);
  return (
    <div>
      <div>
        <LinkComponent url={url} name={loc} />
      </div>
      <div>
        <LinkComponent url={map} name={"map to " + loc} />
      </div>
    </div>
  );
}

export default LocationDiv;
