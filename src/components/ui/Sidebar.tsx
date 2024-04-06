"use client";
import { Button, Layout, Menu, Tooltip } from "antd";
import React, { useEffect, useState } from "react";

import { USER_ROLE } from "@/constants/role";
import { sidebarItems } from "@/constants/sidebarItems";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { authKey } from "@/constants/storageKey";
import styles from "../ui/style.module.css";
import { LogoutOutlined } from "@ant-design/icons";
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
        <div className="flex flex-col h-screen">
          <div
            className={`font-bold first-div text-center mt-3 ${
              collapsed ? "text-xl mt-3" : "text-3xl mb-3"
            }`}
          >
            <span className={`${styles.customShape}`}>Electron</span>
          </div>
          <div className="demo-logo-vertical" />
          <div
            className={`${styles.customScrollbar} overflow-auto second-div flex-grow custom-scrollbar`}
          >
            <Menu
              // theme="dark"

              defaultSelectedKeys={["1"]}
              mode="inline"
              items={sidebarItems(role)}
            />
          </div>
          <div
            className={`relative h-24 mt-10 pt-10 third-div ${
              collapsed ? "flex justify-center" : "ms-8"
            }`}
          >
            {collapsed ? (
              <Tooltip title="Logout" placement="left">
                <button
                  className="p-3 absolute bottom-16 text-center rounded-md active:bg-gray-200"
                  onClick={logOut}
                >
                  <LogoutOutlined />{" "}
                  <span className={`${collapsed && "hidden"}`}>Logout</span>
                </button>
              </Tooltip>
            ) : (
              <button
                className="absolute bottom-16 text-center rounded-md active:bg-gray-200"
                onClick={logOut}
              >
                <LogoutOutlined />{" "}
                <span className={`${collapsed && "hidden"}`}>Logout</span>
              </button>
            )}
          </div>
        </div>
      </Sider>
    </>
  );
};

export default Sidebar;
