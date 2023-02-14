import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class AboutV1 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="ltn__about-us-area pt-120 pb-90 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="about-us-img-wrap about-img-left">
                <img
                  src={publicUrl + "assets/img/others/7.png"}
                  alt="About Us Image"
                />
                <div className="about-us-img-info about-us-img-info-2 about-us-img-info-3">
                  <div className="ltn__video-img ltn__animation-pulse1">
                    <img
                      src={publicUrl + "assets/img/others/8.png"}
                      alt="video popup bg image"
                    />
                    <a
                      className="ltn__video-icon-2 ltn__video-icon-2-border---"
                      href="https://www.youtube.com/embed/X7R-q9rsrtU?autoplay=1&showinfo=0"
                      data-rel="lightcase:myCollection"
                    >
                      <i className="fa fa-play" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="about-us-info-wrap">
                <div className="section-title-area ltn__section-title-2--- mb-20">
                  <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                    Invest With Us
                  </h6>
                  <h1 className="section-title">
                    Earn Monthly Dividends For Each Share You Own.<span>.</span>
                  </h1>
                  <p>
                    Enjoy cash flow with dividend payments deposited directly
                    into your Tsigiro account.
                  </p>
                </div>
                <ul className="ltn__list-item-half clearfix">
                  <li>
                    <i className="flaticon-financial" />
                    True passive income
                  </li>
                  <li>
                    <i className="flaticon-armchair" />
                    No work or hassle
                  </li>
                  <li>
                    <i className="flaticon-package" />
                    Flexible minimums
                  </li>
                  <li>
                    <i className="flaticon-secure" />
                    Owner benefits
                  </li>
                </ul>
                <div className="ltn__callout bg-overlay-theme-05  mt-30">
                  <p>
                    We're making property ownership inclusive, for the first
                    time ever. Buy fractional ownership in properties across the
                    world from as little as $5.{" "}
                  </p>
                </div>
                <div className="btn-wrapper animated go-top">
                  <Link
                    to="/investing"
                    className="theme-btn-1 btn btn-effect-1"
                  >
                    FIND INVESTMENT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutV1;
