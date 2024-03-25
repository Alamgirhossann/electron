"use client";

import { useSingleServiceQuery } from "@/redux/api/serviceApi";
import { Button, Card, Col, Row, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import heading_icon from "../../../../assets/heading_icon.png";
import service_img6 from "../../../../assets/service_icon6.png";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import ServiceReview from "@/components/ui/ServiceReview";
import { useRouter } from "next/navigation";
import { getUserInfo } from "@/services/auth.service";
import styles from "../../../../components/ui/style.module.css";

const ServiceDetail = ({ params }: any) => {
  const router = useRouter();
  const { role, userId } = getUserInfo() as any;
  // const handleShare = () => {
  //   if (!role) {
  //     router.push("/login");
  //   }else{
  //     router.push(`/bookings/${params.id}`)
  //   }

  // };
  const { data, isLoading } = useSingleServiceQuery(params?.id);

  console.log(data?.title);
  return (
    <div className="py-7 px-3">
      <div className=" text-xl">
        <UMBreadCrumb
          items={[
            { label: "serviceList", link: `/serviceList` },
            { label: `detail`, link: `/detail` },
          ]}
        />
      </div>
      <div className="flex justify-center">
        <div className="w-full md:w-2/4">
          <h1 className="flex justify-center md:text-[30px] text-xl md:my-8 mt-10 mb-8 font-bold">
            <span className="text-[#f14c36]">Service</span>
            <span className={`${styles.customShape} ms-3`}>
              {"  "}
              Detail
            </span>
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 ">
        <div className="p-4 bg-white">
          <Card className=" shadow-2xl">
            <div className="my-5 md:text-xl text-md grid grid-cols-1 sm:grid-cols-2 ">
              <div className="flex justify-center mb-5">
                <Image
                  src={service_img6}
                  alt="service_image"
                  className="w-40 h-40"
                />
              </div>
              <div className="text-[15px] text-gray-500">
                <p>Title: {data?.title}</p>
                <p>Description: {data?.description}</p>
                <p>
                  Availability:{" "}
                  {data?.availability ? "Available" : "Not Available"}
                </p>
                <p>Price: ${data?.price}</p>
                <p>Rating: {data?.rating}</p>
              </div>
            </div>
          </Card>

          <div className="flex justify-center my-5">
            <Link href={`/bookings/${params.id}`}>
              <button className="bg-[#f14c36] px-5 py-2 rounded-md text-white">
                Booking
              </button>
            </Link>
            {/* <Button
              onClick={handleShare}
              className="bg-[#1677ff] mx-1"
              type="primary"
            >
              Share
            </Button> */}
          </div>
        </div>
        <div className="p-4 bg-white text-gray-500">
          <div className="">
            <ServiceReview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
