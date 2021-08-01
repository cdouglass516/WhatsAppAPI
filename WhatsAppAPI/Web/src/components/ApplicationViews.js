import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Register from "./login/Register";

import Add from "./addComponent/Add";
import Login from "./login/Login";
import EventList from "./Event/ExentList";
import Admin from "./admin/Admin";
import EventForm from "../components/admin/EventForm";
export default function ApplicationViews({
  isLoggedIn,
  setIsLoggedIn,
  setOnAdmin,
}) {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          <Add setOnAdmin={setOnAdmin} />
          <EventList />
        </Route>
        <Route path="/admin" exact>
          {isLoggedIn ? (
            <Admin isLoggedIn={isLoggedIn} setOnAdmin={setOnAdmin} />
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
