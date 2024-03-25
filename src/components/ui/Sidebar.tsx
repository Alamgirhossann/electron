"use client";
import { Button, Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";

import { USER_ROLE } from "@/constants/role";
import { sidebarItems } from "@/constants/sidebarItems";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { authKey } from "@/constants/storageKey";
import styles from "../ui/style.module.css";
const { Sider } = Layout;

const Sidebar = () => {
  const router = useRouter();
  const { role } = getUserInfo() as any;

  const logOut = () => {
    removeUserInfo(authKey);
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
    localStorage.removeItem("userProfileId");
    router.push("/login");
  };
  const [collapsed, setCollapsed] = useState<any>(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "sticky",
          left: 0,
          top: 0,
          bottom: 0,
          background: "white",
        }}
      >
        <div
          className={`font-bold  text-center mt-3  ${
            collapsed ? "text-xl mt-3" : "text-3xl mb-3"
          }`}
        >
          <span className={`${styles.customShape}`}>Electron</span>
        </div>
        <div className="demo-logo-vertical" />
        <div>
          <Menu
            // theme="dark"

            defaultSelectedKeys={["1"]}
            mode="inline"
            items={sidebarItems(role)}
          />
        </div>
        <div className={`mt-10 overflow-auto ${collapsed ? " ms-1" : "ms-8"}`}>
          <button
            className="bg-[#f14c36] px-4 py-2 rounded-md text-white"
            onClick={logOut}
          >
            logout
          </button>
        </div>
      </Sider>
    </>
  );
};

export default Sidebar;
