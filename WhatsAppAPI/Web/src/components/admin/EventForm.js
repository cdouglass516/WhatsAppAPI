import React from "react";
import { Cloudinary } from "cloudinary-core";
import MyButton from "../elements/MyButton";
import firebase from "firebase/app";
import "firebase/auth";
import { saveFormData } from "../../modules/eventModule";
const eventTypes = [
  { id: 1, type: "Show" },
  { id: 2, type: "Food Special" },
  { id: 3, type: "Movie" },
  { id: 4, type: "Sale" },
  { id: 5, type: "Speaker" },
  { id: 6, type: "Sporting" },
  { id: 7, type: "Drink or bar" },
  { id: 8, type: "Other" },
];
const locations = [
  { id: 1, location: "Dee's Country Cocktail Lounge" },
  { id: 2, location: "Ascend amphitheater" },
];
function EventForm({ setOnAdmin, curUserId }) {
  const [eventReady, setEventReady] = React.useState(false);
  React.useEffect(() => {
    setOnAdmin(false);
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
      values.UserId = 0;
      values.Id = 0;
      values.EndDate = fixDate(values.EndDate);
      values.StartDate = fixDate(values.StartDate);
        saveFormData(values)
        .then(()=>{
                  alert("Your event was successfully submitted!");
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
        })

    } catch (e) {
      alert(`Add Event failed! ${e.message}`);
    }
  }
  const fixDate = (dte) =>{
    let dteTime = dte.split('t');
    return dteTime[0].replace('-','') + dteTime[1]+':00';
    //2021-08-01T21:33
  }
  const onCancelAdd = async (event) => {
    try {
      setEventReady(false);
    } catch (e) {
      alert(`Registration failed! ${e.message}`);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default submission
    try {
      setEventReady(true);
    } catch (e) {
      alert(`Registration failed! ${e.message}`);
    }
  };

  return (
    <>
      {!eventReady && <div>
        <form style={container} onSubmit={onSubmit}>
          <h4>Enter Event {eventReady} ok</h4>

          <label>Event Label:</label>
          <input value={values.Name} onChange={set("Name")} />

          <label>Description:</label>
          <textarea value={values.Description} onChange={set("Description")} />

          <label>Start Date and Time:</label>
          <input type="datetime-local" value={values.StartDate} onChange={set("StartDate")}/>

          <label>End Date and Time:</label>
          <input type="datetime-local" value={values.EndDate} onChange={set("EndDate")}/>

          <label>Event Website:</label>
          <input value={values.EventURL} onChange={set("EventURL")} />

          <label>Image URL*:</label>
          <input value={values.ImageURL} onChange={set("EventImageURL")} />

          <label>Location:</label>
          <select value={values.LocationId} onChange={set("LocationId")}>
            <option value="">Select location</option>
            {locations.map((c) => (
              <option key={c.id}>{c.location}</option>
            ))}
          </select>

          <label>Event Type:</label>
          <select value={values.EventTypeId} onChange={set("EventTypeId")}>
            <option value="">Select event type</option>
            {eventTypes.map((e) => (
              <option key={e.id}>{e.type}</option>
            ))}
          </select>
          <button style={{ padding: ".3rem", marginTop: "1rem" }} type="submit">
            Submit
          </button>
        </form>
      </div>
      }
 
      {eventReady && <div style={container} >
           <h4>New Event</h4>
           <label><strong>Event:</strong></label> <label>{values.Name} </label>
           <label><strong>Description:</strong></label> <label>{values.Description} </label>
           <label><strong>Event Type:</strong></label> <label>{values.EventTypeId} </label>
           <label><strong>Start Date and Time:</strong> </label><label>{values.StartDate} </label>
           <label><strong>End Date and Time:</strong></label> <label>{values.EndDate} </label>
           <label><strong>Event URL:</strong></label> <label>{values.EventURL} </label>
           <label><strong>Image URL:</strong></label> <label>{values.EventImageURL} </label>
           <label><strong>Location:</strong></label> <label>{values.LocationId} </label>
           <div style={{display: "flex", justifyContent:"space-around",backgroundColor: "#e3f2fd"}}>
              <MyButton text={"Add the Event"} onClick={onAddEvent} cn={buttonCSS}/>
              <MyButton text={"Go Back to Edit"} onClick={onCancelAdd}  cn={buttonCSS}/>
           </div>
        </div>
        
      }
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
