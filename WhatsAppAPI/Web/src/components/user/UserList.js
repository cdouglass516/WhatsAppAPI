import React from "react";
import { getFBUserID, getUserRole } from "../../modules/authManager";
import { GetAllUsers, editFormData } from "../../modules/userModule";
import UserCard from "./UserCard";
function UserList(props) {
  const [users, setUsers] = React.useState([]);
  const [userProfile, setUserProfile] = React.useState({
    id: 0,
    fullName: "",
    roleId: 0,
    email: "",
    imageLocation: "",
  });
  const getUsers = (id) => {
    GetAllUsers(id).then((users) => setUsers(users));
  };
  const editUser = (user) => {
    editFormData(user, 1).then(() => getRole());
  };
  const [isAdmin, setIsAdmin] = React.useState(false);
  const getRole = () => {
    getUserRole(getFBUserID()).then((user) => {
      setUserProfile({
        ...userProfile,
        id: user.id,
        fullName: user.fullName,
        roleId: user.roleId,
        email: user.email,
        imageLocation: user.imageLocation,
      });
      getUsers(user.id);
      if (user.roleId === 9) {
        setIsAdmin(true);
      }
    });
  };

  React.useEffect(() => {
    getRole();
  }, []);
  return (
    <div style={eventList}>
      {users.map((ev) => (
        <div>
          <UserCard
            userId={userProfile.id}
            key={ev.id}
            user={ev}
            editUser={editUser}
          />
        </div>
      ))}
    </div>
  );
}
const eventList = {
  maxWidth: "35.5rem",
  margin: "5px auto",
  overflow: "auto",
  minHeight: "300px",
  border: "1px dashed steelblue",
  padding: "5px",
  borderRadius: "5px",
};
export default UserList;
