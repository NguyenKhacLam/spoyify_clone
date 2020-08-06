import React from "react";
import "./../styles/Body.css";
import Header from "./Header";

function Body({ spotify }) {
  return (
    <div className="body">
      <Header spotify={spotify} />
      <h1>Body</h1>
    </div>
  );
}

export default Body;
