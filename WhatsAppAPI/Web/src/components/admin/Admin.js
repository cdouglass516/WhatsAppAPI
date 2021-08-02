import React, { useState } from "react";
import { useHistory } from "react-router";
import AdminNav from "./AdminNav";
import { getFBUserID, getUserRole } from "../../modules/authManager";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom/cjs/react-dom.development";
import firebase from "firebase/app";
import "firebase/auth";

function Admin({setOnAdmin,isLoggedIn }) {
  const [userProfile, setUserProfile] = useState({
    fullName: "",
    roleId: 0,
    email: "",
    imageLocation: "",
  });
  let userId = ""
  const [isAdmin, setIsAdmin] = useState(false);
  const getRole = () => {
    getUserRole(getFBUserID()).then((user) => {
      setOnAdmin(true);
      setUserProfile({
        ...userProfile,
        fullName: user.fullName,
        roleId: user.roleId,
        email: user.email,
        imageLocation: user.imageLocation,
      });
      userId = firebase.auth().currentUser.uid;
      if (userProfile.roleId === 9) {
        setIsAdmin(true);
      }
    });
  };

  React.useEffect(() => {
    getRole();
  }, []);
  return (
    <>
      <div style={admin}>
        <div>welcome {userProfile.fullName} </div>
        <AdminNav isAdmin={isAdmin} />
      </div>
      <div></div>
    </>
  );
}
const admin = {
  maxWidth: "35.5rem",
  margin: "5px auto",
  minHeight: "300px",
  border: "1px dashed steelblue",
  padding: "5px",
  borderRadius: "5px",
};
export default Admin;
