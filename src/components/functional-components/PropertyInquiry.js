import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Navbar from "../global-components/navbar";
import Footer_v1 from "../global-components/footer";
import ProductSlider from "../shop-components/product-slider-v1";
import LoadingBox from "../functional-components/LoadingBox";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import FeaturesV1 from "../section-components/features-v1";

const PropertyInquiry = () => {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [timeline, setTimeline] = useState("");

  const FormSubmit = (e) => {
    e.preventDefault();
    NotificationManager.success(
      "Request Received Succesfully",
      `We Have Succesfully Received Your Inquiry.\n One Of Our Agents Will Get Back To You ASAP.`
    );
  };
  return (
    <div className="ltn__shop-details-area pb-10">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
              <Card>
                <Card.Header>REQUEST FOR PROPERTY</Card.Header>
                <Card.Body>
                  <form className="ltn__car-dealer-form-box row">
                    <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-car col-lg-4 col-md-6">
                      <select className="nice-select">
                        <option>Harare</option>
                        <option>Mashonaland West</option>
                        <option>Mashonaland East</option>
                        <option>Manicaland</option>
                        <option>Masvingo</option>
                        <option>Matebeleland North</option>
                        <option>Matebeleland South</option>
                      </select>
                    </div>
                    <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-4 col-md-6">
                      <select className="nice-select">
                        <option>Property Type</option>
                        <option>Apartment</option>
                        <option>Commercial Property</option>
                        <option>Garden Flats</option>
                        <option>Single Family Home</option>
                      </select>
                    </div>
                    <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-ring col-lg-4 col-md-6">
                      <select className="nice-select">
                        <option>Bedrooms</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                    <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-cog col-lg-4 col-md-6">
                      <div className="input-item input-item-name ltn__custom-icon">
                        <input
                          type="text"
                          name="name"
                          placeholder="Min size (in sqm)"
                        />
                      </div>
                    </div>
                    <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-cog col-lg-4 col-md-6">
                      <div className="input-item input-item-name ltn__custom-icon">
                        <input
                          type="text"
                          name="name"
                          placeholder="Max size (in sqm)"
                        />
                      </div>
                    </div>
                    <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-cog col-lg-4 col-md-6">
                      <div className="input-item input-item-name ltn__custom-icon">
                        <input
                          type="text"
                          name="name"
                          placeholder="Min price (in USD)"
                        />
                      </div>
                    </div>
                    <div className="btn-wrapper text-center go-top">
                      {/* <button type="submit" class="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</button> */}
                      <Link
                        to="/investing"
                        className="btn theme-btn-1 btn-effect-1 text-uppercase"
                      >
                        Send Request
                      </Link>
                    </div>
                  </form>
                  {/* <Form onSubmit={FormSubmit} className="">
                    <Form.Group
                      className="mb-5"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Preferred Property Location*</Form.Label>
                      <Form.Select
                        as="select"
                        aria-label="Default select example"
                        value={location}
                        onChange={(e) => {
                          setLocation(e.target.value);
                        }}
                        required
                      >
                        <option value="harare-east">Harare East</option>
                        <option value="harare-west">Harare West</option>
                        <option value="harare-north">Harare North</option>
                        <option value="harare-south">Harare South</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group
                      className="mb-5"
                      controlId="exampleForm.ControlInput2"
                    >
                      <Form.Label>Property Type*</Form.Label>
                      <Form.Select
                        as="select"
                        aria-label="Default select example"
                        value={type}
                        onChange={(e) => {
                          setType(e.target.value);
                        }}
                        required
                      >
                        <option value="Apartments">Apartments</option>
                        <option value="Cottage">Cottage</option>
                        <option value="House">House</option>
                        <option value="Commercial">Commercial</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput3"
                    >
                      <Form.Label>Property Size (square meters)*</Form.Label>
                      <Form.Control
                        type="number"
                        value={size}
                        min={0}
                        placeholder="1000"
                        autoFocus
                        onChange={(e) => {
                          setSize(e.target.value);
                        }}
                        required
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput4"
                    >
                      <Form.Label>Property Price Range (USD)*</Form.Label>
                      <Form.Control
                        type="number"
                        value={price}
                        min={0}
                        placeholder="100000"
                        autoFocus
                        onChange={(e) => {
                          setPrice(e.target.value);
                        }}
                        required
                      />
                    </Form.Group>
                  
                    <Button
                      style={{ backgroundColor: "#47878a" }}
                      type="submit"
                    >
                      Send Inquiry
                    </Button>
                  </Form> */}
                  <NotificationContainer />
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer_v1 />
    </div>
  );
};

export default PropertyInquiry;
