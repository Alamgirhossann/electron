"use client";

import { useAdminsQuery } from "@/redux/api/adminApi";
import { getUserInfo } from "@/services/auth.service";
import heading_icon from "../../../assets/heading_icon.png";
import Image from "next/image";
import { Button, Card, message } from "antd";
import Loading from "@/app/loading";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

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
      <div
        className={`md:px-5 md:mx-5 ${role === "user" ? "hidden" : "block"}`}
      >
        <h1 className="flex justify-center md:my-16 my-8 mx-2">
          <Image src={heading_icon} alt="heading_icon" width={20} height={15} />
          <span className="ms-3 md:text-[40px] text-xl font-bold">
            Admin Profile
          </span>
        </h1>
        <div className="flex justify-center">
          <div className=" shadow-2xl overflow-x-auto lg:w-2/4 w-full mx-2 px-2 bg-white rounded-md">
            {!userAdmin && <Loading />}
            {userAdmin && (
              <div className="md:text-xl text-md text-center">
                <div className="my-2">
                  <p className="font-bold">Name</p>
                  <p>
                    {userAdmin?.name?.firstName} {userAdmin?.name?.middleName}{" "}
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
          </div>
        </div>
        <div className="flex justify-center mx-2">
          <div className=" mt-5">
            <Link href="">
              {" "}
              <Button type="primary" className="bg-blue-500 my-2 ">
                Edit Profile
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
