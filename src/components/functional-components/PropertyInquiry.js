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
                  <Form onSubmit={FormSubmit}>
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
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput5"
                    >
                      <Form.Label>Preferred Payment Timeline*</Form.Label>
                      <Form.Control
                        type="date"
                        value={timeline}
                        autoFocus
                        onChange={(e) => {
                          setTimeline(e.target.value);
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
                  </Form>
                  <NotificationContainer />
                </Card.Body>
              </Card>
              <FeaturesV1 customClass="ltn__feature-area section-bg-1 mt-20 mb-120---" />
            </div>
          </div>
        </div>
      </div>
      <Footer_v1 />
    </div>
  );
};

export default PropertyInquiry;
