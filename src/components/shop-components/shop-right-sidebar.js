import React, {Component} from "react";
import {Link} from "react-router-dom";
import parse from "html-react-parser";
import Sidebar from "./shop-sidebar";
import Search from "../functional-components/search";
import PropertyList from "../functional-components/PropertyList";

export default function ShopGridV1() {

    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
        <div style={{marginTop: 50}}>
            <div className="ltn__product-area ltn__product-gutter">
                <div className="container">
                    <PropertyList />
                </div>
            </div>
        </div>
    );
}
