import React from "react";
import "./App.css";
import { Spinner } from "reactstrap";
import Logo from "./components/elements/Logo";
import { onLoginStatusChange } from "./modules/authManager";
import { BrowserRouter as Router } from "react-router-dom";
import ApplicationViews from "./components/ApplicationViews";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [onAdmin, setOnAdmin] = React.useState(false);
  React.useEffect(() => {
    onLoginStatusChange(setIsLoggedIn);
  }, []);
  // The "isLoggedIn" state variable will be null until //  the app's connection to firebase has been established.
  //  Then it will be set to true or false by the "onLoginStatusChange" function
  if (isLoggedIn === null) {
    // Until we know whether or not the user is logged in or not, just show a spinner
    return <Spinner className="app-spinner dark" />;
  }

  return (
    <Router>
      <Logo
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        admin={onAdmin}
      />
      <ApplicationViews
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setOnAdmin={setOnAdmin}
      />
    </Router>
  );
}

export default App;
