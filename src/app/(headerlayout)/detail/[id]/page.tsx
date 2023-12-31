"use client";

import { useSingleServiceQuery } from "@/redux/api/serviceApi";
import { Button, Card, Col, Row, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import heading_icon from "../../../../assets/heading_icon.png";
import service_img6 from "../../../../assets/service_icon6.png";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import ServiceReview from "@/components/ui/ServiceReview";

const ServiceDetail = ({ params }: any) => {
  const handleShare = () => {
    message.success("Successfully shared");
  };
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
      <div className=" flex justify-center">
        <div className="w-full md:w-2/4">
          <h1 className="flex justify-center  my-16">
            <Image
              src={heading_icon}
              alt="heading_icon"
              width={20}
              height={15}
            />
            <span className="ms-3 md:text-[40px] text-xl font-bold">
              Service Detail
            </span>
          </h1>
          <Card className=" shadow-2xl">
            <div className="my-5 text-center md:text-xl text-md">
              <div className="flex justify-center mb-5">
                <Image src={service_img6} alt="service_image" width={100} />
              </div>
              <p>Title: {data?.title}</p>
              <p>Description: {data?.description}</p>
              <p>
                Availability:{" "}
                {data?.availability ? "Available" : "Not Available"}
              </p>
              <p>Price: ${data?.price}</p>
              <p>Rating: {data?.rating}</p>
            </div>
          </Card>

          <div className="flex justify-center my-5">
            <Link href={`/bookings/${params.id}`}>
              <Button className="bg-[#1677ff] mx-1" type="primary">
                Booking
              </Button>
            </Link>
            <Button
              onClick={handleShare}
              className="bg-[#1677ff] mx-1"
              type="primary"
            >
              Share
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <ServiceReview />
      </div>
    </div>
  );
};

export default ServiceDetail;
