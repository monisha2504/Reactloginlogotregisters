import React, { Component } from "react";
import HeaderComponent from "./headercomponent";
import FooterComponent from "./footercomponent";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <HeaderComponent />
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://businesswatchinc.com/wp-content/uploads/2020/01/Directory-banner-connecting-people-1200x448.jpg"
                width="100%"
                height="500px"
                alt="crop"
              />
              <div className="container">
                <div className="carousel-caption text-left"></div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://media.connecting-people.se/2020/03/Kopia-av-Connectingpeople-1128x191-3.png"
                width="100%"
                height="500px"
                alt="crop"
              />
              <div className="container">
                <div className="carousel-caption"></div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/SNc_bPaMeiw63zp8r/videoblocks-connecting-people-on-the-internet-converting-sites_rbug2tco4_thumbnail-1080_01.png"
                width="100%"
                height="500px"
                alt="crop"
              />
              <div className="container">
                <div className="carousel-caption text-right"></div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#myCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#myCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <FooterComponent />
      </div>
    );
  }
}
export default Home;
