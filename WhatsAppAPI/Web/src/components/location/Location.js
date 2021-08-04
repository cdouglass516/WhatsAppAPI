import React from "react";
import { getAll } from "../../modules/locationModule";
import MyButton from "../elements/MyButton";
import { useHistory } from "react-router";
import MyLocationCard from "./MyLocationCard";
function Location({ locationId, locationName }) {
  const history = useHistory();
  const [locations, setLocations] = React.useState([]);
  const getLocation = () => {
    getAll().then((evs) => setLocations(evs));
  };
  const onBtnClick = () => {
    history.push("/addlocation/");
  };
  React.useEffect(() => {
    getLocation();
  }, []);
  return (
    <div style={eventList}>
      <li className="nav-item ">
        <MyButton
          text={"Add Location"}
          cn={buttonCSS}
          onClick={onBtnClick}
        ></MyButton>
      </li>
      {locations.map((ev) => (
        <MyLocationCard key={ev.id} location={ev} />
      ))}
    </div>
  );
}
const buttonCSS = {
  backgroundColor: "	#FFFAFA",
  width: "7rem",
  fontSize: ".9rem",
  borderColor: "#e3f2fd",
  borderRadius: "5px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
};
const eventList = {
  maxWidth: "35.5rem",
  margin: "5px auto",
  overflow: "scroll",
  minHeight: "300px",
  border: "1px dashed steelblue",
  padding: "5px",
  borderRadius: "5px",
};

export default Location;
