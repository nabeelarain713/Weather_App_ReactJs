import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a target="_blank" href="https://github.com/nabeelarain713/Weather_App_ReactJs.git">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://github.com/nabeelarain713">
          Nabeel Arain
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
