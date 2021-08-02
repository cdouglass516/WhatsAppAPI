import React from 'react';

function DateTimepker({ type }) {
    const onDateSubmit =() =>{
        let comp = document.getElementById({type});
        alert("Time Selected " + comp.nodeValue)
    }
    return (
        <>
          <div>
            <form style={container} onSubmit={onDateSubmit}>
                <input type="datetime-local" id={type} name={type}/>
            </form>
          </div>
        </>
      );
}
const container = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    maxWidth: "10rem",
    margin: ".5rem auto",
    overflow: "auto",
    padding: ".5rem",
    borderRadius: "5px",
  };
export default DateTimepker;