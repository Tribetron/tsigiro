import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class CounterV1 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="ltn__counterup-area section-bg-1 pt-120 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 align-self-center">
              <div className="ltn__counterup-item text-color-white---">
                <div className="counter-icon">
                  <i className="flaticon-select" />
                </div>
                <h1>
                  <span className="counter">560</span>
                  <span className="counterUp-icon">+</span>{" "}
                </h1>
                <h6>Total Area Sq</h6>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 align-self-center">
              <div className="ltn__counterup-item text-color-white---">
                <div className="counter-icon">
                  <i className="flaticon-office" />
                </div>
                <h1>
                  <span className="counter">197</span>
                  <span className="counterUp-letter">K</span>
                  <span className="counterUp-icon">+</span>{" "}
                </h1>
                <h6>Properties Sold</h6>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 align-self-center">
              <div className="ltn__counterup-item text-color-white---">
                <div className="counter-icon">
                  <i className="flaticon-financial" />
                </div>
                <h1>
                  <span className="counter">2680</span>
                  <span className="counterUp-icon">+</span>{" "}
                </h1>
                <h6>Fractional Investors</h6>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 align-self-center">
              <div className="ltn__counterup-item text-color-white---">
                <div className="counter-icon">
                  <i className="flaticon-add-user" />
                </div>
                <h1>
                  <span className="counter">34000</span>
                  <span className="counterUp-icon">+</span>{" "}
                </h1>
                <h6>Active Users</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CounterV1;
