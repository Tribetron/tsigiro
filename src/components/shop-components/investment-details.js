import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import Navbar from "../global-components/navbar";
import Footer_v1 from "../global-components/footer";
import ProductSlider from "../shop-components/product-slider-v1";
import LoadingBox from "../functional-components/LoadingBox";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../redux/store";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

const InvestmentDetails = (data) => {
  const dataSource = data.location.parseProps;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const { user } = useSelector((x) => x.user);
  const [userAccount, setUserAccount] = useState("");
  const [loading, setLoading] = useState(true);
  const [investment, setInvestment] = useState("");
  let publicUrl = process.env.PUBLIC_URL + "/";
  const percentage = Math.floor(
    (dataSource.currentInvestment / dataSource.marketValuation) * 100
  );

  useEffect(() => {
    dispatch(userActions.getUser()).then((user) => {
      setUserAccount(...user.payload);
      setLoading(false);
    });
  }, []);

  function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  const FormSubmit = (e) => {
    e.preventDefault();
    handleClose();
    if (investment > userAccount.accountBalance) {
      return NotificationManager.error(
        "Insufficient Funds",
        `Hi ${userAccount.name} Your Have Insufficient Funds To Perform This Transaction}`
      );
    }
    const payload = { userAccount, propertyID: dataSource.propertyID };
    NotificationManager.success(
      "Request Received Succesfully",
      `Hi ${userAccount.name} Your Have Successfully Invested USD ${investment}`
    );
  };

  return (
    <div className="ltn__shop-details-area pb-10">
      <Navbar />
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
                    <label>Property ID:</label>{" "}
                    <span>{dataSource.propertyID}</span>
                  </li>
                  <li>
                    <label>Home Area: </label>{" "}
                    <span>{dataSource.size} square meters</span>
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
                    <label>Lot dimensions:</label>{" "}
                    <span>
                      {dataSource.x} x {dataSource.y} m
                    </span>
                  </li>
                  <li>
                    <label>Beds:</label> <span>{dataSource.bedrooms}</span>
                  </li>
                  <li>
                    <label>Price:</label>{" "}
                    <span>USD {currencyFormat(dataSource.price)}</span>
                  </li>
                  <li>
                    <label>Property Status:</label>{" "}
                    <span>{dataSource.propertyStatus}</span>
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
                    Funding Target: USD{" "}
                    {currencyFormat(dataSource.fundingTarget)}
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
                      <span>
                        USD {currencyFormat(dataSource.marketValuation)}
                      </span>
                    </Card.Text>
                    <Card.Text>
                      Tsigiro Discount: <span>{dataSource.discount}%</span>
                    </Card.Text>
                    <Button
                      type="submit"
                      disable={
                        dataSource.marketValuation === dataSource.fundingTarget
                      }
                      onClick={handleShow}
                    >
                      Invest Now
                    </Button>
                  </Card.Body>
                </Card>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title
                      style={{ textAlign: "center", fontWeight: "bold" }}
                    >
                      Invest In {dataSource.name}
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Your Account Balance (USD)</Form.Label>
                        <Form.Control
                          type="number"
                          value={userAccount.accountBalance}
                          autoFocus
                          readOnly
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput4"
                      >
                        <Form.Label>Total Funding Received (USD)</Form.Label>
                        <Form.Control
                          type="number"
                          value={dataSource.currentInvestment}
                          autoFocus
                          readOnly
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput2"
                      >
                        <Form.Label>
                          Remaining Investment Needed (USD)
                        </Form.Label>
                        <Form.Control
                          type="number"
                          value={
                            dataSource.fundingTarget -
                            dataSource.currentInvestment
                          }
                          autoFocus
                          readOnly
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput3"
                      >
                        <Form.Label>
                          Amount You Want To Invest (USD)*
                        </Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="100"
                          autoFocus
                          value={investment}
                          onChange={(e) => {
                            setInvestment(e.target.value);
                          }}
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button onClick={FormSubmit}>Invest</Button>
                  </Modal.Footer>
                </Modal>
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
        </div>
      </div>
      <Footer_v1 />
    </div>
  );
};

export default InvestmentDetails;
