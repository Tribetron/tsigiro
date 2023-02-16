import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import Navbar from "../global-components/navbar";
import ProductSlider from "../shop-components/product-slider-v1";
import LoadingBox from "../functional-components/LoadingBox";
import { useState } from "react";

const InvestmentDetails = (data) => {
  const dataSource = data.location.parseProps;
  let publicUrl = process.env.PUBLIC_URL + "/";
  const percentage = Math.floor(
    (dataSource.currentInvestment / dataSource.marketValuation) * 100
  );
  return (
    <div>
      <Navbar />
      {/* <ProductSlider data={dataSource.images} /> */}

      <div className="ltn__shop-details-area pb-10" style={{ marginTop: 50 }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
                <h1>{dataSource.name}</h1>
                <label>
                  <span className="ltn__secondary-color">
                    <i className="flaticon-pin" />
                  </span>{" "}
                  {dataSource.location}
                </label>
                <h4 className="title-2">Description</h4>
                <p>{dataSource.description}</p>
                <h4 className="title-2">Property Detail</h4>
                <div className="property-detail-info-list section-bg-1 clearfix mb-60">
                  <ul>
                    <li>
                      <label>Property ID:</label> <span>HZ29</span>
                    </li>
                    <li>
                      <label>Home Area: </label> <span>120 sqft</span>
                    </li>
                    <li>
                      <label>Rooms:</label> <span>{dataSource.rooms}</span>
                    </li>
                    <li>
                      <label>Baths:</label> <span>{dataSource.bathrooms}</span>
                    </li>
                    <li>
                      <label>Year built:</label> <span>1992</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <label>Lot Area:</label> <span>HZ29 </span>
                    </li>
                    <li>
                      <label>Lot dimensions:</label> <span>120 sqft</span>
                    </li>
                    <li>
                      <label>Beds:</label> <span>{dataSource.bedrooms}</span>
                    </li>
                  </ul>
                </div>

                {/* APARTMENTS PLAN AREA END */}
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
                {/* Form Widget */}
                <div className="widget ltn__form-widget">
                  <Card>
                    <Card.Header>
                      Funding Target: USD {dataSource.fundingTarget}
                    </Card.Header>
                    <ProgressBar
                      now={percentage}
                      label={`${percentage}%`}
                      style={{
                        marginTop: "20px",
                        marginBottom: "20px",
                        width: "80%",
                        marginLeft: "5px",
                      }}
                    />
                    <Card.Body>
                      <Card.Text>
                        Interest Rate Of Return (RR):{" "}
                        <span>{dataSource.interest}%</span>
                      </Card.Text>
                      <Card.Text>
                        Est Net Rental Yield: <span>{dataSource.rent}%</span>
                      </Card.Text>
                      <Card.Text>
                        Market Valuation:{" "}
                        <span>USD {dataSource.marketValuation}</span>
                      </Card.Text>
                      <Card.Text>
                        Tsigiro Discount: <span>{dataSource.discount}%</span>
                      </Card.Text>
                      <Button variant="primary">Invest Now</Button>
                    </Card.Body>
                  </Card>
                </div>

                {/* Banner Widget */}
                <div className="widget ltn__banner-widget d-none go-top">
                  <Link to="/shop">
                    <img src={publicUrl + "assets/img/banner/2.jpg"} alt="#" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentDetails;
