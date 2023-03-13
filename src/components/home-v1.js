import React from "react";
import Navbar from "./global-components/navbar";
import Banner from "./section-components/banner";
import BannerV2 from "./section-components/banner-v5";
import SearchForm from "./section-components/search-form";
import Aboutv1 from "./section-components/about-v1";
import Counter from "./section-components/counter-v1";
import AboutV2 from "./section-components/about-v2";
import Featuresv1 from "./section-components/features-v1";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";
import BannerMain from "./section-components/BannerMain";
import Category from "./section-components/category-v3";

const Home_V1 = () => {
    return (
        <div>
            <Navbar />
            <BannerMain />
            {/* <SearchForm /> */}
            {/* <Aboutv1 /> */}
            {/* <Counter /> */}
            {/* <AboutV2 /> */}
            {/* <Featuresv1 customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---" /> */}
            {/* <ProSlider /> */}
            {/* <Apartment /> */}
            {/* <VideoV1 /> */}

            <Category />
            {/* <Testimonial /> */}
            {/* <BlogSlider customClass="section-subtitle-2" /> */}
            {/* <CallToActionV1 /> */}
            <Footer />
        </div>
    );
};

export default Home_V1;
