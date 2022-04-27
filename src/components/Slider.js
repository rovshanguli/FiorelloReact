import React from "react";
import "../assets/sass/slider.scss";

function Slider() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner exam">
          <div class="carousel-item active">
            <img
              src={require("../assets/img/h3-slider-background-2.jpg")}
              className="d-block w-100"
              alt="sk"
            />
          </div>
          <div class="carousel-item">
            <img
              src={require("../assets/img/h3-slider-background.jpg")}
              className="d-block w-100"
              alt="..KSM."
            />
          </div>
          <div class="carousel-item">
            <img
              src={require("../assets/img/h3-slider-background-3.jpg")}
              className="d-block w-100"
              alt="SSS"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div className="write">
        <h1>Send <b style={{color:"red"}}>flowers</b> like you mean it</h1>
        <p>
          Where flowers are our inspiration to create lasting memories. Whatever
          the occasion, our flowers will make it special cursus a sit amet
          mauris.
        </p>
        <img src={require("../assets/img/h2-sign-img.png")} alt="logo" />

      </div>
    </div>
  );
}

export default Slider;
