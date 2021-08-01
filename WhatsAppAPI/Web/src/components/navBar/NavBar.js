/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Input } from "reactstrap";

import "react-datepicker/dist/react-datepicker.css";
import Logo from "../elements/Logo";
export const NavBar = ({ setBaseUrl, setAddPost }) => {
  const [date, setDate] = React.useState(new Date());
  const [search, setSearch] = React.useState("");
  const [seeSearch, setSeeSearch] = React.useState(false);
  const [seeDate, setSeeDate] = React.useState(false);
  const handleDateChange = (date) => {
    setDate(date);
    setBaseUrl(
      "/api/Video/hottest?searchDate=" +
        encodeURIComponent(getFormattedDate(date)) +
        "&sortDesc=true"
    );
  };
  const handleSearch = (e) => {
    setBaseUrl(
      "/api/Video/search?q=" + encodeURIComponent(search) + "&sortDesc=true"
    );
  };

  const getFormattedDate = (date) => {
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;

    return month + "/" + day + "/" + year;
  };

  return (
    <div className=" nav-color  container">
      <Logo />
      <nav className="navbar flex-md-nowrap p-0 ">
        <ul className="nav nav-pills nav-fill nb_width">
          <li className="nav-item"></li>
          <li className="nav-item ">
            <a
              className="nav-link navbar_link "
              href="#"
              alt="Search Videos"
              onClick={() => setSeeSearch(true)}
            >
              Search Videos
            </a>
          </li>

          <li className="nav-item ">
            <a
              className="nav-link navbar_link "
              href="#"
              alt="Get by date"
              onClick={() => setSeeDate(true)}
            >
              Search By Date
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
