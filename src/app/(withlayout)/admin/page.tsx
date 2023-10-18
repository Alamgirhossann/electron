"use client";

import { useAdminsQuery } from "@/redux/api/adminApi";
import { useGeneralUsersQuery } from "@/redux/api/generalUserApi";
import { getUserInfo } from "@/services/auth.service";
import React, { useEffect, useState } from "react";
import heading_icon from "../../../assets/heading_icon.png";
import Image from "next/image";
import { Button, Card, message } from "antd";
import Loading from "@/app/loading";
import { useRouter } from "next/navigation";

const AdminProfile = () => {
  const router = useRouter();
  const { role } = getUserInfo() as any;
  console.log(role);
  const { data: adminData } = useAdminsQuery({ limit: 100 });

  const userAdmin = adminData?.admins?.find(
    (id) => id.id === localStorage.getItem("userId")
  );

  if (role !== "admin") {
    router.back();
  }

  return (
    <>
      {role !== "admin" && (
        <div className="flex justify-center items-center text-red-600 text-3xl h-screen">
          <p>Access Denied</p>
        </div>
      )}
      <div className={`bg-gray-200 ${role !== "admin" ? "hidden" : "block"}`}>
        <h1 className="flex justify-center text-xl md:text-3xl font-bold mb-4 pt-3">
          <Image src={heading_icon} alt="heading_icon" width={20} height={15} />
          <span className="ms-3">Admin Profile</span>
        </h1>
        <Card className=" shadow-2xl md:px-5 md:mx-5 overflow-x-auto">
          {!userAdmin && <Loading />}
          {userAdmin && (
            <div className="text-sm md:text-xl">
              <div className="my-2">
                <p className="font-bold">Name</p>
                <p>
                  {userAdmin?.name?.firstName}
                  {userAdmin?.name?.middleName}
                  {userAdmin?.name?.lastName}
                </p>
              </div>
              <div className="my-2">
                <p className="font-bold">Email</p>
                <p>{userAdmin?.email}</p>
              </div>
              <div className="my-2">
                <p className="font-bold">Gender</p>
                <p>{userAdmin?.gender}</p>
              </div>
              <div className="my-2">
                <p className="font-bold">Designation</p>
                <p>{userAdmin?.designation}</p>
              </div>
              <div className="my-2">
                <p className="font-bold">Contact No</p>
                <p>{userAdmin?.contactNo}</p>
              </div>
              <div className="my-2">
                <p className="font-bold">Date Of Birth</p>
                <p>{userAdmin?.dateOfBirth}</p>
              </div>
              <div className="my-2">
                <p className="font-bold">Blood Group</p>
                <p>{userAdmin?.bloodGroup}</p>
              </div>
            </div>
          )}
        </Card>
        <div className=" md:mx-5">
          <Button type="primary" className="bg-blue-500 me-2 my-2">
            Edit Profile
          </Button>
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
