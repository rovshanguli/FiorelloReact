import React from "react";
import "../assets/sass/menu.scss";

function Menu() {
  return (
    <div className="container">
      <div className="row">
        <div className="navbars">
        <img src={require("../assets/img/logo.png")} alt="logo" />
            <ul>
              <li>HOME</li>
              <li>PAGES</li>
              <li>SHOP</li>
              <li>PORTFOLIO</li>
              <li>BLOG</li>
              <li>ELEMENTS</li>
              <li>
              <i class="fas fa-search"></i>
              </li>
              <li>
              <i class="fas fa-shopping-basket"></i>   <span>CART(0)</span>
              </li>
            </ul>

            
        </div>
      </div>
    </div>
  );
}

export default Menu;
