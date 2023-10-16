"use client";

import { useAdminsQuery } from "@/redux/api/adminApi";
import { useGeneralUsersQuery } from "@/redux/api/generalUserApi";
import React from "react";
import heading_icon from "../../../../assets/heading_icon.png";
import Image from "next/image";
import { Button, Card } from "antd";
import Loading from "@/app/loading";
import Link from "next/link";

const UserProfile = () => {
  // const { data: adminData } = useAdminsQuery({ limit: 100 });
  const { data: generalUserData } = useGeneralUsersQuery({ limit: 100 });

  const userGeneral = generalUserData?.gereral?.find(
    (id) => id.id === localStorage.getItem("userId")
  );

  // const userAdmin = adminData?.admins?.find(
  //   (id) => id.id === localStorage.getItem("userId")
  // );
  console.log(userGeneral);

  return (
    <div className="px-5 mx-5">
      <h1 className="flex justify-center text-3xl font-bold mb-4 pt-3">
        <Image src={heading_icon} alt="heading_icon" width={20} height={15} />
        <span className="ms-3">User Profile</span>
      </h1>
      <Card className=" shadow-2xl ">
        {!userGeneral && <Loading />}
        {userGeneral && (
          <div className="text-xl">
            <div className="my-2">
              <p className="font-bold">Name</p>
              <p>
                {userGeneral?.name?.firstName}
                {""}
                {userGeneral?.name?.middleName} {userGeneral?.name?.lastName}
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
            {/* <div className="my-2">
              <p className="font-bold">Designation</p>
              <p>{userAdmin?.designation}</p>
            </div>
            
            <div className="my-2">
              <p className="font-bold">Date Of Birth</p>
              <p>{userGeneral?.dateOfBirth}</p>
            </div> */}
          </div>
        )}
      </Card>
      <div className=" mt-5">
        <Button type="primary" className="bg-blue-500 me-2 my-2">
          Edit Profile
        </Button>
        <Link href="/user/payment">
          <Button type="primary" className="bg-blue-500">
            Payment for booking
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default UserProfile;
