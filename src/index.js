import React, {Component} from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    MemoryRouter,
} from "react-router-dom";
import HomeV1 from "./components/home-v1";
import About from "./components/about";
import Service from "./components/service";
import ServiceDetails from "./components/service-details";
import Portfolio from "./components/portfolio";
import PortfolioV2 from "./components/portfolio-v2";
import PortfolioDetails from "./components/portfolio-details";
import Team from "./components/team";
import TeamDetails from "./components/team-details";
import Faq from "./components/faq";
import ComingSoon from "./components/coming-soon";
import Error from "./components/404";
import Location from "./components/location";

import Shop from "./components/shop";
import ShopGrid from "./components/shop-grid";
import ProdductDetails from "./components/product-details";
import PropertyDetails from "./components/property-details";
import ShopLeftSidebar from "./components/shop-left-sidebar";
import ShopRightSidebar from "./components/shop-right-sidebar";

import BlogGrid from "./components/blog-grid";
import BlogLeftSidebar from "./components/blog-left-sidebar";
import BlogRightSidebar from "./components/blog-right-sidebar";
import Blog from "./components/blog";

import BlogDetails from "./components/blog-details";
import Contact from "./components/contact";
import Cart from "./components/cart";
import Checkout from "./components/checkout";
import MyAccount from "./components/my-account";
import Login from "./components/login";
import Register from "./components/register";
import AddListing from "./components/add-listing";
import Wishlist from "./components/wishlist";
import OrderTracking from "./components/order-tracking";
import History from "./components/history";
import PropertiesForSale from "./components/for-sale";
import PropertiesForInvesting from "./components/for-investing";
import {store} from "./redux/store";
import {Provider} from "react-redux";
import InvestmentDetails from "./components/shop-components/investment-details";
import PropertyInquiry from "./components/functional-components/PropertyInquiry";
import PrivateRoute from "./PrivateRoute";
import {setLoggedInUser} from "./api/Cookie";
import {encoded} from "./api/RouteHelpers";

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    {/* <HashRouter basename="/"> */}
                    <div>
                        <Switch>
                            <Route exact path="/auth/login" component={() => {
                                setLoggedInUser(null);
                                window.location.href = process.env.REACT_APP_AUTH + "?" + encoded(window.location.origin) || '';
                                return null;
                            }} />
                            <Route exact path="/auth/logout" component={() => {
                                setLoggedInUser(null);
                                window.location.href = process.env.REACT_APP_AUTH + "?" + encoded("logout") || '';
                                return null;
                            }} />
                            <PrivateRoute route={<Route exact path="/" component={HomeV1} />} />
                            <PrivateRoute route={<Route exact path="/my-account" component={MyAccount} />} />
                            <PrivateRoute route={<Route path="/about" component={About} />} />
                            <PrivateRoute route={<Route path="/service" component={Service} />} />
                            <PrivateRoute route={<Route path="/service-details" component={ServiceDetails} />} />
                            <PrivateRoute route={<Route path="/portfolio" component={Portfolio} />} />
                            <PrivateRoute route={<Route path="/portfolio-v2" component={PortfolioV2} />} />
                            <PrivateRoute route={<Route path="/portfolio-details" component={PortfolioDetails} />} />
                            <PrivateRoute route={<Route path="/team" component={Team} />} />
                            <PrivateRoute route={<Route path="/team-details" component={TeamDetails} />} />
                            <PrivateRoute route={<Route path="/faq" component={Faq} />} />
                            <PrivateRoute route={<Route path="/coming-soon" component={ComingSoon} />} />
                            <PrivateRoute route={<Route path="/coming-soon" component={ComingSoon} />} />
                            <Route path="/404" component={Error} />
                            <PrivateRoute route={<Route path="/location" component={Location} />} />
                            <PrivateRoute route={<Route path="/shop" component={Shop} />} />
                            <PrivateRoute route={<Route path="/properties" component={PropertiesForSale} />} />
                            <PrivateRoute route={<Route path="/investing" component={PropertiesForInvesting} />} />
                            <PrivateRoute route={<Route path="/shop-grid" component={ShopGrid} />} />
                            <PrivateRoute route={<Route path="/shop-left-sidebar" component={ShopLeftSidebar} />} />
                            <PrivateRoute route={<Route path="/shop-right-sidebar" component={ShopRightSidebar} />} />
                            <PrivateRoute route={<Route path="/product-details" component={ProdductDetails} />} />
                            <PrivateRoute route={<Route path="/property-details" component={PropertyDetails} />} />
                            <PrivateRoute route={<Route path="/investment-details" component={InvestmentDetails} />} />
                            <PrivateRoute route={<Route path="/property-inquiry" component={PropertyInquiry} />} />
                            <PrivateRoute route={<Route path="/blog-grid" component={BlogGrid} />} />
                            <PrivateRoute route={<Route path="/blog-left-sidebar" component={BlogLeftSidebar} />} />
                            <PrivateRoute route={<Route path="/blog-right-sidebar" component={BlogRightSidebar} />} />
                            <PrivateRoute route={<Route path="/blog" component={Blog} />} />
                            <PrivateRoute route={<Route path="/blog-details" component={BlogDetails} />} />
                            <PrivateRoute route={<Route path="/contact" component={Contact} />} />
                            <PrivateRoute route={<Route path="/cart" component={Cart} />} />
                            <PrivateRoute route={<Route path="/checkout" component={Checkout} />} />
                            <PrivateRoute route={<Route path="/login" component={Login} />} />
                            <PrivateRoute route={<Route path="/register" component={Register} />} />
                            <PrivateRoute route={<Route path="/add-listing" component={AddListing} />} />
                            <PrivateRoute route={<Route path="/wishlist" component={Wishlist} />} />
                            <PrivateRoute route={<Route path="/order-tracking" component={OrderTracking} />} />
                            <PrivateRoute route={<Route path="/history" component={History} />} />


                        </Switch>
                    </div>
                    {/* </HashRouter> */}
                </Router>
            </Provider>
        );
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById("quarter"));
