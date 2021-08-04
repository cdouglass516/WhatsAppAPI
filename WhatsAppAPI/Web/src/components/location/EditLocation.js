import React from "react";
import { EditLoc, getLocName } from "../../modules/locationModule";
import MyButton from "../elements/MyButton";
import { useLocation } from "react-router-dom";

function EditLocation({ id }) {
  const [locationReady, setLocationReady] = React.useState(false);
  const [values, setValues] = React.useState({
    name: "Name of Location",
    description: "",
    locationURL: "",
    imageURL: "",
    latLon: null,
  });
  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };
  const onAddEvent = async () => {
    try {
      EditLoc(values.id, values).then(() => {
        alert("Your Location was successfully updated!");
        setValues({
          name: "",
          description: "",
          locationURL: "",
          imageURL: "",
          latLon: null,
        });
      });
    } catch (e) {
      alert(`Add Location failed! ${e.message}`);
    }
  };
  const location = useLocation();
  const onCancelAdd = async (event) => {
    try {
      setLocationReady(false);
    } catch (e) {
      alert(`Event Creation failed! ${e.message}`);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default submission
    try {
      setLocationReady(true);
    } catch (e) {
      alert(`Event Creation failed! ${e.message}`);
    }
  };
  const getEditLocation = (id) => {
    getLocName(id).then((loc) => setValues(loc));
  };
  React.useEffect(() => {
    let locationId = location.pathname.substr(14, location.pathname.length);
    getEditLocation(locationId);
  }, []);

  return (
    <>
      {!locationReady && (
        <div>
          <form style={container} onSubmit={onSubmit}>
            <h4>Enter Location</h4>

            <label>Location Label:</label>
            <input value={values.name} onChange={set("name")} />

            <label>Description:</label>
            <textarea
              value={values.description}
              onChange={set("description")}
            />

            <label>Location Website:</label>
            <input value={values.locationUrl} onChange={set("locationUrl")} />

            <label>Image URL*:</label>
            <input value={values.imageURL} onChange={set("imageURL")} />

            <label>Lat Lon:(latitude longitude) or 36.195347 -89.999992</label>
            <input value={values.latLon} onChange={set("latLon")} />

            <button
              style={{ padding: ".3rem", marginTop: "1rem" }}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      )}

      {locationReady && (
        <div style={container}>
          <h4>New Location</h4>
          <label>
            <strong>Event:</strong>
          </label>{" "}
          <label>{values.name} </label>
          <label>
            <strong>Description:</strong>
          </label>{" "}
          <label>{values.description} </label>
          <label>
            <strong>Location Website:</strong>
          </label>{" "}
          <label>{values.eventURL} </label>
          <label>
            <strong>Location Image URL:</strong>
          </label>{" "}
          <label>{values.imageURL} </label>
          <label>
            <strong>Lat Lon:</strong>
          </label>{" "}
          <label>{values.latLon} </label>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              backgroundColor: "#e3f2fd",
            }}
          >
            <MyButton
              text={"Save Location"}
              onClick={onAddEvent}
              cn={buttonCSS}
            />
            <MyButton
              text={"Go Back to Add"}
              onClick={onCancelAdd}
              cn={buttonCSS}
            />
          </div>
        </div>
      )}
    </>
  );
}
const buttonCSS = {
  backgroundColor: "#FFFAFA",
  width: "7rem",
  fontSize: ".9rem",
  borderColor: "#e3f2fd",
  borderRadius: "5px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
};
const container = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  maxWidth: "35rem",
  margin: ".5rem auto",
  overflow: "auto",
  minHeight: "90px",
  padding: ".5rem",
  borderRadius: "5px",
};
export default EditLocation;
