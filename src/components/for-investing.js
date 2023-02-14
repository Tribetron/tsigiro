import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import ShogGrid from "./shop-components/shop-right-sidebar";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";

const PropertiesForInvesting = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Properties For Investing" />
      <ShogGrid />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default PropertiesForInvesting;
