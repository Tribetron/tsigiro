import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class AboutV2 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="ltn__about-us-area pt-120 pb-90 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="about-us-info-wrap">
                <div className="section-title-area ltn__section-title-2--- mb-30">
                  <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                    Buy With Us
                  </h6>
                  <h1 className="section-title">Buy Properties With Us</h1>
                  <p>
                    We handle the heavy lifting so you can focus on your real
                    estate portfolio. Our experts take care of the dirty work
                    while you take care of yourself.
                  </p>
                </div>
                <ul className="ltn__list-item-1 ltn__list-item-1-before clearfix">
                  <li>Apartments</li>
                  <li>Cottages</li>
                  <li>Houses</li>
                </ul>
              </div>
              <div className="ltn__callout bg-overlay-theme-05  mt-30">
                <p>
                  We source insights from the people who live in your potential
                  neighborhood to offer you a neighborhood map overlays that
                  provide deeper understanding of the community you are buying
                  into.{" "}
                </p>
              </div>
              <div className="btn-wrapper animated go-top">
                <Link to="/properties" className="theme-btn-1 btn btn-effect-1">
                  BUY NOW
                </Link>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="about-us-img-wrap about-img-right">
                <img
                  src={publicUrl + "assets/img/others/9.png"}
                  alt="About Us Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutV2;
