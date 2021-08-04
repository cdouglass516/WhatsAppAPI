import React from "react";
import { Cloudinary } from "cloudinary-core";
import MyButton from "../elements/MyButton";
import firebase from "firebase/app";
import "firebase/auth";
import { editFormData, getEventById } from "../../modules/eventModule";
import { getAll } from "../../modules/locationModule";
import { getEventTypes } from "../../modules/eventModule";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router";

function EventEdit({ setOnAdmin, curUserId }) {
  const history = useHistory();
  const [eventReady, setEventReady] = React.useState(false);
  const [locations, setLocations] = React.useState([]);
  const [eventTypes, setEventTypes] = React.useState([]);
  const [showButtons, setShowButtons] = React.useState(true);
  const [values, setValues] = React.useState({});
  const eventId = useLocation();
  const getLocations = () => {
    getAll().then((locs) => setLocations(locs));
  };

  const getETs = () => {
    getEventTypes().then((ets) => setEventTypes(ets));
  };
  React.useEffect(() => {
    getETs();
  }, [eventTypes]);

  React.useEffect(() => {
    getLocations();
  }, [locations]);

  React.useEffect(() => {
    setOnAdmin(false);
  }, []);

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };
  const getEditEvent = (id) => {
    getEventById(id).then((ev) =>
      setValues({
        ...values,
        id: ev.id,
        name: ev.name,
        description: ev.description,
        endDate: ev.endDate,
        eventImageURL: ev.eventImageURL,
        locationId: ev.locationId,
        eventTypeId: ev.eventTypeId,
        eventURL: ev.eventURL,
        startDate: ev.startDate,
      })
    );
  };

  React.useEffect(() => {
    ///editEvent/4
    let id = eventId.pathname.substr(11, eventId.pathname.length);
    getEditEvent(id);
  }, []);

  const onSaveEvent = async (event) => {
    try {
      values.firebaseId = firebase.auth().currentUser.uid;
      values.endDate = values.endDate;
      values.startDate = values.startDate;
      editFormData(values).then(() => {
        alert("Your event was successfully submitted!");
        history.push(`/myevents`);
        setShowButtons(false);
      });
    } catch (e) {
      alert(`Edit Event failed! ${e.message}`);
    }
  };

  const onCancelAdd = async (event) => {
    try {
      setEventReady(false);
    } catch (e) {
      alert(`Event Edit failed! ${e.message}`);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default submission
    try {
      setEventReady(true);
    } catch (e) {
      alert(`Event Creation failed! ${e.message}`);
    }
  };

  return (
    <>
      {!eventReady && (
        <div>
          <form style={container} onSubmit={onSubmit}>
            <h4>Edit Event {eventReady}</h4>

            <label>Event Label:</label>
            <input value={values.name} onChange={set("name")} />

            <label>Description:</label>
            <textarea
              value={values.description}
              onChange={set("description")}
            />

            <label>Start Date and Time:</label>
            <input
              type="datetime-local"
              value={values.startDate}
              onChange={set("startDate")}
            />

            <label>End Date and Time:</label>
            <input
              type="datetime-local"
              value={values.endDate}
              onChange={set("endDate")}
            />

            <label>Event Website*:</label>
            <input value={values.eventURL} onChange={set("eventURL")} />

            <label>Image URL*:</label>
            <input
              value={values.eventImageURL}
              onChange={set("eventImageURL")}
            />

            <label>Location:</label>
            <select value={values.locationId} onChange={set("locationId")}>
              <option value="">Select location</option>
              {locations.map((c) => (
                <option value={c.id} key={c.id}>
                  {c.name}
                </option>
              ))}
            </select>

            <label>Event Type:</label>
            <select value={values.eventTypeId} onChange={set("eventTypeId")}>
              <option value="">Select event type</option>
              {eventTypes.map((e) => (
                <option value={e.id} key={e.id}>
                  {e.description}
                </option>
              ))}
            </select>
            <button
              style={{ padding: ".3rem", marginTop: "1rem" }}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      )}

      {eventReady && (
        <div style={container}>
          <h4>Changed Event</h4>
          <label>
            <strong>Event:</strong>
          </label>{" "}
          <label>{values.name} </label>
          <label>
            <strong>Description:</strong>
          </label>{" "}
          <label>{values.description} </label>
          <label>
            <strong>Event Type:</strong>
          </label>{" "}
          <label>{values.eventTypeId} </label>
          <label>
            <strong>Start Date and Time:</strong>{" "}
          </label>
          <label>{values.startDate} </label>
          <label>
            <strong>End Date and Time:</strong>
          </label>{" "}
          <label>{values.endDate} </label>
          <label>
            <strong>Event URL:</strong>
          </label>{" "}
          <label>{values.eventURL} </label>
          <label>
            <strong>Image URL:</strong>
          </label>{" "}
          <label>{values.eventImageURL} </label>
          <label>
            <strong>Location:</strong>
          </label>{" "}
          <label>{values.locationId} </label>
          {showButtons && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                backgroundColor: "#e3f2fd",
              }}
            >
              <MyButton
                text={"Add the Event"}
                onClick={onSaveEvent}
                cn={buttonCSS}
              />
              <MyButton
                text={"Go Back to Edit"}
                onClick={onCancelAdd}
                cn={buttonCSS}
              />
            </div>
          )}
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
export default EventEdit;
