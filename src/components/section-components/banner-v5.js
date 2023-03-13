import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";
import parse from "html-react-parser";

class BannerV5 extends Component {

    constructor() {
        super();
        this.state = {

        }
    };

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }



    render() {
        let publicUrl = process.env.PUBLIC_URL + "/";

        return (
            <div className="ltn__slider-area ltn__slider-4">
                {
                    this.state.searchProperties && <Redirect to={{
                        pathname: '/properties',
                        state: {...this.state}
                    }} />
                }

                {
                    this.state.searchInvestments && <Redirect to={{
                        pathname: '/investing',
                        state: {...this.state}
                    }} />
                }
                <div className="ltn__slide-one-active----- slick-slide-arrow-1----- slick-slide-dots-1----- arrow-white----- ltn__slide-animation-active">
                    {/* ltn__slide-item */}
                    <div
                        className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-4 bg-image bg-overlay-theme-black-60"
                        data-bs-bg={publicUrl + "assets/img/slider/11.jpg"}
                    >
                        <div className="ltn__slide-item-inner text-left">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 align-self-center">
                                        <div className="slide-item-car-dealer-form">
                                            <div className="ltn__car-dealer-form-tab">
                                                <div className="ltn__tab-menu  text-uppercase">
                                                    <div className="nav">
                                                        <a
                                                            className="active show"
                                                            data-bs-toggle="tab"
                                                            href="#ltn__form_tab_1_1"
                                                        >
                                                            <i className="fas fa-cart-plus" />
                                                            Buy
                                                        </a>
                                                        <a data-bs-toggle="tab" href="#ltn__form_tab_1_2">
                                                            <i className="fas fa-donate" />
                                                            Invest
                                                        </a>
                                                        <a data-bs-toggle="tab" href="#ltn__form_tab_1_3">
                                                            <i className="fas fa-vote-yea" />
                                                            Request
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="tab-content">
                                                    <div
                                                        className="tab-pane fade active show"
                                                        id="ltn__form_tab_1_1"
                                                    >
                                                        <div className="car-dealer-form-inner">
                                                            <form
                                                                action="#"
                                                                className="ltn__car-dealer-form-box row"
                                                            >
                                                                <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-4 col-md-6">
                                                                    <select className="nice-select" name="propertyType" >
                                                                        <option>Property Type</option>
                                                                        <option value="appartment">Apartment</option>
                                                                        <option value="commercial">Commercial Property</option>
                                                                        <option value="gardenflat">Garden Flats</option>
                                                                        <option value="familyhome">Single Family Home</option>
                                                                    </select>
                                                                </div>
                                                                <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-car col-lg-4 col-md-6">
                                                                    <select className="nice-select" name="city">
                                                                        <option value="harare">Harare</option>
                                                                        <option value="mashonlandWest">Mashonaland West</option>
                                                                        <option value="mashonlandEast">Mashonaland East</option>
                                                                        <option value="manicaland">Manicaland</option>
                                                                        <option value="masvingo">Masvingo</option>
                                                                        <option value="matebelandNorth">Matebeleland North</option>
                                                                        <option value="matebelandNorth">Matebeleland South</option>
                                                                    </select>
                                                                </div>
                                                                <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-meter col-lg-4 col-md-6">
                                                                    <select className="nice-select" name="subLocation" >
                                                                        <option value="subLocation">Sub Location</option>
                                                                        <option value="mtPleasna">Mt, Pleasant</option>
                                                                        <option>Greencroft</option>
                                                                        <option>Budiriro</option>
                                                                        <option>Madokero</option>
                                                                        <option>Zimre Park</option>
                                                                        <option>Ruwa</option>
                                                                        <option>Kuwadzana</option>
                                                                    </select>
                                                                </div>
                                                                <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-ring col-lg-4 col-md-6">
                                                                    <select className="nice-select" name="bedrooms" >
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
                                                                            placeholder="Min size (in sqft)"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-cog col-lg-4 col-md-6">
                                                                    <div className="input-item input-item-name ltn__custom-icon">
                                                                        <input
                                                                            type="text"
                                                                            name="name"
                                                                            placeholder="Max size (in sqft)"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="car-price-filter-range col-lg-12">
                                                                    <div className="price_filter">
                                                                        <div className="price_slider_amount">
                                                                            {/* <input
                                        type="submit"
                                        defaultValue="Your range:"
                                      /> */}
                                                                            <p>Property Price Range (USD)*</p>
                                                                            <input
                                                                                type="text"
                                                                                className="amount"
                                                                                name="price"
                                                                                placeholder="Add Your Price"
                                                                            />
                                                                        </div>
                                                                        <div className="slider-range" />
                                                                    </div>
                                                                    <div className="btn-wrapper text-center go-top">
                                                                        {/* <button type="submit" class="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</button> */}
                                                                        <div
                                                                            className="btn theme-btn-1 btn-effect-1 text-uppercase"
                                                                        >
                                                                            Search Properties
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="ltn__form_tab_1_2">
                                                        <div className="car-dealer-form-inner">
                                                            <form
                                                                action="#"
                                                                className="ltn__car-dealer-form-box row"
                                                            >
                                                                <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-4 col-md-6">
                                                                    <select className="nice-select">
                                                                        <option>Property Type</option>
                                                                        <option>Apartment</option>
                                                                        <option>Commercial Property</option>
                                                                        <option>Garden Flats</option>
                                                                        <option>Single Family Home</option>
                                                                    </select>
                                                                </div>
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
                                                                <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-meter col-lg-4 col-md-6">
                                                                    <select className="nice-select">
                                                                        <option>Sub Location</option>
                                                                        <option>Mt, Pleasant</option>
                                                                        <option>Greencroft</option>
                                                                        <option>Budiriro</option>
                                                                        <option>Madokero</option>
                                                                        <option>Zimre Park</option>
                                                                        <option>Ruwa</option>
                                                                        <option>Kuwadzana</option>
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
                                                                            placeholder="Min size (in sqft)"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-cog col-lg-4 col-md-6">
                                                                    <div className="input-item input-item-name ltn__custom-icon">
                                                                        <input
                                                                            type="text"
                                                                            name="name"
                                                                            placeholder="Max size (in sqft)"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="car-price-filter-range col-lg-12">
                                                                    <div className="price_filter">
                                                                        <div className="price_slider_amount">
                                                                            <p>Property Price Range (USD)*</p>
                                                                            <input
                                                                                type="text"
                                                                                className="amount"
                                                                                name="price"
                                                                                placeholder="Add Your Price"
                                                                            />
                                                                        </div>
                                                                        <div className="slider-range" />
                                                                    </div>
                                                                    <div className="btn-wrapper text-center go-top">
                                                                        <button type="submit" class="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</button>
                                                                        <Link
                                                                            to="/investing"
                                                                            className="btn theme-btn-1 btn-effect-1 text-uppercase"
                                                                        >
                                                                            Search Investments
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="ltn__form_tab_1_3">
                                                        <div className="car-dealer-form-inner">
                                                            <form
                                                                action="#"
                                                                className="ltn__car-dealer-form-box row"
                                                            >
                                                                <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-4 col-md-6">
                                                                    <select className="nice-select">
                                                                        <option>Property Type</option>
                                                                        <option>Apartment</option>
                                                                        <option>Commercial Property</option>
                                                                        <option>Garden Flats</option>
                                                                        <option>Single Family Home</option>
                                                                    </select>
                                                                </div>
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
                                                                <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-meter col-lg-4 col-md-6">
                                                                    <select className="nice-select">
                                                                        <option>Sub Location</option>
                                                                        <option>Mt, Pleasant</option>
                                                                        <option>Greencroft</option>
                                                                        <option>Budiriro</option>
                                                                        <option>Madokero</option>
                                                                        <option>Zimre Park</option>
                                                                        <option>Ruwa</option>
                                                                        <option>Kuwadzana</option>
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
                                                                            placeholder="Min size (in sqft)"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-cog col-lg-4 col-md-6">
                                                                    <div className="input-item input-item-name ltn__custom-icon">
                                                                        <input
                                                                            type="text"
                                                                            name="name"
                                                                            placeholder="Max size (in sqft)"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-cog col-lg-12 col-md-12">
                                                                    <div className="input-item input-item-name ltn__custom-icon">
                                                                        <textarea
                                                                            type="textarea"
                                                                            name="moreInformation"
                                                                            placeholder="More information"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="car-price-filter-range col-lg-12">
                                                                    <div className="price_filter">
                                                                        <div className="price_slider_amount">
                                                                            {/* <input
                                        type="submit"
                                        defaultValue="Your range:"
                                      /> */}
                                                                            <p>Property Price Range (USD)*</p>
                                                                            <input
                                                                                type="text"
                                                                                className="amount"
                                                                                name="price"
                                                                                placeholder="Add Your Price"
                                                                            />
                                                                        </div>
                                                                        <div className="slider-range" />
                                                                    </div>
                                                                    <div className="btn-wrapper text-center go-top">
                                                                        {/* <button type="submit" class="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</button> */}
                                                                        <Link
                                                                            to="/investing"
                                                                            className="btn theme-btn-1 btn-effect-1 text-uppercase"
                                                                        >
                                                                            Search Investments
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </form>
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
}

export default BannerV5;
