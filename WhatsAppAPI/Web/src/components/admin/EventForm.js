import React from "react";
import { Cloudinary } from "cloudinary-core";
import MyButton from "../elements/MyButton";
import firebase from "firebase/app";
import "firebase/auth";
import { useLocation } from "react-router-dom";
import { saveFormData, getEventById } from "../../modules/eventModule";
import { getFBUserID, getUserRole } from "../../modules/authManager";
import { getAll } from "../../modules/locationModule";
import { getEventTypes } from "../../modules/eventModule";
import { useHistory } from "react-router";

function EventForm({ setOnAdmin, curUserId }) {
  const eventId = useLocation();
  const history = useHistory();
  const [eventReady, setEventReady] = React.useState(false);
  const [locations, setLocations] = React.useState([]);
  const [eventTypes, setEventTypes] = React.useState([]);
  const [curUser, setCurUser] = React.useState(0);
  const getLocations = () => {
    getAll().then((locs) => setLocations(locs));
  };

  const getETs = () => {
    getEventTypes().then((ets) => setEventTypes(ets));
  };
  React.useEffect(() => {
    getETs();
  }, []);

  React.useEffect(() => {
    getLocations();
  }, []);

  React.useEffect(() => {
    setOnAdmin(false);
  }, []);
  const getRole = () => {
    getUserRole(getFBUserID()).then((user) => setCurUser(user.id));
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
    getRole();
  }, []);
  const [values, setValues] = React.useState({
    Name: "",
    Description: "",
    EventURL: "",
    EventImageURL: "",
    LocationId: 0,
    EventTypeId: 0,
    EndDate: "",
    StartDate: "",
  });
  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };
  const onAddEvent = async (event) => {
    try {
      values.FirebaseId = firebase.auth().currentUser.uid;
      values.UserId = curUser;
      values.Id = 0;
      values.EndDate = values.EndDate;
      values.StartDate = values.StartDate;
      saveFormData(values).then(() => {
        alert("Your event was successfully submitted!");
        history.push(`/myevents`);
        setValues({
          Name: "",
          Description: "",
          EventURL: "",
          EventImageURL: "",
          LocationId: 0,
          EventTypeId: 0,
          EndDate: "",
          StartDate: "",
        });
      });
    } catch (e) {
      alert(`Add Event failed! ${e.message}`);
    }
  };

  const onCancelAdd = async (event) => {
    try {
      setEventReady(false);
    } catch (e) {
      alert(`Event Creation failed! ${e.message}`);
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
            <h4>Enter Event {eventReady}</h4>

            <label>Event Label:</label>
            <input value={values.Name} onChange={set("Name")} />

            <label>Description:</label>
            <textarea
              value={values.Description}
              onChange={set("Description")}
            />

            <label>Start Date and Time:</label>
            <input
              type="datetime-local"
              value={values.StartDate}
              onChange={set("StartDate")}
            />

            <label>End Date and Time:</label>
            <input
              type="datetime-local"
              value={values.EndDate}
              onChange={set("EndDate")}
            />

            <label>Event Website*:</label>
            <input value={values.EventURL} onChange={set("EventURL")} />

            <label>Image URL*:</label>
            <input value={values.ImageURL} onChange={set("EventImageURL")} />

            <label>Location:</label>
            <select value={values.LocationId} onChange={set("LocationId")}>
              <option value="">Select location</option>
              {locations.map((c) => (
                <option value={c.id} key={c.id}>
                  {c.name}
                </option>
              ))}
            </select>

            <label>Event Type:</label>
            <select value={values.EventTypeId} onChange={set("EventTypeId")}>
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
          <h4>New Event</h4>
          <label>
            <strong>Event:</strong>
          </label>{" "}
          <label>{values.Name} </label>
          <label>
            <strong>Description:</strong>
          </label>{" "}
          <label>{values.Description} </label>
          <label>
            <strong>Event Type:</strong>
          </label>{" "}
          <label>{values.EventTypeId} </label>
          <label>
            <strong>Start Date and Time:</strong>{" "}
          </label>
          <label>{values.StartDate} </label>
          <label>
            <strong>End Date and Time:</strong>
          </label>{" "}
          <label>{values.EndDate} </label>
          <label>
            <strong>Event URL:</strong>
          </label>{" "}
          <label>{values.EventURL} </label>
          <label>
            <strong>Image URL:</strong>
          </label>{" "}
          <label>{values.EventImageURL} </label>
          <label>
            <strong>Location:</strong>
          </label>{" "}
          <label>{values.LocationId} </label>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              backgroundColor: "#e3f2fd",
            }}
          >
            <MyButton
              text={"Add the Event"}
              onClick={onAddEvent}
              cn={buttonCSS}
            />
            <MyButton
              text={"Go Back to Edit"}
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
export default EventForm;
