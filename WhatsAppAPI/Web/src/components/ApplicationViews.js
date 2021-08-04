import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Register from "./login/Register";
import Location from "./location/Location";
import Add from "./addComponent/Add";
import Login from "./login/Login";
import EventList from "./Event/ExentList";
import Admin from "./admin/Admin";
import EventForm from "../components/admin/EventForm";
import AddLocation from "../components/location/AddLocation";
import EditLocation from "./location/EditLocation";
import MyEvents from "./admin/MyEvents";
import EventEdit from "./Event/EventEdit";
import UserList from "./user/UserList";
export default function ApplicationViews({
  isLoggedIn,
  setIsLoggedIn,
  setOnAdmin,
}) {
  const [addItem, setAddItem] = React.useState(1);
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          {/* <Add
            setOnAdmin={setOnAdmin}
            addItem={addItem}
            setAddItem={setAddItem}
          /> */}
          <EventList addItem={addItem} />
        </Route>
        <Route path="/admin" exact>
          {isLoggedIn ? (
            <Admin isLoggedIn={isLoggedIn} setOnAdmin={setOnAdmin} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/addLocation" exact>
          {isLoggedIn ? (
            <AddLocation isLoggedIn={isLoggedIn} setOnAdmin={setOnAdmin} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/useradmin" exact>
          {isLoggedIn ? (
            <UserList isLoggedIn={isLoggedIn} setOnAdmin={setOnAdmin} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/myevents">
          {isLoggedIn ? (
            <MyEvents isLoggedIn={isLoggedIn} setOnAdmin={setOnAdmin} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/eventform" exact>
          {isLoggedIn ? (
            <EventForm isLoggedIn={isLoggedIn} setOnAdmin={setOnAdmin} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/editEvent/">
          {isLoggedIn ? (
            <EventEdit isLoggedIn={isLoggedIn} setOnAdmin={setOnAdmin} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/locationedit/">
          {isLoggedIn ? (
            <EditLocation isLoggedIn={isLoggedIn} setOnAdmin={setOnAdmin} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/locations" exact>
          {isLoggedIn ? (
            <Location isLoggedIn={isLoggedIn} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </main>
  );
}
