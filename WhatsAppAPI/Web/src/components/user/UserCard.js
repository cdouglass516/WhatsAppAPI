import React from "react";
import MyButton from "../elements/MyButton";
import { GetAllUsers } from "../../modules/userModule";
function UserCard({ user, userId, editUser }) {
  const [isEdit, setIsEdit] = React.useState(false);
  const [isDelete, setIsDelete] = React.useState(false);
  const [values, setValues] = React.useState({
    userName: "",
    firstName: "",
    lastName: "",
    roleId: 1,
    firebaseId: "",
    email: "",
    imageLocation: "",
  });
  const btnDel = (id) => {
    alert(`Delete ${user.fullName}`);
  };
  const btnEdit = (id) => {
    setValues(user);
    setIsEdit(true);
  };

  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default submission
    try {
      setIsEdit(false);
      editUser(values);
      //setLocationReady(true);
    } catch (e) {
      alert(`Event Creation failed! ${e.message}`);
    }
  };

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };
  return (
    <>
      <div style={container}>
        {isEdit && (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <form onSubmit={onSubmit}>
              <div>
                <h4>User Edit</h4>

                <label style={{ width: "9rem" }}>userName:</label>
                <input
                  style={{ width: "14rem", fontSize: ".8rem" }}
                  value={values.userName}
                  onChange={set("userName")}
                />
              </div>
              <div>
                <label style={{ width: "9rem" }}>First Name:</label>
                <input
                  style={{ width: "14rem", fontSize: ".8rem" }}
                  value={values.firstName}
                  onChange={set("firstName")}
                />
              </div>
              <div>
                <label style={{ width: "9rem" }}>Last Name:</label>
                <input
                  style={{ width: "14rem", fontSize: ".8rem" }}
                  value={values.lastName}
                  onChange={set("lastName")}
                />
              </div>
              <div>
                <label style={{ width: "9rem" }}>Role Id:</label>
                <input
                  style={{ width: "14rem", fontSize: ".8rem" }}
                  value={values.roleId}
                  onChange={set("roleId")}
                />
              </div>
              <div>
                <label style={{ width: "9rem" }}>Firebase Id</label>
                <input
                  style={{ width: "14rem", fontSize: ".8rem" }}
                  value={values.firebaseId}
                  onChange={set("firebaseId")}
                />
              </div>
              <div>
                <label style={{ width: "9rem" }}>Email:</label>
                <input
                  style={{ width: "14rem", fontSize: ".8rem" }}
                  value={values.email}
                  onChange={set("email")}
                />
              </div>
              <div>
                <label style={{ width: "9rem" }}>Image Location</label>
                <input
                  style={{ width: "14rem", fontSize: ".8rem" }}
                  value={values.imageLocation}
                  onChange={set("imageLocation")}
                />
              </div>

              <button
                style={{ padding: ".3rem", marginTop: "1rem" }}
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        )}
        {!isEdit && (
          <div>
            <div style={{ width: "20rem" }}>
              <label>Name :</label>
              {user.fullName}
            </div>
            <div>
              <label> email :</label>
              {user.email}
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <MyButton
                cn={buttonCSS}
                text={"Edit"}
                onClick={() => btnEdit(user.id)}
              />
              <MyButton
                cn={buttonCSS}
                text={"Delete"}
                onClick={() => btnDel(user.id)}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
const buttonCSS = {
  backgroundColor: "#FFFAFA",
  width: "7rem",
  fontSize: ".9rem",
  borderColor: "#eee",
  borderRadius: "5px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
};
const container = {
  background: "#edf7fa",
  maxWidth: "35rem",
  margin: ".5rem auto",
  overflow: "auto",
  minHeight: "6rem",
  border: "1px solid darkblue",
  padding: ".5rem",
  borderRadius: "5px",
};
export default UserCard;
