import React from "react";
import "../assets/sass/valentin.scss";

function Valentin() {
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="valentin">
            <div className="col-6">
              <img src={require("../assets/img/h3-video-img.jpg")} alt="logo" />
            </div>
            <div className="col-6">
              <p>Suprise Your Valentine! Let us arrange a smile.</p>
              <h5>Where flowers are our inspiration to create lasting memories. Whatever the occasion...</h5>
              <ul>
                  <li>
                  <i style={{color:"red"}} class="fas fa-heart"></i><span> Hand picked just for you.</span>
                  </li>
                  <li>
                  <i style={{color:"red"}} class="fas fa-heart"></i><span> Hand picked just for you.</span>
                  </li>
                  <li>
                  <i style={{color:"red"}} class="fas fa-heart"></i><span> Hand picked just for you.</span>
                  </li>
              </ul>
             
             


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Valentin;
