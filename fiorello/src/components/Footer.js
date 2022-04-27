import React from "react";
import "../assets/sass/footer.scss";

function Footer() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="footers">
            <div className="col-3">
              <ul>
                <li>
                  <b>CUSTOMER SERVICE</b>
                </li>
                <br />
                <li>Help Contact Us</li>
                <li>Returns Refunds</li>
                <li>Returns Refunds</li>
                <li>Returns Refunds</li>
              </ul>
            </div>
            <div className="col-3">
              <ul>
                <li>
                  <b>CUSTOMER SERVICE</b>
                </li>
                <br />
                <li>Help Contact Us</li>
                <li>Returns Refunds</li>
                <li>Returns Refunds</li>
                <li>Returns Refunds</li>
              </ul>
            </div>
            <div className="col-3">
              <ul>
                <li>
                  <b>CUSTOMER SERVICE</b>
                </li>
                <br />
                <li>Help Contact Us</li>
                <li>Returns Refunds</li>
                <li>Returns Refunds</li>
                <li>Returns Refunds</li>
              </ul>
            </div>
            <div className="col-3">
              <ul>
                <li>
                  <b>CUSTOMER SERVICE</b>
                </li>
                <br />
                <li>Help Contact Us</li>
                <li>Returns Refunds</li>
                <li>Returns Refunds</li>
                <li>Returns Refunds</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="links mt-5">
          <div className="col-4">
            <p>Powered by Bakhtiyar Shamilzada 2020</p>
          </div>
          <div className="col-4">
            <img
              src={require("../assets/img/footer-bottom-1.png")}
              alt="logo"
            />
          </div>
          <div className="col-4">
              <a href="">LINKEDIN</a>
              <a href="">FACEBOOK</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
