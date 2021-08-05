import React from "react";
import { useHistory } from "react-router";
import MyButton from "./MyButton";
import { logout } from "../../modules/authManager";
function Logo({ isLoggedIn, setIsLoggedIn, admin }) {
  const history = useHistory();
  let btnText = !admin ? "Admin" : "Back";
  const btnClick = () => {
    history.push("/admin");
  };
  const btnLOClick = () => {
    logout();
    setIsLoggedIn(false);
    history.push("/");
  };
  const btnADClick = (e) => {
    if (e === "Admin") {
      history.push("/admin");
    } else {
      history.push("/");
    }
  };

  // if (window.location.pathname === "/admin") {
  //   setOnAdmin(true);
  //   // btnText = "Back";
  // }
  return (
    <div style={logoCSS}>
      <div>
        {isLoggedIn && (
          <MyButton
            id={"AdminButton"}
            text={"Home"}
            cn={buttonLOCSS}
            onClick={() => btnADClick("")}
          />
        )}
      </div>
      <div>
        <img
          src="https://i.ibb.co/gdJ2LLZ/logo.png"
          alt="logo"
          border="0"
          style={logoContainerCSS}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {isLoggedIn && (
          <MyButton
            id={"AdminButton"}
            text={"Admin"}
            cn={buttonLOCSS}
            onClick={() => btnADClick("Admin")}
          />
        )}
        {!isLoggedIn && (
          <MyButton text="Login" cn={buttonCSS} onClick={btnClick} />
        )}
        {isLoggedIn && (
          <MyButton text="Logout" cn={buttonLOCSS} onClick={btnLOClick} />
        )}
      </div>
    </div>
  );
}
const buttonLOCSS = {
  backgroundColor: "lightgrey",
  minWidth: "12rem;",
  marginRight: "5px",
  height: "1.2rem",
  fontSize: ".6rem",
};
const buttonCSS = {
  backgroundColor: "lightblue",
  width: "4rem;",
  height: "1.2rem",
  fontSize: ".6rem",
};
const logoCSS = {
  display: "flex",
  justifyContent: "space-around",
  maxWidth: "35rem",
  margin: ".5rem auto",
  overflow: "auto",
  minHeight: "90px",
  padding: ".5rem",
  borderRadius: "5px",
};
const logoContainerCSS = {
  width: "150px",
  height: "90px",
};
export default Logo;
