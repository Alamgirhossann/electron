"use client";

import React, { useEffect, useState } from "react";
import { Row, Col, Menu, Input, Layout } from "antd";
import { useRouter } from "next/navigation";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import Link from "next/link";
import { useAdminsQuery } from "@/redux/api/adminApi";
import { useGeneralUsersQuery } from "@/redux/api/generalUserApi";
import { useSuperAdminsQuery } from "@/redux/api/superAdmin";
import styles from "../ui/style.module.css";
import logo from "../../assets/logo (2).png";

import { HomeOutlined, UserOutlined, SettingOutlined } from "@ant-design/icons";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

const { Content, Footer } = Layout;
const { Search } = Input;

const Header = () => {
  const [superAdminDataFind, setSuperAdminDataFind] = useState<any>();

  console.log(superAdminDataFind);
  const router = useRouter();
  const handleLogOut = () => {
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

  const { data: session }: any = useSession();
  const handleSignOut = () => {
    signOut();
  };

  // useEffect(() => {
  //   //@ts-ignore
  //   if (!session && !session?.user) {
  //     router.push("/login");
  //   }
  // }, [session]);

  return (
    <>
      <Row className=" bg-white md:px-5 px-2 py-4 font-bold">
        <Col
          xs={8}
          sm={8}
          md={8}
          className="flex items-center h-10 border-b mt-[6px]"
        >
          <div className="">
            <h1
              className={` ms-3 text-[1.2rem] pb-[8.5px] md:pb-0 md:text-[1.9rem]`}
            >
              <span className={`${styles.customShape} ms-3`}>Electron</span>
            </h1>
          </div>
        </Col>
        <Col xs={16} sm={16} md={16}>
          <div>
            <Menu className={styles.menu} mode="horizontal">
              <Menu.Item key="home" style={{ color: "black" }}>
                <Link href="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="service" style={{ color: "black" }}>
                <Link href="/#service" style={{ color: "black" }}>
                  Service
                </Link>
              </Menu.Item>
              <Menu.Item key="contact" style={{ color: "black" }}>
                <Link href="/#contact">Contact Us</Link>
              </Menu.Item>

              {userAdmin && (
                <>
                  <Menu.Item key="dashboard" style={{ color: "black" }}>
                    <Link href="/overView"> Dashboard</Link>
                  </Menu.Item>
                  <Menu.Item key="name">
                    {userAdmin?.name?.firstName} {userAdmin?.name?.middleName}{" "}
                    {userAdmin?.name?.lastName}
                  </Menu.Item>

                  <Menu.Item key="logout">
                    <p className="text-black" onClick={handleLogOut}>
                      Logout
                    </p>
                  </Menu.Item>
                </>
              )}
              {superAdminDataFind && (
                <>
                  <Menu.Item key="dashboard" style={{ color: "black" }}>
                    <Link href="/overView"> Dashboard</Link>
                  </Menu.Item>
                  <Menu.Item key="name">
                    {superAdminDataFind?.name?.firstName}{" "}
                    {superAdminDataFind?.name?.middleName}{" "}
                    {superAdminDataFind?.name?.lastName}
                  </Menu.Item>

                  <Menu.Item key="logout">
                    <p className="text-black" onClick={handleLogOut}>
                      Logout
                    </p>
                  </Menu.Item>
                </>
              )}
              {userGeneral && (
                <>
                  <Menu.Item key="feedback" style={{ color: "black" }}>
                    <Link href="/feedback">Feedback</Link>
                  </Menu.Item>
                  <Menu.Item key="dashboard" style={{ color: "black" }}>
                    <Link href="/overView"> Dashboard</Link>
                  </Menu.Item>
                  <Menu.Item key="name">
                    {userGeneral?.name?.firstName}{" "}
                    {userGeneral?.name?.middleName}{" "}
                    {userGeneral?.name?.lastName}
                  </Menu.Item>

                  <Menu.Item key="logout">
                    <p className="text-black" onClick={handleLogOut}>
                      Logout
                    </p>
                  </Menu.Item>
                </>
              )}
              {session && (
                <>
                  <Menu.Item key="feedback" style={{ color: "black" }}>
                    <Link href="/feedback">Feedback</Link>
                  </Menu.Item>
                  <Menu.Item key="dashboard" style={{ color: "black" }}>
                    <Link href="/user"> Dashboard</Link>
                  </Menu.Item>
                  <Menu.Item key="name">{session?.user.name}</Menu.Item>

                  <Menu.Item key="logout">
                    <p className="text-black" onClick={handleSignOut}>
                      Logout
                    </p>
                  </Menu.Item>
                </>
              )}
              {!userAdmin &&
                !userGeneral &&
                !superAdminDataFind &&
                !session && (
                  <Menu.Item key="login">
                    <p onClick={changeRoute}>Login</p>
                  </Menu.Item>
                )}
            </Menu>
          </div>
        </Col>

        {/* <Col xs={0} sm={0} md={4} className="hidden md:block h-10 mt-2 ">
             
             <Search
               className="hidden md:block"
               placeholder="Search"
               onSearch={(value) => console.log(value)}
               enterButton
             />
           </Col> */}
      </Row>
    </>
  );
};

export default Header;
