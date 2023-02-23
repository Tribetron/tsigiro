import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import slider1 from "./slider-1.jpg";
import slider2 from "./slider-2.jpg";

class Banner extends Component {
  render() {
    let publicUrl = "../../../public/";
    let imagealt = "image";

    return (
      <div className="ltn__slider-area ltn__slider-3  section-bg-1 go-top">
        <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
          {/* ltn__slide-item */}
          <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3">
            <div className="ltn__slide-item-inner">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 align-self-center">
                    <div className="slide-item-info">
                      <div className="slide-item-info-inner ltn__slide-animation">
                        <div className="slide-video mb-50 d-none">
                          <a
                            className="ltn__video-icon-2 ltn__video-icon-2-border"
                            href="https://www.youtube.com/embed/tlThdr3O5Qo"
                            data-rel="lightcase:myCollection"
                          >
                            <i className="fa fa-play" />
                          </a>
                        </div>
                        <h6 className="slide-sub-title white-color--- animated">
                          <span>
                            <i className="fas fa-home" />
                          </span>{" "}
                          Skip the down payment
                        </h6>
                        <h1 className="slide-title animated ">
                          Invest in real estate
                          <br /> for as little as $5
                        </h1>
                        <div className="slide-brief animated">
                          <p>
                            Buy shares of properties, earn passive income, and
                            grow your real estate portfolio. Don't get left
                            behind by the legacy real estate market.
                          </p>
                        </div>
                        <div className="btn-wrapper animated ">
                          <Link
                            to="/investing"
                            className="theme-btn-1 btn btn-effect-1 go-top"
                          >
                            Invest Now
                          </Link>
                          <Link
                            to="/about"
                            className="btn btn-transparent btn-effect-3"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="slide-item-img">
                      <img src={slider1} alt="#" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ltn__slide-item */}
          <div className="ltn__slide-item ltn__slide-item-2  ltn__slide-item-3-normal ltn__slide-item-3">
            <div className="ltn__slide-item-inner  text-right text-end">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 align-self-center">
                    <div className="slide-item-info">
                      <div className="slide-item-info-inner ltn__slide-animation">
                        <h6 className="slide-sub-title white-color--- animated">
                          <span>
                            <i className="fas fa-home" />
                          </span>{" "}
                          Smart investing in Tsigiro properties
                        </h6>
                        <h1 className="slide-title animated ">
                          Everyone deserves to <br />
                          own something real.
                        </h1>
                        <div className="slide-brief animated">
                          <p>
                            Buy carefully curated properties across
                            best-in-class residential and commercial markets.
                          </p>
                        </div>
                        <div className="btn-wrapper animated">
                          <Link
                            to="/properties"
                            className="theme-btn-1 btn btn-effect-1"
                          >
                            Browse Properties
                          </Link>
                          <Link
                            to="/about"
                            className="btn btn-transparent btn-effect-3"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="slide-item-img slide-img-left">
                      <img src={slider2} alt="#" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    );
  }
}

export default Banner;
