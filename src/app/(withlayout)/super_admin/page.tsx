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
import styles from "../../../components/ui/style.module.css";

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
      <h1 className="flex justify-center md:text-[30px] text-xl md:pb-12 md:pt-12 pt-10 pb-8 font-bold">
        <span className="me-3 text-[#f14c36]"> Super</span>
        <span className={`${styles.customShape}`}>Admin</span>
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
                <button
                  type="submit"
                  className="bg-[#f14c36] px-5 py-2 rounded-md text-white"
                >
                  Edit Profile
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuperAdmin;
