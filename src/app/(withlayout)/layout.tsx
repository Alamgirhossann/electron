"use client";

import { Layout } from "antd";
import { isLoggedIn } from "@/services/auth.service";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/ui/Sidebar";
import Contents from "@/components/ui/Contents";
import Loading from "../loading";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const userLoggedIn = isLoggedIn();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    } else {
      setIsLoading(true);
    }
  }, [router, isLoading, userLoggedIn]);

  if (!isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Layout hasSider>
        <Sidebar />
        <Contents>{children}</Contents>
      </Layout>
    </>
  );
};

export default DashboardLayout;
