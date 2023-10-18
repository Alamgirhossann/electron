"use client";

import AboutUs from "@/components/ui/AboutUs";
import ContactUs from "@/components/ui/ContactUs";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import OurProject from "@/components/ui/OurProject";
import ScrollToTopButton from "@/components/ui/ScrollToTop";
import Services from "@/components/ui/Services";
import TestimonialCarousel from "@/components/ui/Testimonial";
import TopBanner from "@/components/ui/TopBanner";

export default function Home() {
  return (
    <div>
      <Header />
      <TopBanner />
      <Services />
      <OurProject />
      <AboutUs />
      <TestimonialCarousel />
      <ContactUs />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
