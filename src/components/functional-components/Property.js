import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Property({
  id,
  name,
  location,
  price,
  bathrooms,
  bedrooms,
  rooms,
  description,
  images,
  propertyID,
  x,
  y,
  propertyStatus,
  size,
}) {
  let publicUrl = process.env.PUBLIC_URL + "/";
  function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  return (
    <div className="col-xl-6 col-sm-6 col-12">
      <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
        <div className="product-img go-top">
          <Link
            to={{
              pathname: "/property-details",
              parseProps: {
                id,
                name,
                location,
                price,
                bathrooms,
                bedrooms,
                rooms,
                description,
                images,
                propertyID,
                x,
                y,
                propertyStatus,
                size,
              },
            }}
          >
            <img src={images[0].url} alt="#" />
          </Link>
        </div>
        <div className="product-info">
          <div className="product-badge">
            <ul>
              <li className="sale-badg">{propertyStatus}</li>
            </ul>
          </div>
          <h2 className="product-title go-top">
            <Link
              to={{
                pathname: "/property-details",
                parseProps: {
                  id,
                  name,
                  location,
                  price,
                  bathrooms,
                  bedrooms,
                  rooms,
                  description,
                  images,
                  propertyID,
                  x,
                  y,
                  propertyStatus,
                  size,
                },
              }}
            >
              {name}
            </Link>
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
              <span>{rooms} </span>
              Rooms
            </li>
            <li>
              <span>{bedrooms} </span>
              Bed
            </li>
            <li>
              <span>{bathrooms} </span>
              Bath
            </li>
            <li>
              <span>{size} </span>
              Square Ft
            </li>
          </ul>
          <Link
            to={{
              pathname: "/property-details",
              parseProps: {
                id,
                name,
                location,
                price,
                bathrooms,
                bedrooms,
                rooms,
                description,
                images,
                propertyID,
                x,
                y,
                propertyStatus,
                size,
              },
            }}
          >
            <Button style={{ margin: "10px" }}>View Property</Button>
          </Link>
        </div>
        <div className="product-info-bottom">
          <div className="product-price">
            <span>USD {currencyFormat(price)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Property;
