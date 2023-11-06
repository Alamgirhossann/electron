"use client";

import { useAdminsQuery } from "@/redux/api/adminApi";
import { getUserInfo } from "@/services/auth.service";
import heading_icon from "../../../assets/heading_icon.png";
import Image from "next/image";
import { Button, Card, Col, Row, message } from "antd";
import Loading from "@/app/loading";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSuperAdminsQuery } from "@/redux/api/superAdmin";
import Link from "next/link";

const SuperAdmin = () => {
  const router = useRouter();
  const { role } = getUserInfo() as any;
  console.log(role);
  const { data } = useSuperAdminsQuery({ limit: 100 });
  const superAdmin = data?.superAdmin;
  console.log(superAdmin);

  if (role !== "super_admin") {
    router.back();
  }

  return (
    <div
      className={`md:px-5 md:mx-5${
        role !== "super_admin" ? "hidden" : "block"
      }`}
    >
      <h1 className="flex justify-center md:my-16 my-8 mx-2">
        <Image src={heading_icon} alt="heading_icon" width={20} height={15} />
        <span className="ms-3 md:text-[40px] text-xl font-bold ">
          Super Admin Profile
        </span>
      </h1>
      <div className="flex justify-center">
        {superAdmin?.map((data: any, index: number) => (
          <div className=" w-full lg:w-2/4 my-5" key={index}>
            <div className="shadow-2xl overflow-auto mx-1 bg-white px-1 md:px-5 rounded-md py-4">
              <div className="md:text-xl text-md text-center">
                <div className="my-2">
                  <p className="font-bold">Name</p>
                  <p>
                    {data?.name?.firstName} {data?.name?.middleName}{" "}
                    {data?.name?.lastName}
                  </p>
                </div>
                <div className="my-2">
                  <p className="font-bold">Email</p>
                  <p>{data?.email}</p>
                </div>
                <div className="my-2">
                  <p className="font-bold">Gender</p>
                  <p>{data?.gender}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <Link href={`/super_admin/edit/${data?._id}`}>
                <Button type="primary" className="bg-[#1677ff] me-2">
                  Edit Profile
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuperAdmin;
