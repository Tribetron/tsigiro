import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";

function Investments({
  id,
  name,
  location,
  price,
  bathrooms,
  bedrooms,
  description,
  images,
}) {
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <div className="col-lg-6 col-xl-6 col-sm-6 col-12">
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
              },
            }}
          >
            <img src={images[0].url} alt="#" />
          </Link>
        </div>
        <div className="product-info">
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
          <ProgressBar
            now={60}
            label={`${60}%`}
            style={{ marginTop: "20px", marginBottom: "20px" }}
          />

          <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
            <li>
              Funding Target: <span>USD {price}</span>
            </li>

            <li>
              Interest Rate Of Return (RR): <span>10.6%</span>
            </li>
            <li>
              Est Net Rental Yield: <span>6.82%</span>
            </li>
            <li>
              Market Valuation: <span>USD 100 000</span>
            </li>
            <li>
              Tsigiro Discount: <span>2.88%</span>
            </li>
            <li>
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
                  },
                }}
              >
                <Button>View Property</Button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="product-info-bottom"></div>
      </div>
    </div>
  );
}

export default Investments;
