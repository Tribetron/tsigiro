import React, { useState } from "react";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import { Button } from "react-bootstrap";
import "react-phone-input-2/lib/style.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

const ShopDetails = (data) => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [payment, setPaymentDate] = useState("");
  const propertyID = data.data.propertyID;

  const FormSubmit = (e) => {
    e.preventDefault();
    const payload = { fullName, email, phoneNumber, payment, propertyID };
    NotificationManager.success(
      "Request Received Succesfully",
      `Hi ${fullName} Your Request Has Been Successfully Sent, and One Of Our Agents Will Contact You As Soon As Possible`
    );
  };

  function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

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
                    <label>Home Area: </label>{" "}
                    <span>{data.data.size} square meters</span>
                  </li>
                  <li>
                    <label>Rooms:</label> <span>{data.data.rooms}</span>
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
                    <label>Lot dimensions:</label>{" "}
                    <span>
                      {data.data.x} x {data.data.y} m
                    </span>
                  </li>
                  <li>
                    <label>Beds:</label> <span>{data.data.bedrooms}</span>
                  </li>
                  <li>
                    <label>Price:</label>{" "}
                    <span>USD {currencyFormat(data.data.price)}</span>
                  </li>
                  <li>
                    <label>Property Status:</label>{" "}
                    <span>{data.data.propertyStatus}</span>
                  </li>
                </ul>
              </div>
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
                  <Button
                    type="submit"
                    variant="secondary"
                    style={{ marginTop: "20px", backgroundColor: "#47878a" }}
                    disabled={phoneNumber.length <= 9}
                  >
                    Send Request
                  </Button>
                </form>
                <NotificationContainer />
              </div>

              {/* Banner Widget */}
              <div className="widget ltn__banner-widget d-none go-top">
                <Link to="/shop">
                  <img src={publicUrl + "assets/img/banner/2.jpg"} alt="#" />
                </Link>
              </div>
            </aside>
          </div>
          <div className="col-12">
            <h4 className="title-2">Property Images</h4>
            <div className="ltn__property-details-gallery mb-30">
              <div className="row">
                <div className="col-md-6">
                  <a
                    href={publicUrl + "assets/img/others/14.jpg"}
                    data-rel="lightcase:myCollection"
                  >
                    <img
                      className="mb-30"
                      src={publicUrl + "assets/img/others/14.jpg"}
                      alt="Image"
                    />
                  </a>
                  <a
                    href={publicUrl + "assets/img/others/15.jpg"}
                    data-rel="lightcase:myCollection"
                  >
                    <img
                      className="mb-30"
                      src={publicUrl + "assets/img/others/15.jpg"}
                      alt="Image"
                    />
                  </a>
                </div>
                <div className="col-md-6">
                  <a
                    href={publicUrl + "assets/img/others/16.jpg"}
                    data-rel="lightcase:myCollection"
                  >
                    <img
                      className="mb-30"
                      src={publicUrl + "assets/img/others/16.jpg"}
                      alt="Image"
                    />
                  </a>
                </div>
              </div>
            </div>
            <h4 className="title-2">Floor Plans</h4>
            {/* APARTMENTS PLAN AREA START */}
            <div className="ltn__apartments-plan-area product-details-apartments-plan mb-60">
              <div className="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center---">
                <div className="nav">
                  <a data-bs-toggle="tab" href="#liton_tab_3_1">
                    First Floor
                  </a>
                  <a
                    className="active show"
                    data-bs-toggle="tab"
                    href="#liton_tab_3_2"
                  >
                    Second Floor
                  </a>
                  <a data-bs-toggle="tab" href="#liton_tab_3_3">
                    Third Floor
                  </a>
                  <a data-bs-toggle="tab" href="#liton_tab_3_4">
                    Top Garden
                  </a>
                </div>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade" id="liton_tab_3_1">
                  <div className="ltn__apartments-tab-content-inner">
                    <div className="row">
                      <div className="col-lg-7">
                        <div className="apartments-plan-img">
                          <img
                            src={publicUrl + "assets/img/others/10.png"}
                            alt="#"
                          />
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
                          <h2>First Floor</h2>
                          <p>
                            Enimad minim veniam quis nostrud exercitation
                            ullamco laboris. Lorem ipsum dolor sit amet cons
                            aetetur adipisicing elit sedo eiusmod
                            tempor.Incididunt labore et dolore magna aliqua. sed
                            ayd minim veniam.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="product-details-apartments-info-list  section-bg-1">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="apartments-info-list apartments-info-list-color mt-40---">
                                <ul>
                                  <li>
                                    <label>Total Area</label>{" "}
                                    <span>2800 Sq. Ft</span>
                                  </li>
                                  <li>
                                    <label>Bedroom</label>{" "}
                                    <span>150 Sq. Ft</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="apartments-info-list apartments-info-list-color mt-40---">
                                <ul>
                                  <li>
                                    <label>Belcony/Pets</label>{" "}
                                    <span>Allowed</span>
                                  </li>
                                  <li>
                                    <label>Lounge</label>{" "}
                                    <span>650 Sq. Ft</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade active show" id="liton_tab_3_2">
                  <div className="ltn__product-tab-content-inner">
                    <div className="row">
                      <div className="col-lg-7">
                        <div className="apartments-plan-img">
                          <img
                            src={publicUrl + "assets/img/others/10.png"}
                            alt="#"
                          />
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
                          <h2>Second Floor</h2>
                          <p>
                            Enimad minim veniam quis nostrud exercitation
                            ullamco laboris. Lorem ipsum dolor sit amet cons
                            aetetur adipisicing elit sedo eiusmod
                            tempor.Incididunt labore et dolore magna aliqua. sed
                            ayd minim veniam.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="product-details-apartments-info-list  section-bg-1">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="apartments-info-list apartments-info-list-color mt-40---">
                                <ul>
                                  <li>
                                    <label>Total Area</label>{" "}
                                    <span>2800 Sq. Ft</span>
                                  </li>
                                  <li>
                                    <label>Bedroom</label>{" "}
                                    <span>150 Sq. Ft</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="apartments-info-list apartments-info-list-color mt-40---">
                                <ul>
                                  <li>
                                    <label>Belcony/Pets</label>{" "}
                                    <span>Allowed</span>
                                  </li>
                                  <li>
                                    <label>Lounge</label>{" "}
                                    <span>650 Sq. Ft</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="liton_tab_3_3">
                  <div className="ltn__product-tab-content-inner">
                    <div className="row">
                      <div className="col-lg-7">
                        <div className="apartments-plan-img">
                          <img
                            src={publicUrl + "assets/img/others/10.png"}
                            alt="#"
                          />
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
                          <h2>Third Floor</h2>
                          <p>
                            Enimad minim veniam quis nostrud exercitation
                            ullamco laboris. Lorem ipsum dolor sit amet cons
                            aetetur adipisicing elit sedo eiusmod
                            tempor.Incididunt labore et dolore magna aliqua. sed
                            ayd minim veniam.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="product-details-apartments-info-list  section-bg-1">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="apartments-info-list apartments-info-list-color mt-40---">
                                <ul>
                                  <li>
                                    <label>Total Area</label>{" "}
                                    <span>2800 Sq. Ft</span>
                                  </li>
                                  <li>
                                    <label>Bedroom</label>{" "}
                                    <span>150 Sq. Ft</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="apartments-info-list apartments-info-list-color mt-40---">
                                <ul>
                                  <li>
                                    <label>Belcony/Pets</label>{" "}
                                    <span>Allowed</span>
                                  </li>
                                  <li>
                                    <label>Lounge</label>{" "}
                                    <span>650 Sq. Ft</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="liton_tab_3_4">
                  <div className="ltn__product-tab-content-inner">
                    <div className="row">
                      <div className="col-lg-7">
                        <div className="apartments-plan-img">
                          <img
                            src={publicUrl + "assets/img/others/10.png"}
                            alt="#"
                          />
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">
                          <h2>Top Garden</h2>
                          <p>
                            Enimad minim veniam quis nostrud exercitation
                            ullamco laboris. Lorem ipsum dolor sit amet cons
                            aetetur adipisicing elit sedo eiusmod
                            tempor.Incididunt labore et dolore magna aliqua. sed
                            ayd minim veniam.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="product-details-apartments-info-list  section-bg-1">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="apartments-info-list apartments-info-list-color mt-40---">
                                <ul>
                                  <li>
                                    <label>Total Area</label>{" "}
                                    <span>2800 Sq. Ft</span>
                                  </li>
                                  <li>
                                    <label>Bedroom</label>{" "}
                                    <span>150 Sq. Ft</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="apartments-info-list apartments-info-list-color mt-40---">
                                <ul>
                                  <li>
                                    <label>Belcony/Pets</label>{" "}
                                    <span>Allowed</span>
                                  </li>
                                  <li>
                                    <label>Lounge</label>{" "}
                                    <span>650 Sq. Ft</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
