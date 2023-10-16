import AboutUs from "@/components/ui/AboutUs";
import ContactUs from "@/components/ui/ContactUs";
import OurProject from "@/components/ui/OurProject";
import Services from "@/components/ui/Services";
import TestimonialCarousel from "@/components/ui/Testimonial";
import TopBanner from "@/components/ui/TopBanner";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <TopBanner />
      <Services />
      <OurProject />
      <AboutUs />
      <TestimonialCarousel />
      <ContactUs />
    </div>
  );
};

export default HomePage;
