/* eslint-disable no-restricted-globals */
import ImgComonent from "../elements/ImgComonent";
import DateComponent from "../elements/DateComponent";
import MyButton from "../elements/MyButton";
import React from "react";
import { useHistory } from "react-router";
function MyEventCard({ ev, cancel, deleteEv }) {
  const history = useHistory();
  const [isEdit, setIsEdit] = React.useState(true);
  const [isDelete, setIsDelete] = React.useState(true);
  const [isCancel, setIsCancel] = React.useState(true);
  const [eventColor, setEventColor] = React.useState("");
  const [delButton, setDelButton] = React.useState("Delete");
  const [canButton, setCanButton] = React.useState("Cancel");
  const openDetail = (id) => {};
  const onEdit = () => {
    history.push(`/editEvent/${ev.id}`);
  };
  const onDelete = () => {
    deleteEv(ev.id);
  };
  const onCancel = () => {
    cancel(ev.id);
  };
  // current events "#53c68c";
  // past events  "#ffb3b3"
  // future events  "#99d6ff"
  React.useEffect(() => {
    var startDt = new Date(ev.startDate);
    startDt.setHours(startDt.getHours() + 1);
    var today = new Date();
    if (!ev.eventImageURL)
      ev.eventImageURL = "https://i.ibb.co/gdJ2LLZ/logo.png";
    setEventColor("#99d6ff");
    if (ev.name.substr(0, 2) === "CC") {
      setCanButton("un-Cancel");
    }
    if (ev.inActive === true) {
      setDelButton("un-Delete");
    }
    if (startDt < today) {
      //Past date
      setIsEdit(false);
      setIsCancel(false);
      setIsDelete(false);
      setEventColor("#ffb3b3");
    }
    if (startDt >= today && startDt < today.setHours(today.getHours() + 12)) {
      // Current Date
      setIsDelete(false);
      setIsEdit(false);
      setEventColor("#53c68c");
    }
  }, []);
  return (
    <>
      <div style={eventContainer} onClick={() => openDetail(ev.id)}>
        {ev.eventImageURL && (
          <ImgComonent url={ev.eventImageURL} sty={eventImage} />
        )}
        <div style={eventText}>
          <div style={{ backgroundColor: eventColor, minWidth: "20rem" }}>
            <h6>{ev.name}</h6>
            <span>{ev.description}</span>
            <DateComponent type={"Start Date"} date={ev.startDate} />
            <DateComponent type={"End Date"} date={ev.endDate} />
            {isEdit && (
              <MyButton text={"Edit Event"} onClick={onEdit} cn={buttonCSS} />
            )}
            {isCancel && (
              <MyButton text={canButton} onClick={onCancel} cn={buttonCSS} />
            )}
            {isDelete && (
              <MyButton text={delButton} onClick={onDelete} cn={buttonCSS} />
            )}
          </div>
        </div>
      </div>
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
const eventText = {
  margin: "5px",
  maxWidth: "30rem",
  padding: "10px 20px",
  cursor: "pointer",
};
const eventImage = {
  height: 90,
  width: 125,
  objectFit: "contain",
};
const eventContainer = {
  display: "flex",
  background: "#edf7fa",
  maxWidth: "35rem",
  margin: ".5rem auto",
  overflow: "auto",
  minHeight: "6rem",
  border: "1px solid darkblue",
  padding: ".5rem",
  borderRadius: "5px",
};
export default MyEventCard;
