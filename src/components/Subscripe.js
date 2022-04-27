import React from "react";
import "../assets/sass/subscripe.scss";

function Subscripe() {
  return (
    <div>
      <div className="subscripe">
        <img src={require("../assets/img/h3-video-img.jpg")} alt="logo" />
        <h2>Join The Colorful Bunch!</h2>
        <div className="buttons">
          <input className="form-control" type="text" />
          <button>Subscripe</button>
        </div>
      </div>
    </div>
  );
}

export default Subscripe;
