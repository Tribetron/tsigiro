import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import Sidebar from "./shop-sidebar";
import Search from "../functional-components/search";
import PropertyList from "../functional-components/PropertyList";

export default function ShopGridV1() {
  let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <div>
      <div className="ltn__product-area ltn__product-gutter">
        <div className="container">
          <div className="row">
            <div className="col-lg-8  mb-100">
              {/* Filters */}
              <div className="ltn__shop-options">
                <ul className="justify-content-start">
                  <li className="d-none">
                    <div className="showing-product-number text-right">
                      <span>Showing 1–12 of 18 results</span>
                    </div>
                  </li>
                  <li>
                    <div className="short-by text-center">
                      <select className="nice-select">
                        <option>Default Sorting</option>
                        <option>Sort by popularity</option>
                        <option>Sort by new arrivals</option>
                        <option>Sort by price: low to high</option>
                        <option>Sort by price: high to low</option>
                      </select>
                    </div>
                  </li>
                  <li>
                    <div className="short-by text-center">
                      <select className="nice-select">
                        <option>Per Page: 12</option>
                        <option>Per Page: 20</option>
                        <option>Per Page: 30</option>
                        <option>Per Page: 50</option>
                        <option>Per Page: 100</option>
                      </select>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                <div
                  className="tab-pane fade active show"
                  id="liton_product_grid"
                >
                  <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                    <div className="row">
                      <Search />
                      <PropertyList />
                    </div>
                  </div>
                </div>
                {/* Properties List */}
              </div>
              {/* Pagination Component */}
              <div className="ltn__pagination-area text-center">
                <div className="ltn__pagination">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fas fa-angle-double-left" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">1</Link>
                    </li>
                    <li className="active">
                      <Link to="#">2</Link>
                    </li>
                    <li>
                      <Link to="#">3</Link>
                    </li>
                    <li>
                      <Link to="#">...</Link>
                    </li>
                    <li>
                      <Link to="#">10</Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fas fa-angle-double-right" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Sidebar />
          </div>
        </div>
      </div>

      {/* Add to cart */}
      <div className="ltn__modal-area ltn__add-to-cart-modal-area">
        <div className="modal fade" id="add_to_cart_modal" tabIndex={-1}>
          <div className="modal-dialog modal-md" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="ltn__quick-view-modal-inner">
                  <div className="modal-product-item">
                    <div className="row">
                      <div className="col-12">
                        <div className="modal-product-img">
                          <img
                            src={publicUrl + "assets/img/product/1.png"}
                            alt="#"
                          />
                        </div>
                        <div className="modal-product-info go-top">
                          <h5 className="go-top">
                            <Link to="/product-details">
                              Brake Conversion Kit
                            </Link>
                          </h5>
                          <p className="added-cart">
                            <i className="fa fa-check-circle" />
                            Successfully added to your Cart
                          </p>
                          <div className="btn-wrapper">
                            <Link
                              to="/cart"
                              className="theme-btn-1 btn btn-effect-1"
                            >
                              View Cart
                            </Link>
                            <Link
                              to="/checkout"
                              className="theme-btn-2 btn btn-effect-2"
                            >
                              Checkout
                            </Link>
                          </div>
                        </div>
                        {/* additional-info */}
                        <div className="additional-info d-none">
                          <p>
                            We want to give you <b>10% discount</b> for your
                            first order, <br /> Use discount code at checkout
                          </p>
                          <div className="payment-method">
                            <img
                              src={publicUrl + "assets/img/icons/payment.png"}
                              alt="#"
                            />
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
}
