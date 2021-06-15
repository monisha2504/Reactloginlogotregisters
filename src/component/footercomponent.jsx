import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="footer foot">
          <div class="container bottom_border">
            <div class="row">
              <div class=" col-sm-4 col-md col-sm-4  col-12 col">
                <h5 class="headin5_amrc col_white_amrc pt2">About Us</h5>
                {}
                <p class="mb10">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    www.LoginLogoutRegister.com
                  </Link>
                </p>
              </div>

              <div class=" col-sm-4 col-md  col-6 col">
                <h5 class="headin5_amrc col_white_amrc pt2">Quick links</h5>
                {}
                <ul class="footer_ul_amrc">
                  <li>
                    <a href="http://webenlance.com">Contact Us</a>
                  </li>
                  <li>
                    <a href="http://webenlance.com">About Us</a>
                  </li>
                  <li>
                    <a href="http://webenlance.com">Careers</a>
                  </li>
                  <li>
                    <a href="http://webenlance.com">Services</a>
                  </li>
                  <li>
                    <a href="http://webenlance.com">Pricing</a>
                  </li>
                  <li>
                    <a href="http://webenlance.com">Blog</a>
                  </li>
                </ul>
              </div>

              <div class=" col-sm-4 col-md  col-6 col">
                <h5 class="headin5_amrc col_white_amrc pt2">Let Us Help You</h5>
                <ul class="footer_ul_amrc">
                  <li>
                    <a href="">COVID-19 updates</a>
                  </li>
                  <li>
                    <a href="">Your Account</a>
                  </li>
                  <li>
                    <li>
                      <a href="">Safe Delivery</a>
                    </li>
                    <a href="http://webenlance.com">Queries</a>
                  </li>
                  <li>
                    <a href="http://webenlance.com">FAQs</a>
                  </li>
                  <li>
                    <a href="http://webenlance.com">Support</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="container">
            <ul class="foote_bottom_ul_amrc">
              <li>
                <a href="http://webenlance.com">Home</a>
              </li>
              <li>
                <a href="http://webenlance.com">About</a>
              </li>
              <li>
                <a href="http://webenlance.com">Services</a>
              </li>
              <li>
                <a href="http://webenlance.com">Pricing</a>
              </li>
              <li>
                <a href="http://webenlance.com">Blog</a>
              </li>
              <li>
                <a href="http://webenlance.com">Contact</a>
              </li>
            </ul>
            <p class="text-center">
              Copyright @2021 |{" "}
              <a href="#">MedEasy Pvt. Ltd. All rights are reserved</a>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
