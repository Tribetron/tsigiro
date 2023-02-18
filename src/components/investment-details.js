import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import ProductSlider from "./shop-components/product-slider-v1";
import InvestmentDetails from "./shop-components/investment-details";
import Footer from "./global-components/footer";

const Investment_Details = (props) => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Investment Details" customclass="mb-0" />
      {/* <ProductSlider data={props.location.parseProps} /> */}
      <InvestmentDetails data={props.location.parseProps} />
      <Footer />
    </div>
  );
};

export default Investment_Details;
