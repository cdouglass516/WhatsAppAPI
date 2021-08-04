import React from "react";
function DateComponent({ type, date }) {
  const formatDate = (date) => {
    let time = "";
    if (date.substr(11, 2) > 12) {
      time = (date.substr(11, 2) - 12).toString() + date.substr(13, 3) + " pm";
    } else {
      time = date.substr(11, 2);
      if (date.substr(11, 2) === "00") {
        time = "12";
      }
      time += date.substr(13, 3) + " am";
    }

    return date.substr(5, 2) + "/" + date.substr(8, 2) + " - " + time;
  };
  //2021-07-30T00:00:00
  React.useEffect(() => {
    formatDate(date);
  }, []);
  return (
    <div>
      <span>
        <label>{type}: </label>
        {formatDate(date)}
      </span>
    </div>
  );
}

export default DateComponent;
