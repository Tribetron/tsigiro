import React, {useRef} from 'react'
import {useState} from 'react'
import {useMutation} from 'react-query';
import {Link, Redirect} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import RequestService from '../../api/RequestService';
import {fixPricing} from '../../api/RouteHelpers';


const BannerMain = () => {
    const [state, setState] = useState({});
    const postRequest = useMutation();
    const ref = useRef(null);

    const newRequest = useMutation(RequestService.create, {
        onSettled: ((x) => {
            ref.current.complete();
        }),
        onSuccess: ((x) => {
            setState({submitRequest: true});
        }),
        onError: ((x) => {
            console.log(x);
        })
    })
    const handleRequestSubmission = (key) => {
        key.preventDefault();
        var formEl = document.forms["request-form"];
        var formData = new FormData(formEl);
        const propertyRequest = {
            propertyType: formData.get("propertyType"),
            city: formData.get("city"),
            subLocation: formData.get("subLocation"),
            bedrooms: formData.get("bedrooms"),
            minArea: formData.get("minSize"),
            maxArea: formData.get("maxSize"),
            moreInformation: formData.get("moreInformation"),
            minPrice: parseInt(fixPricing(formData.get("price"))[0]),
            maxPrice: parseInt(fixPricing(formData.get("price"))[1])
        };

        const requests = Object.keys(propertyRequest);
        let error = false;
        requests.map((x) => {
            if (propertyRequest[x] === "null" || !propertyRequest[x]) {
                setState({error: 'You need to select and fill all options before submiting a request'})
                error = true;
            }
        })

        if (!error) {
            ref.current.continuousStart();
            newRequest.mutate(propertyRequest);
        };

    }
    return (
        <div className="ltn__slider-area ltn__slider-4" style={{paddingBottom: 300}}>
            {
                state.submitRequest && <Redirect to={{
                    pathname: '/property-request-success',
                }} />
            }
            <LoadingBar color='green' progress={5} ref={ref} />

            <div className="ltn__slide-one-active----- slick-slide-arrow-1----- slick-slide-dots-1----- arrow-white----- ltn__slide-animation-active">
                {/* ltn__slide-item */}
                <div
                    className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-4 bg-image bg-overlay-theme-black-60"
                    data-bs-bg={process.env.PUBLIC_URL + "assets/img/tsigiro/prop1.jpg"}
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
                                                    <div className="car-dealer-form-inner"
                                                    >
                                                        <form
                                                            action='/properties'
                                                            className="ltn__car-dealer-form-box row"
                                                        >
                                                            <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-4 col-md-6">
                                                                <select
                                                                    className="nice-select" name="propertyType" >
                                                                    <option value="nulls">Property Type</option>
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
                                                                    <option value="null">Sub Location</option>
                                                                    <option value="mtPleasant">Mt, Pleasant</option>
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
                                                                    <option value="null">Bedrooms</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                </select>
                                                            </div>
                                                            <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-cog col-lg-4 col-md-6">
                                                                <div className="input-item input-item-name ltn__custom-icon">
                                                                    <input
                                                                        type="text"
                                                                        name="minSize"
                                                                        placeholder="Min size (in sqft)"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-cog col-lg-4 col-md-6">
                                                                <div className="input-item input-item-name ltn__custom-icon">
                                                                    <input
                                                                        type="text"
                                                                        name="maxSize"
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
                                                                    <button type="submit" class="btn theme-btn-1 btn-effect-1 text-uppercase">Search Properties</button>

                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="ltn__form_tab_1_2">
                                                    <div className="car-dealer-form-inner">
                                                        <form
                                                            action='/investing'
                                                            className="ltn__car-dealer-form-box row"
                                                        >
                                                            <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-4 col-md-6">
                                                                <select

                                                                    className="nice-select" name="propertyType" >
                                                                    <option value="null">Property Type</option>
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
                                                                    <option value="null">Sub Location</option>
                                                                    <option value="mtPleasant">Mt, Pleasant</option>
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
                                                                    <option value="null">Bedrooms</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                </select>
                                                            </div>
                                                            <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-cog col-lg-4 col-md-6">
                                                                <div className="input-item input-item-name ltn__custom-icon">
                                                                    <input
                                                                        type="text"
                                                                        name="minSize"
                                                                        placeholder="Min size (in sqft)"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-cog col-lg-4 col-md-6">
                                                                <div className="input-item input-item-name ltn__custom-icon">
                                                                    <input
                                                                        type="text"
                                                                        name="maxSize"
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
                                                                    <button type="submit" class="btn theme-btn-1 btn-effect-1 text-uppercase">Search Investments</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="ltn__form_tab_1_3">
                                                    <div className="car-dealer-form-inner">
                                                        <form
                                                            // action="/property-request-success"
                                                            className="ltn__car-dealer-form-box row"
                                                            id="request-form"
                                                            onSubmit={handleRequestSubmission}
                                                        >
                                                            <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-4 col-md-6">
                                                                <select

                                                                    className="nice-select" name="propertyType" >
                                                                    <option value="null">Property Type</option>
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
                                                                    <option value="null">Sub Location</option>
                                                                    <option value="mtPleasant">Mt, Pleasant</option>
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
                                                                    <option value="null">Bedrooms</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                </select>
                                                            </div>
                                                            <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-cog col-lg-4 col-md-6">
                                                                <div className="input-item input-item-name ltn__custom-icon">
                                                                    <input
                                                                        type="text"
                                                                        name="minSize"
                                                                        placeholder="Min size (in sqft)"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-cog col-lg-4 col-md-6">
                                                                <div className="input-item input-item-name ltn__custom-icon">
                                                                    <input
                                                                        type="text"
                                                                        name="maxSize"
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
                                                                    {
                                                                        state.error && <h6 style={{color: '#7676a7'}}>{state.error}</h6>
                                                                    }
                                                                    <button type="submit" class="btn theme-btn-1 btn-effect-1 text-uppercase">Submit Request</button>
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
    )
}

export default BannerMain