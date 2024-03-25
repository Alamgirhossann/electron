"use client";

import AboutUs from "@/components/ui/AboutUs";
import Blog from "@/components/ui/Blog";
import ContactUs from "@/components/ui/ContactUs";
import CountingOnScroll from "@/components/ui/CountingOnScroll";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import OurProject from "@/components/ui/OurProject";
import OurTeam from "@/components/ui/OurTeam";
import ScrollToTopButton from "@/components/ui/ScrollToTop";
import Services from "@/components/ui/Services";
import TestimonialCarousel from "@/components/ui/Testimonial";
import TopBanner from "@/components/ui/TopBanner";

const Home = () => {
  return (
    <div>
      <Header />
      <TopBanner />
      <Services />
      <OurProject />
      <AboutUs />
      <CountingOnScroll />
      <OurTeam />
      <TestimonialCarousel />
      <ContactUs />
      <Blog />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
