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
    <>
      {role !== "super_admin" && (
        <div className="flex justify-center items-center text-red-600 text-3xl h-screen">
          <p>Access Denied</p>
        </div>
      )}
      <div
        className={`md:px-5 md:mx-5 ${
          role !== "super_admin" ? "hidden" : "block"
        }`}
      >
        <h1 className="flex justify-center text-3xl font-bold mb-4 pt-3">
          <Image src={heading_icon} alt="heading_icon" width={20} height={15} />
          <span className="ms-3">Super Admin Profile</span>
        </h1>
        <Row gutter={24}>
          {superAdmin?.map((data: any, index: number) => (
            <Col xs={24} key={index} className="mb-3">
              <Card className=" shadow-2xl h-full ">
                <div className="text-xl">
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
              </Card>
              <div className=" mt-5">
                <Link href={`/super_admin/edit/${data?._id}`}>
                  {" "}
                  <Button type="primary" className="bg-blue-500 me-2 my-2">
                    Edit Profile
                  </Button>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default SuperAdmin;
