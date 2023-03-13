import React from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";

function Investments({
    id,
    name,
    description,
    location,
    price,
    fundingTarget,
    interest,
    rent,
    marketValuation,
    discount,
    currentInvestment,
    bathrooms,
    bedrooms,
    rooms,
    area,
    type,
    images,
    propertyID,
    x,
    y,
    propertyStatus,
    size,
    share,
}) {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const percentage = Math.floor((currentInvestment / marketValuation) * 100);
    function currencyFormat(num) {
        return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }
    return (
        <div className="col-lg-6 col-xl-6 col-sm-6 col-12">
            <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                <div className="product-img go-top">
                    <Link
                        to={{
                            pathname: "/investment-details",
                            parseProps: {
                                id,
                                name,
                                description,
                                location,
                                price,
                                fundingTarget,
                                interest,
                                rent,
                                marketValuation,
                                discount,
                                currentInvestment,
                                bathrooms,
                                bedrooms,
                                rooms,
                                area,
                                type,
                                images,
                                propertyID,
                                x,
                                y,
                                propertyStatus,
                                size,
                                share,
                            },
                        }}
                    >
                        <img src={images[0].url} alt="#" />
                    </Link>
                </div>
                <div className="product-info">
                    <h2 className="product-title go-top">{name}</h2>
                    <div className="product-img-location go-top">
                        <ul>
                            <li>
                                <i className="flaticon-pin" /> {location}
                            </li>
                        </ul>
                    </div>
                    <ProgressBar
                        variant="success"
                        now={percentage}
                        label={`${percentage}%`}
                        style={{marginTop: "20px", marginBottom: "20px"}}
                    />

                    <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                        <li>
                            Funding Target: <span>USD {currencyFormat(fundingTarget)}</span>
                        </li>

                        <li>
                            Interest Rate Of Return (RR): <span>{interest} %</span>
                        </li>
                        <li>
                            Est Net Rental Yield: <span>{rent} %</span>
                        </li>
                        <li>
                            Market Valuation:{" "}
                            <span>USD {currencyFormat(marketValuation)}</span>
                        </li>
                        <li>
                            Current Share Price:{" "}
                            <span>USD {currencyFormat(share)} per share</span>
                        </li>
                        <li>
                            Tsigiro Discount: <span>{discount} %</span>
                        </li>
                    </ul>
                    <Link
                        to={{
                            pathname: "/investment-details",
                            parseProps: {
                                id,
                                name,
                                description,
                                location,
                                price,
                                fundingTarget,
                                interest,
                                rent,
                                marketValuation,
                                discount,
                                currentInvestment,
                                bathrooms,
                                bedrooms,
                                rooms,
                                area,
                                type,
                                images,
                                propertyID,
                                x,
                                y,
                                propertyStatus,
                                size,
                                share,
                            },
                        }}
                    >
                        <Button
                            style={{backgroundColor: "#47878a", marginBottom: "10px"}}
                        >
                            View Property
                        </Button>
                    </Link>
                </div>
                <div className="product-info-bottom"></div>
            </div>
        </div>
    );
}

export default Investments;
