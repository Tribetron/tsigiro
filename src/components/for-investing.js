import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";
import Invest from "./shop-components/right-investing";

const PropertiesForInvesting = () => {
  return (
    <div>
      <Navbar />
      {/* <PageHeader headertitle="Properties For Investing" /> */}
      <Invest />
      {/* <CallToActionV1 /> */}
      <Footer />
    </div>
  );
};

export default PropertiesForInvesting;
