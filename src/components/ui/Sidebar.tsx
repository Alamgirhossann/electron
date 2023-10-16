"use client";
import { Button, Layout, Menu } from "antd";
import React, { useState } from "react";

import { USER_ROLE } from "@/constants/role";
import { sidebarItems } from "@/constants/sidebarItems";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { authKey } from "@/constants/storageKey";
const { Sider } = Layout;

const Sidebar = () => {
  const router = useRouter();
  const { role } = getUserInfo() as any;
  const [collapsed, setCollapsed] = useState(false);
  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };
  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={280}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "sticky",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div
          className={`text-white font-bold  text-center  ${
            collapsed ? "text-xl mt-3" : "text-3xl mb-3"
          }`}
          // style={{
          //   color: "white",
          //   fontSize: "1.3rem",
          //   textAlign: "center",
          //   fontWeight: "bold",
          //   marginBottom: "1rem",

          // },collapsed?{fon}}
        >
          Electron
        </div>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={sidebarItems(role)}
        />
        <div className={`mt-10 ${collapsed ? " ms-1" : "ms-8"}`}>
          <Button className="bg-blue-500" onClick={logOut} type="primary">
            logout
          </Button>
        </div>
      </Sider>
    </>
  );
};

export default Sidebar;
