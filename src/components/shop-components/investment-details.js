import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";

const InvestmentDetails = (data) => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <div className="ltn__shop-details-area pb-10">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
              <h1>Madokero Full House</h1>
              <label>
                <span className="ltn__secondary-color">
                  <i className="flaticon-pin" />
                </span>{" "}
                Madokero, Harare, Zimbabwe
              </label>
              <h4 className="title-2">Description</h4>
              <p>
                The apartment consists of a large bright bedroom with a comfy
                king-sized bed, a modern fully-equipped kitchen and a sunlit
                living room with Apple TV and free Netflix account. It is the
                perfect place to stay for couples looking for a romantic
                location in the historic centre, within walking distance of some
                of the most beautiful sceneries you can find in the city and all
                famous landmarks. The sofa in the living room can also serve as
                an additional bed for a 3rd guest", location: "Avondale, Harare,
                Zimbabwe
              </p>
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
                    <label>Rooms:</label> <span>7</span>
                  </li>
                  <li>
                    <label>Baths:</label> <span>2</span>
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
                    <label>Beds:</label> <span>2</span>
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
                  <Card.Header>Funding Target: USD 200,000,00</Card.Header>
                  <ProgressBar
                    now={80.6}
                    label={`${80.6}%`}
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: "80%",
                      marginLeft: "5px",
                    }}
                  />
                  <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>

                    <Card.Text>
                      Interest Rate Of Return (RR): <span>10.6%</span>
                    </Card.Text>
                    <Card.Text>
                      Est Net Rental Yield: <span>6.82%</span>
                    </Card.Text>
                    <Card.Text>
                      Market Valuation: <span>USD 500,000,00</span>
                    </Card.Text>
                    <Card.Text>
                      Tsigiro Discount: <span>2.88%</span>
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
  );
};

export default InvestmentDetails;
