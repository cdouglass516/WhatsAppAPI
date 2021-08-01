import React from "react";
import MyButton from "../elements/MyButton";
import { useHistory } from "react-router";

function AdminNav({ isAdmin }) {
  const history = useHistory();
  const onBtnClick = () => {
    history.push("/eventform");
  };
  return (
    <div>
      <div style={{ backgroundColor: "#e3f2fd" }}>
        <ul className="nav nav-pills nav-fill nb_width">
          <li className="nav-item ">
            <MyButton
              text={"Add Event"}
              cn={buttonCSS}
              onClick={onBtnClick}
            ></MyButton>
          </li>

          <li className="nav-item ">
            <MyButton
              text={"My Events"}
              cn={buttonCSS}
              onClick={onBtnClick}
            ></MyButton>
          </li>
          {isAdmin && (
            <li className="nav-item ">
              <MyButton
                text={"User Admin"}
                cn={buttonCSS}
                onClick={onBtnClick}
              ></MyButton>
            </li>
          )}
          {isAdmin && (
            <li className="nav-item">
              {" "}
              <MyButton
                text={"Locations"}
                cn={buttonCSS}
                onClick={onBtnClick}
              ></MyButton>
            </li>
          )}
        </ul>
      </div>
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
export default AdminNav;
