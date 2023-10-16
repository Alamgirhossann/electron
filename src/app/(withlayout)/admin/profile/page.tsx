"use client";

import { useAdminsQuery } from "@/redux/api/adminApi";
import { useGeneralUsersQuery } from "@/redux/api/generalUserApi";
import { getUserInfo } from "@/services/auth.service";
import React, { useEffect, useState } from "react";
import heading_icon from "../../../../assets/heading_icon.png";
import Image from "next/image";
import { Card } from "antd";

const AdminProfile = () => {
  const { data: adminData } = useAdminsQuery({ limit: 100 });
  const { data: generalUserData } = useGeneralUsersQuery({ limit: 100 });

  const userGeneral = generalUserData?.gereral?.find(
    (id) => id.id === localStorage.getItem("userId")
  );

  const userAdmin = adminData?.admins?.find(
    (id) => id.id === localStorage.getItem("userId")
  );
  console.log(userGeneral, userAdmin);

  return (
    <div className="bg-gray-200 ">
      <h1 className="flex justify-center text-3xl font-bold mb-4 pt-3">
        <Image src={heading_icon} alt="heading_icon" width={20} height={15} />
        <span className="ms-3">Admin Profile</span>
      </h1>
      <Card className=" shadow-2xl px-5 mx-5">
        {userAdmin && (
          <div className="text-xl">
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
    </div>
  );
};

export default AdminProfile;
