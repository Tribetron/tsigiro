import React, {useRef, useState} from "react";
import Property from "./Property";
import {useEffect} from "react";
import {queryAdjuster, queryPageAdjuster} from "../../api/RouteHelpers";
import {useMutation, useQuery} from "react-query";
import PropertyService from "../../api/PropertyService";
import LoadingBar from "react-top-loading-bar";
import Search from "./search";
import {Link} from "react-router-dom";
import Sidebar from "../shop-components/shop-sidebar";

function PropertyList() {
    const [data, setData] = useState("");
    const [state, setState] = useState({});
    const ref = useRef(null);

    const numberToArray = (num) => {
        const number = parseInt(num) + ((data.propertiesCount % data.resultsPerPage) > 0 ? 1 : 0)
        let arr = [];
        for (var x = 0; x <= number; x++) {
            arr.push(x);
        }
        return arr;
    };

    const pageHandler = () => {
        const queryParams = window.location.href;
        if (queryParams.includes("page")) {
            const obj = queryPageAdjuster(queryParams);
            return parseInt(obj.page);
        }
        return 1;
    };


    useQuery("properties", () => PropertyService.getPropertyList(queryAdjuster(window.location.href)), {
        onSettled: ((s) => {
            ref.current.complete();
        }),
        onSuccess: ((x) => {
            const data = x.data;
            setState({
                ...data,
                pages: numberToArray((data.propertiesCount / data.resultsPerPage)),
                page: pageHandler()
            });
            ref.current.complete();

        }),
        onError: ((x) => {
            console.log(x);
        }),
    });

    useEffect(() => {
        ref.current.continuousStart();
    }, []);

    const handleNextPagination = (page) => {
        const currentPage = state.page;
        if (currentPage != state.pages.length) {
            const query = window.location.href.split('?')[1] || "";
            if (query?.includes("page")) {
                window.location.href = window.location.href.replace("page=" + state.page, "page=" + (state.page + 1))
            } else {
                if (query.length >= 1) {
                    window.location.href = window.location.href + "&page=" + (state.page + 1);
                } else {
                    window.location.href = window.location.href + "?page=" + (state.page + 1);
                }
            }
        }
        return;
    };


    const handlePrevPagination = () => {
        const currentPage = state.page;
        if (currentPage != 1) {
            const query = window.location.href.split('?')[1] || "";
            if (query?.includes("page")) {
                window.location.href = window.location.href.replace("page=" + state.page, "page=" + (state.page - 1))
            } else {
                if (query.length >= 1) {
                    window.location.href = window.location.href + "&page=" + (state.page - 1);
                } else {
                    window.location.href = window.location.href + "?page=" + (state.page - 1);
                }
            }
        }
        return;
    }

    const handlePageClick = (page) => {
        const currentPage = state.page;
        if (currentPage != page) {
            const query = window.location.href.split('?')[1] || "";
            if (query?.includes("page")) {
                window.location.href = window.location.href.replace("page=" + state.page, "page=" + page)
            } else {
                if (query.length >= 1) {
                    window.location.href = window.location.href + "&page=" + page;
                } else {
                    window.location.href = window.location.href + "?page=" + page;
                }
            }
        }
        return;
    }


    return <div className="row">
        <Sidebar />
        <LoadingBar color='green' progress={5} ref={ref} />
        <div className="col-lg-8  mb-100">
            <div className="tab-content">
                <div
                    className="tab-pane fade active show"
                    id="liton_product_grid"
                >
                    <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                        <div className="row">
                            <Search />
                            {(state.properties || []).map((properties) => {
                                return (
                                    <Property
                                        key={properties.propertyID}
                                        name={properties.name}
                                        location={properties.location}
                                        price={properties.price}
                                        bathrooms={properties.bathrooms}
                                        bedrooms={properties.bedrooms}
                                        rooms={properties.rooms}
                                        description={properties.description}
                                        images={properties.images}
                                        propertyID={properties._id}
                                        x={properties.dimensionsX}
                                        y={properties.dimensionsY}
                                        propertyStatus={properties.propertyStatus}
                                        size={properties.size}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Pagination Component */}
            <div className="ltn__pagination-area text-center">
                <div className="ltn__pagination">
                    <ul>
                        <li onClick={() => handlePrevPagination()}>
                            <Link to="#">
                                <i className="fas fa-angle-double-left" />
                            </Link>
                        </li>
                        {
                            (state.pages || []).map((x, index) => {
                                return <li
                                    onClick={() => {
                                        handlePageClick(index + 1)
                                    }}
                                    key={index}
                                    className={state.page === (index + 1) && "active"} >
                                    <Link to="#" >{index + 1}</Link>
                                </li>
                            })
                        }
                        <li >
                            <Link to="#" onClick={() => {
                                handleNextPagination()
                            }}>
                                <i className="fas fa-angle-double-right" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div >
}

export default PropertyList;
