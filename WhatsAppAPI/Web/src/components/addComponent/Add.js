import React, { useEffect } from "react";
import { getAdById } from "../../modules/adModule";
function Add({ setOnAdmin, addItem, setAddItem }) {
  const [ads, setAds] = React.useState({});
  React.useEffect(() => {
    getAdItems(addItem);
    setTimeout(myFunction, 5000);
  }, []);
  React.useEffect(() => {
    setOnAdmin(false);
  }, [addItem]);

  const getAdItems = (id) => {
    getAdById(id).then((ad) => setAds(ad));
  };
  const myFunction = () => {
    console.log("Timer Expired");
    setAddItem(addItem + 1);
    setTimeout(myFunction, 5000);
  };
  return (
    <>
      <div style={addContainer}>
        <img
          src="https://i.ibb.co/tCh74px/movie.jpg"
          alt="movie"
          border="0"
          style={addImage}
        />
        <div style={addText}>
          <h3>Ads go here</h3>
          <span>This is going to be insane</span>
        </div>
      </div>
    </>
  );
}
const addText = {
  margin: "5px",
  maxWidth: "30rem",
  padding: "10px 20px",
  cursor: "pointer",
};
const addImage = {
  height: 100,
  width: 125,
  objectFit: "contain",
};
const addContainer = {
  display: "flex",
  background: "#ede6e6",
  maxWidth: "35rem",
  margin: ".5rem auto",
  overflow: "auto",
  minHeight: "8rem",
  border: "1px solid darkred",
  padding: ".5rem",
  borderRadius: "5px",
};

export default Add;
//#edf7fa
