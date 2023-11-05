"use client";

import React, { useEffect, useState } from "react";
import { Row, Col, Menu, Input } from "antd";
import { useRouter } from "next/navigation";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import Link from "next/link";
import { useAdminsQuery } from "@/redux/api/adminApi";
import { useGeneralUsersQuery } from "@/redux/api/generalUserApi";
import { useSuperAdminsQuery } from "@/redux/api/superAdmin";

const { Search } = Input;

const Header = () => {
  const [superAdminDataFind, setSuperAdminDataFind] = useState<any>();

  console.log(superAdminDataFind);
  const router = useRouter();
  const logOut = () => {
    removeUserInfo(authKey);
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
    localStorage.removeItem("userProfileId");
    router.push("/login");
  };

  //hydran issue  in header
  const { SubMenu } = Menu;
  const { userId, role } = getUserInfo() as any;

  const changeRoute = () => {
    router.push("/login");
  };

  useEffect(() => {
    localStorage.setItem("userId", userId);
    localStorage.setItem("role", role);
  }, [userId, role]);

  const { data: adminData } = useAdminsQuery({ limit: 100 });
  const { data: superAdminData } = useSuperAdminsQuery({ limit: 100 });
  const { data: generalUserData } = useGeneralUsersQuery({ limit: 100 });

  // console.log("general", generalUserData, "admin", adminData);

  const userGeneral = generalUserData?.gereral?.find((id) => id.id === userId);

  const userAdmin = adminData?.admins?.find((id) => id.id === userId);
  useEffect(() => {
    const userSuperAdmin = superAdminData?.superAdmin?.find(
      (id) => id.id === userId
    );
    setSuperAdminDataFind(userSuperAdmin);
  }, [superAdminData?.superAdmin, userId]);

  // console.log(userGeneral, userAdmin);

  return (
    <>
      <Row className=" bg-slate-900 md:px-5 px-2">
        <Col xs={8} sm={8} md={4} className="flex items-center h-10">
          {/* Logo */}
          <div className="mt-2 md:mt-0">
            <h1 className="text-[1.3rem] md:text-[2rem] text-white">
              Electron
            </h1>
          </div>
        </Col>
        <Col xs={16} sm={16} md={16} className="flex justify-end">
          {/* Menu */}
          <Menu mode="horizontal" theme="dark">
            <Menu.Item key="home">
              <Link href="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="service">
              <Link href="/#service">Service</Link>
            </Menu.Item>
            <Menu.Item key="contact">
              <Link href="/#contact">Contact Us</Link>
            </Menu.Item>

            {userAdmin && (
              <>
                <Menu.Item key="name">
                  {userAdmin?.name?.firstName} {userAdmin?.name?.middleName}{" "}
                  {userAdmin?.name?.lastName}
                </Menu.Item>
                <Menu.Item key="dashboard">
                  <Link href="/admin"> Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="logout">
                  <p className="text-gray-400" onClick={logOut}>
                    Logout
                  </p>
                </Menu.Item>
              </>
            )}
            {superAdminDataFind && (
              <>
                <Menu.Item key="name">
                  {superAdminDataFind?.name?.firstName}{" "}
                  {superAdminDataFind?.name?.middleName}{" "}
                  {superAdminDataFind?.name?.lastName}
                </Menu.Item>
                <Menu.Item key="dashboard">
                  <Link href="/super_admin"> Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="logout">
                  <p className="text-gray-400" onClick={logOut}>
                    Logout
                  </p>
                </Menu.Item>
              </>
            )}
            {userGeneral && (
              <>
                <Menu.Item key="feedback">
                  <Link href="/feedback">Feedback</Link>
                </Menu.Item>
                <Menu.Item key="dashboard">
                  <Link href="/user"> Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="name">
                  {userGeneral?.name?.firstName} {userGeneral?.name?.middleName}{" "}
                  {userGeneral?.name?.lastName}
                </Menu.Item>

                <Menu.Item key="logout">
                  <p className="text-gray-400" onClick={logOut}>
                    Logout
                  </p>
                </Menu.Item>
              </>
            )}
            {!userAdmin && !userGeneral && !superAdminDataFind && (
              <Menu.Item key="login">
                <p onClick={changeRoute}>Login</p>
              </Menu.Item>
            )}
          </Menu>
        </Col>
        <Col xs={0} sm={0} md={4} className="flex items-center h-10 mt-2 ">
          {/* Search Field */}

          <Search
            placeholder="Search"
            onSearch={(value) => console.log(value)}
            enterButton
          />
        </Col>
      </Row>
    </>
  );
};

export default Header;
