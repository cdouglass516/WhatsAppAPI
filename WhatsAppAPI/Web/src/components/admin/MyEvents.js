import React from "react";
import MyEventCard from "./MyEventCard";
import {
  getEventByUserId,
  cancelEvent,
  deleteEvent,
} from "../../modules/eventModule";
import { getFBUserID, getUserRole } from "../../modules/authManager";
import MyButton from "../elements/MyButton";
import { useHistory } from "react-router";

function MyEvents() {
  const history = useHistory();
  const [events, setEvents] = React.useState([]);
  const getEvents = (id) => {
    getEventByUserId(id).then((evs) => setEvents(evs));
  };
  const cancel = (id) => {
    cancelEvent(id).then(() => history.push("/admin/"));
  };
  const deleteEv = (id) => {
    deleteEvent(id).then(() => history.push("/admin/"));
  };
  const onBtnClick = () => {
    history.push("/eventform/");
  };
  const getRole = () => {
    getUserRole(getFBUserID()).then((user) => {
      getEvents(user.id);
    });
  };

  React.useEffect(() => {
    getRole();
  }, []);

  return (
    <div style={eventList}>
      <li className="nav-item ">
        <MyButton
          text={"Add Event"}
          cn={buttonCSS}
          onClick={onBtnClick}
        ></MyButton>
      </li>
      {events.map((ev) => (
        <MyEventCard key={ev.id} ev={ev} cancel={cancel} deleteEv={deleteEv} />
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
export default MyEvents;
