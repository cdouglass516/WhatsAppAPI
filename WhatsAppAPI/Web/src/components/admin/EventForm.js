import React from "react";
import { Cloudinary } from "cloudinary-core";
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
function EventForm({ setOnAdmin }) {
  React.useEffect(() => {
    setOnAdmin(false);
  }, []);
  const [values, setValues] = React.useState({
    header: "",
    text: "",
    imageURL: "",
    location: 0,
    eventType: 8,
  });
  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };
  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default submission
    try {
      alert("submit: " + JSON.stringify(values));

      //   await saveFormData();
      //   alert("Your registration was successfully submitted!");
      //   setValues({
      //     name: "",
      //     color: "",
      //     age: "",
      //     habits: "",
      //   });
    } catch (e) {
      alert(`Registration failed! ${e.message}`);
    }
  };

  return (
    <>
      <div>
        <form style={container} onSubmit={onSubmit}>
          <h4>Enter Event</h4>

          <label>Event Label:</label>
          <input value={values.header} onChange={set("header")} />

          <label>Description:</label>
          <textarea value={values.text} onChange={set("text")} />

          <label>Image URL*:</label>
          <input value={values.imageURL} onChange={set("imageURL")} />

          <label>Location:</label>
          <select value={values.location} onChange={set("location")}>
            <option value="">Select location</option>
            {locations.map((c) => (
              <option key={c.id}>{c.location}</option>
            ))}
          </select>

          <label>Event Type:</label>
          <select value={values.eventType} onChange={set("eventType")}>
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
    </>
  );
}

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
