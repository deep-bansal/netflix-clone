import React, { Fragment } from "react";
import Carousal from "./Carousal";
import "../styles/main.css";
import Navbar from "./Navbar";

function Main() {
  return (
    <Fragment>
      <Navbar />
      <div className="main">
        <h1>
          LOCK
          <br /> AND KEY
        </h1>
        <div id="buttons">
          <button type="button" className="btn btn-light">
            <i className="fas fa-play"></i> &nbsp; Play
          </button>
          <button type="button" className="btn btn-secondary">
            <i className="fas fa-info-circle"></i> &nbsp;More Info
          </button>
        </div>
      </div>
      <h4 className="heads">Popular on Netflix</h4>
      <Carousal />
    </Fragment>
  );
}

export default Main;
