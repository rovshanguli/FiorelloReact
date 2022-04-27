import React from "react";
import "../assets/sass/category.scss";

function Category() {
  return (
    <div className="container">
      <div className="row">
          <div className="sss">
          <div className="categories">
          <ul>
            <li>ALL</li>
            <li>PAPULAR</li>
            <li>WINTER</li>
            <li>VARIOUS</li>
            <li>EXORIC</li>
            <li>GREENS</li>
            <li>CACTUSES</li>
          </ul>
          <div className="filter">
            <p>FILTER</p>
          </div>
        </div>
        <div className="images">
          <div className="Col-3">
            <img src={require("../assets/img/shop-14-img.jpg")} alt="logo" />
            <p>MAJESTY PALM</p>
            <button>Add to cart</button>
          </div>
          <div className="Col-3">
            <img src={require("../assets/img/shop-13-img.jpg")} alt="logo" />
            <p>MAJESTY PALM</p>
            <button>Add to cart</button>


          </div>
          <div className="Col-3">
            <img src={require("../assets/img/shop-12-img.jpg")} alt="logo" />
            <p>MAJESTY PALM</p>
            <button>Add to cart</button>


          </div>
          <div className="Col-3">
            <img src={require("../assets/img/shop-11-img.jpg")} alt="logo" />
            <p>MAJESTY PALM</p>
            <button>Add to cart</button>


          </div>
          <div className="Col-3">
            <img src={require("../assets/img/shop-13-img.jpg")} alt="logo" />
            <p>MAJESTY PALM</p>
            <button>Add to cart</button>


          </div>
          <div className="Col-3">
            <img src={require("../assets/img/shop-11-img.jpg")} alt="logo" />
            <p>MAJESTY PALM</p>
            <button>Add to cart</button>


          </div>
          <div className="Col-3">
            <img src={require("../assets/img/shop-12-img.jpg")} alt="logo" />
            <p>MAJESTY PALM</p>
            <button>Add to cart</button>


          </div>
          <div className="Col-3">
            <img src={require("../assets/img/shop-14-img.jpg")} alt="logo" />
            <p>MAJESTY PALM</p>
            <button>Add to cart</button>


          </div>
        </div>
          </div>
       
      </div>
    </div>
  );
}

export default Category;
