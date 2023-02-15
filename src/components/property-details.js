import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import ProductSlider from "./shop-components/product-slider-v1";
import ProductDetails from "./shop-components/shop-details";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";

const Property_Details = (props) => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Property Details" customclass="mb-0" />
      <ProductSlider data={props.location.parseProps} />
      <ProductDetails data={props.location.parseProps} />
      {/* <CallToActionV1 /> */}
      <Footer />
    </div>
  );
};

export default Property_Details;
