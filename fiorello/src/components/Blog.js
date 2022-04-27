import React from "react";
import "../assets/sass/blog.scss";

function Blog() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="header">
            <h1>From our Blog</h1>
            <p>
              A perfect blend of creativity, energy, communication, happiness
              and love. Let us arrange a smile for you.
            </p>
          </div>
          <div className="imgs">
          <div className="col-4">
            <img
              src={require("../assets/img/blog-feature-img-1.jpg")}
              alt="logo"
            />
            <h5>Flower Power</h5>
            <p className="finish">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per</p>
          </div>
          <div className="col-4">
            <img
              src={require("../assets/img/blog-feature-img-1.jpg")}
              alt="logo"
            />
            <h5>Flower Power</h5>
            <p className="finish">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per</p>
          </div>
          <div className="col-4">
            <img
              src={require("../assets/img/blog-feature-img-1.jpg")}
              alt="logo"
            />
            <h5>Flower Power</h5>
            <p className="finish">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per</p>
          </div>
          </div>
        
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Blog;
