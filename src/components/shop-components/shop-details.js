import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ShopDetails = (data) => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [payment, setPaymentDate] = useState("");

  const FormSubmit = (e) => {
    e.preventDefault();
    const data = { fullName, email, phoneNumber, payment, prop };
    //Post To Endpoint
  };

  return (
    <div className="ltn__shop-details-area pb-10">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
              <h1>{data.data.name}</h1>
              <label>
                <span className="ltn__secondary-color">
                  <i className="flaticon-pin" />
                </span>{" "}
                {data.data.location}
              </label>
              <h4 className="title-2">Description</h4>
              <p>{data.data.description}</p>
              <h4 className="title-2">Property Detail</h4>
              <div className="property-detail-info-list section-bg-1 clearfix mb-60">
                <ul>
                  <li>
                    <label>Property ID:</label>{" "}
                    <span>{data.data.propertyID}</span>
                  </li>
                  <li>
                    <label>Home Area: </label> <span>120 sqft</span>
                  </li>
                  <li>
                    <label>Rooms:</label> <span>7</span>
                  </li>
                  <li>
                    <label>Baths:</label> <span>{data.data.bathrooms}</span>
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
                    <label>Beds:</label> <span>{data.data.bedrooms}</span>
                  </li>
                  <li>
                    <label>Price:</label> <span>{data.data.price}</span>
                  </li>
                  <li>
                    <label>Property Status:</label> <span>For Sale</span>
                  </li>
                </ul>
              </div>

              {/* APARTMENTS PLAN AREA END */}
            </div>
          </div>
          <div className="col-lg-4" style={{ marginTop: "100px" }}>
            <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
              {/* Form Widget */}
              <div className="widget ltn__form-widget">
                <h4 className="ltn__widget-title ltn__widget-title-border-2">
                  Request To Purchase Property
                </h4>
                <form
                  onSubmit={(e) => {
                    FormSubmit(e);
                  }}
                >
                  <input
                    type="text"
                    name="yourname"
                    value={fullName}
                    required
                    placeholder="Your Name*"
                    onChange={(e) => setFullName(e.target.value)}
                    style={{ height: "70%", borderRadius: "5px" }}
                  />
                  <input
                    type="email"
                    name="youremail"
                    required
                    placeholder="Your e-Mail*"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    style={{ height: "70%", borderRadius: "5px" }}
                  />
                  <label id="propertyID">Property ID*</label>
                  <input
                    type="text"
                    name="propertyID"
                    id="propertyID"
                    value={data.data.propertyID}
                    readOnly
                    placeholder="Your Name*"
                    style={{ height: "70%", borderRadius: "5px" }}
                  />
                  <label id="phone">Your Phone Number*</label>
                  <PhoneInput
                    country={"zw"}
                    id="phone"
                    value={phoneNumber}
                    onChange={(phoneNumber) => setPhoneNumber(phoneNumber)}
                    style={{ marginBottom: "20px" }}
                    inputProps={{
                      required: true,
                    }}
                  />
                  <label id="date">Preferred Purchase Timeline*</label>
                  <input
                    type="date"
                    id="date"
                    name="timeline"
                    value={payment}
                    required
                    style={{ width: "100%", height: "100%" }}
                    onChange={(e) => {
                      setPaymentDate(e.target.value);
                    }}
                  />
                  <button
                    type="submit"
                    className="btn theme-btn-1"
                    style={{ marginTop: "20px" }}
                    disabled={phoneNumber.length <= 9}
                  >
                    Send Request
                  </button>
                </form>
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

export default ShopDetails;
