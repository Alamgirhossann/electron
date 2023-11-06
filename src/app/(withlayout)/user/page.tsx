"use client";

import { useGeneralUsersQuery } from "@/redux/api/generalUserApi";
import React, { useEffect, useState } from "react";
import heading_icon from "../../../assets/heading_icon.png";
import Image from "next/image";
import { Button, Card, message } from "antd";
import Loading from "@/app/loading";
import Link from "next/link";
import { getUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";

const UserProfile = () => {
  const [userData, setUserData] = useState<string | null>();

  const router = useRouter();
  const { role } = getUserInfo() as any;
  console.log(role);
  const { data: generalUserData } = useGeneralUsersQuery({ limit: 100 });

  useEffect(() => {
    setUserData(localStorage.getItem("userId"));
  }, [userData]);

  const userGeneral = generalUserData?.gereral?.find(
    (id) => id.id === userData
  );

  if (role !== "user") {
    router.back();
  }

  return (
    <>
      {role !== "user" && (
        <div className="flex justify-center items-center text-red-600 text-3xl h-screen">
          <p>Access Denied</p>
        </div>
      )}
      <div
        className={`md:px-5 md:mx-5 ${role !== "user" ? "hidden" : "block"}`}
      >
        <h1 className="flex justify-center md:my-16 my-8">
          <Image src={heading_icon} alt="heading_icon" width={20} height={15} />
          <span className="ms-3 md:text-[40px] text-xl font-bold">
            User Profile
          </span>
        </h1>
        <div className="flex justify-center">
          <div className=" shadow-2xl overflow-x-auto lg:w-2/4 w-full mx-2 px-2 bg-white rounded-md">
            {!userGeneral && <Loading />}
            {userGeneral && (
              <div className="md:text-xl text-md text-center">
                <div className="my-2">
                  <p className="font-bold">Name</p>
                  <p>
                    {userGeneral?.name?.firstName}{" "}
                    {userGeneral?.name?.middleName}{" "}
                    {userGeneral?.name?.lastName}
                  </p>
                </div>
                <div className="my-2">
                  <p className="font-bold">Email</p>
                  <p>{userGeneral?.email}</p>
                </div>
                <div className="my-2">
                  <p className="font-bold">Gender</p>
                  <p>{userGeneral?.gender}</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center mx-2">
          <div className=" mt-5">
            <Link href={`/user/userEdit/${userGeneral?._id}`}>
              {" "}
              <Button type="primary" className="bg-[#1677ff] me-2 my-2">
                Edit Profile
              </Button>
            </Link>
            <Link href="/user/payment">
              <Button type="primary" className="bg-[#1677ff]">
                Payment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
