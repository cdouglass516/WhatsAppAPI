import React from "react";
import MyButton from "../elements/MyButton";
import { useHistory } from "react-router";
function MyLocationCard({ location }) {
  const history = useHistory();
  const onDelete = () => {};
  const onEdit = () => {
    history.push(`/locationedit/${location.id}`);
  };
  return (
    <div style={locContainer}>
      <div>
        <div>
          <label style={lblWidth}>Location:</label>
          {location.name}
        </div>
        <div>
          <label style={lblWidth}>Description:</label>
          {location.description}
        </div>
        <div>
          <label style={lblWidth}>Web Site:</label>
          {location.locationURL}
        </div>
        <div>
          <label style={lblWidth}>Image URL:</label>
          {location.imageURL}
        </div>
        <div>
          <label style={lblWidth}>LatLon:</label>
          {location.latLon}
          <div>information about lat lon</div>
        </div>
        <MyButton text={"Edit Location"} onClick={onEdit} cn={buttonCSS} />
        <MyButton text={"Delete Location"} onClick={onDelete} cn={buttonCSS} />
      </div>
    </div>
  );
}

const lblWidth = {
  minWidth: "3.8rem",
};
const buttonCSS = {
  backgroundColor: "#FFFAFA",
  width: "7rem",
  fontSize: ".7rem",
  borderColor: "#e3f2fd",
  borderRadius: "5px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
};
const locImage = {
  height: 90,
  width: 125,
  objectFit: "contain",
};
const locContainer = {
  display: "flex",
  fontSize: ".7rem",
  background: "#edf7fa",
  maxWidth: "35rem",
  margin: ".5rem auto",
  overflow: "auto",
  minHeight: "6rem",
  border: "1px solid darkblue",
  padding: ".5rem",
  borderRadius: "5px",
};
export default MyLocationCard;
