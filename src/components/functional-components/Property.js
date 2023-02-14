import React from "react";
import { Link } from "react-router-dom";

function Property({ id, name, location, price, bathrooms, bedrooms, images }) {
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <div className="row">
      <div className="col-xl-6 col-sm-6 col-12">
        <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
          <div className="product-img go-top">
            <Link to="/product-details">
              <img src={publicUrl + "assets/img/product-3/1.jpg"} alt="#" />
            </Link>
            <div className="real-estate-agent">
              <div className="agent-img">
                <Link to="/shop">
                  <img src={publicUrl + "assets/img/blog/author.jpg"} alt="#" />
                </Link>
              </div>
            </div>
          </div>
          <div className="product-info">
            <div className="product-badge">
              <ul>
                <li className="sale-badg">For Sale</li>
              </ul>
            </div>
            <h2 className="product-title go-top">
              <Link to="/product-details">{name}</Link>
            </h2>
            <div className="product-img-location go-top">
              <ul>
                <li>
                  <Link to="/contact">
                    <i className="flaticon-pin" /> {location}
                  </Link>
                </li>
              </ul>
            </div>
            <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
              <li>
                <span>{bedrooms} </span>
                Bed
              </li>
              <li>
                <span>{bathrooms} </span>
                Bath
              </li>
              <li>
                <span>3450 </span>
                Square Ft
              </li>
            </ul>
            <div className="product-hover-action">
              <ul>
                <li>
                  <a
                    href="#"
                    title="Quick View"
                    data-bs-toggle="modal"
                    data-bs-target="#quick_view_modal"
                  >
                    <i className="flaticon-expand" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title="Wishlist"
                    data-bs-toggle="modal"
                    data-bs-target="#liton_wishlist_modal"
                  >
                    <i className="flaticon-heart-1" />
                  </a>
                </li>
                <li className="go-top">
                  <Link to="/product-details" title="Product Details">
                    <i className="flaticon-add" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="product-info-bottom">
            <div className="product-price">
              <span>{price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Property;
