import React from "react";
import "../assets/sass/experts.scss";

function Experts() {
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="experts">
            <div className="header">
              <h1>Flower Experts</h1>
              <h5>
                A perfect blend of creativity, energy, communication, happiness
                and love. Let us arrange a smile for you.
              </h5>
            </div>
          </div>
        </div>
        <div className="row">
            
          <div className="col-3">
            <img src={require("../assets/img/h3-team-img-1.png")} alt="logo" />
            <p>CRYSTAL BROOKS</p>
            <h6>Florist</h6>
          </div>
          <div className="col-3">
            <img src={require("../assets/img/h3-team-img-2.png")} alt="logo" />
            <p>CRYSTAL BROOKS</p>
            <h6>Florist</h6>
          </div>
          <div className="col-3">
            <img src={require("../assets/img/h3-team-img-3.png")} alt="logo" />
            <p>CRYSTAL BROOKS</p>
            <h6>Florist</h6>
          </div>
          <div className="col-3">
            <img src={require("../assets/img/h3-team-img-4.png")} alt="logo" />
            <p>CRYSTAL BROOKS</p>
            <h6>Florist</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experts;
