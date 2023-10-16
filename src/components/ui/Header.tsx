"use client";

import React, { useEffect, useState } from "react";
import { Row, Col, Menu, Input, Button, MenuProps } from "antd";
import { useRouter } from "next/navigation";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import Link from "next/link";
import { useAdminsQuery, useUserProfileMutation } from "@/redux/api/adminApi";
import { useGeneralUsersQuery } from "@/redux/api/generalUserApi";

const { Search } = Input;

const Header = () => {
  const router = useRouter();
  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  //hydran issue  in header
  const { SubMenu } = Menu;
  const { userId, role } = getUserInfo() as any;

  useEffect(() => {
    localStorage.setItem("userId", userId);
    localStorage.setItem("role", role);
  }, []);

  const { data: adminData } = useAdminsQuery({ limit: 100 });
  const { data: generalUserData } = useGeneralUsersQuery({ limit: 100 });

  // console.log("general", generalUserData, "admin", adminData);

  const userGeneral = generalUserData?.gereral?.find((id) => id.id === userId);

  const userAdmin = adminData?.admins?.find((id) => id.id === userId);
  // console.log(userGeneral, userAdmin);

  return (
    <>
      <Row className=" bg-slate-900">
        <Col xs={6} sm={6} md={4} className="flex items-center h-10">
          {/* Logo */}
          <div>
            <h1 className="text-[1.3rem] md:text-[2rem] text-white">
              Electron
            </h1>
          </div>
        </Col>
        <Col xs={12} sm={12} md={16}>
          {/* Menu */}
          <Menu mode="horizontal" theme="dark">
            <Menu.Item key="home">
              <Link href={`/home`}>Home</Link>
            </Menu.Item>
            <Menu.Item key="service">
              <Link href={`/home/#service`}>Service</Link>
            </Menu.Item>
            <Menu.Item key="contact">
              <Link href={`/home/#contact`}>Contact Us</Link>
            </Menu.Item>
            <Menu.Item key="feedback">
              <Link href={`/feedback`}>Feedback</Link>
            </Menu.Item>
            {userAdmin && (
              <SubMenu title="User" key="user">
                <Menu.Item key="name">
                  {userAdmin?.name?.firstName} {userAdmin?.name?.middleName}{" "}
                  {userAdmin?.name?.lastName}
                </Menu.Item>
                <Menu.Item key="dashboard">
                  <Link href="/admin/profile"> Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="logout">
                  <Button className="text-gray-400" onClick={logOut}>
                    Logout
                  </Button>
                </Menu.Item>
              </SubMenu>
            )}
            {userGeneral && (
              <SubMenu title="User" key="user">
                <Menu.Item key="name">
                  {userGeneral?.name?.firstName} {userGeneral?.name?.middleName}{" "}
                  {userGeneral?.name?.lastName}
                </Menu.Item>
                <Menu.Item key="dashboard">
                  <Link href="/user/profile"> Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="logout">
                  <Button className="text-gray-400" onClick={logOut}>
                    Logout
                  </Button>
                </Menu.Item>
              </SubMenu>
            )}
            {!userAdmin && !userGeneral && (
              <Menu.Item key="login">
                <Link href="/login">Login</Link>
              </Menu.Item>
            )}
          </Menu>
        </Col>
        <Col xs={6} sm={6} md={4} className="flex items-center h-10 mt-2">
          {/* Search Field */}
          <div>
            <Search
              className="bg-gray-200"
              placeholder="Search"
              onSearch={(value) => console.log(value)}
              enterButton
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Header;
