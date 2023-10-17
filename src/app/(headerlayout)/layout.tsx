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
        <div className=" font-bold text-lg text-black my-5 text-center">
          <p className="text-sm md:text-2xl">
            © 2023 All Rights Reserved by Electron
          </p>
        </div>
        <ScrollToTopButton />
      </Layout>
    </>
  );
};

export default DashboardLayout;
