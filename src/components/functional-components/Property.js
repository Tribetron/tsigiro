import React from "react";
import { Link } from "react-router-dom";

function Property({
  id,
  name,
  location,
  price,
  bathrooms,
  bedrooms,
  description,
  images,
  propertyID,
}) {
  let publicUrl = process.env.PUBLIC_URL + "/";
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
                description,
                images,
                propertyID,
              },
            }}
          >
            <img src={images[0].url} alt="#" />
          </Link>
        </div>
        <div className="product-info">
          <div className="product-badge">
            <ul>
              <li className="sale-badg">For Sale</li>
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
                  description,
                  images,
                  propertyID,
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
              <li className="go-top">
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
                      description,
                      images,
                      propertyID,
                    },
                  }}
                >
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
  );
}

export default Property;
