import React from "react";
import { getLocName } from "../../modules/locationModule";
function Location({ locationId, locationName }) {
  // const [locName, setLocName] = React.useState("");
  // const getLocation = () => {
  //   getLocName(locationId).then((name) => setLocName(name));
  // };
  // React.useEffect(() => {
  //   getLocation();
  // }, []);
  return (
    <div>
      <h4>{locationName}</h4>
    </div>
  );
}

export default Location;
