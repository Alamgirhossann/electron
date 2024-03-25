"use client";

import { Layout } from "antd";
import Contents from "@/components/ui/Contents";
import Footer from "@/components/ui/Footer";
import ScrollToTopButton from "@/components/ui/ScrollToTop";
import Header from "@/components/ui/Header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {" "}
      <Layout>
        <Header />
        <Contents>{children}</Contents>
        <Footer />

        <ScrollToTopButton />
      </Layout>
    </>
  );
};

export default DashboardLayout;
