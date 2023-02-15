import React, { Component } from "react";
import { Link } from "react-router-dom";

const ShopDetails = (data) => {
  let publicUrl = process.env.PUBLIC_URL + "/";
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
                    <label>Property ID:</label> <span>HZ29</span>
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
          <div className="col-lg-4">
            <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
              {/* Form Widget */}
              <div className="widget ltn__form-widget">
                <h4 className="ltn__widget-title ltn__widget-title-border-2">
                  Request To Purchase Property
                </h4>
                <form action="#">
                  <input type="text" name="yourname" placeholder="Your Name*" />
                  <input
                    type="text"
                    name="youremail"
                    placeholder="Your e-Mail*"
                  />
                  <input
                    type="text"
                    name="yourphone"
                    placeholder="Your Phone Number*"
                  />
                  <label>Preferred Purchase Timeline*</label>
                  <input
                    type="date"
                    name="timeline"
                    style={{ width: "100%", height: "100%" }}
                  />

                  {/* <textarea
                    name="yourmessage"
                    placeholder="Write Message..."
                    defaultValue={""}
                  /> */}
                  <button
                    type="submit"
                    className="btn theme-btn-1"
                    style={{ marginTop: "20px" }}
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
