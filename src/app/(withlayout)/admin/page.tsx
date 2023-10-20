"use client";

import { useAdminsQuery } from "@/redux/api/adminApi";
import { getUserInfo } from "@/services/auth.service";
import heading_icon from "../../../assets/heading_icon.png";
import Image from "next/image";
import { Button, Card, message } from "antd";
import Loading from "@/app/loading";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AdminProfile = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<string | null>();
  const { role } = getUserInfo() as any;
  console.log(role);
  const { data: adminData } = useAdminsQuery({ limit: 100 });

  useEffect(() => {
    setUserData(localStorage.getItem("userId"));
  }, [userData]);

  const userAdmin = adminData?.admins?.find((id) => id.id === userData);

  if (role === "user") {
    router.back();
  }

  return (
    <>
      {role === "user" && (
        <div className="flex justify-center items-center text-red-600 text-3xl h-screen">
          <p>Access Denied</p>
        </div>
      )}
      <div className={`bg-gray-200 ${role === "user" ? "hidden" : "block"}`}>
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
