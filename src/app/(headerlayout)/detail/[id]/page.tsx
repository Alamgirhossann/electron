"use client";

import { useSingleServiceQuery } from "@/redux/api/serviceApi";
import { Button, Card, Col, Row, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import heading_icon from "../../../../assets/heading_icon.png";
import service_img6 from "../../../../assets/service_icon6.png";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";

const ServiceDetail = ({ params }: any) => {
  const handleShare = () => {
    message.success("Successfully shared");
  };
  const { data, isLoading } = useSingleServiceQuery(params?.id);

  console.log(data?.title);
  return (
    <div className="bg-gray-300 py-7 h-screen px-3">
      <div className="text-white text-xl">
        <UMBreadCrumb
          items={[
            { label: "serviceList", link: `/serviceList` },
            { label: `detail`, link: `/detail` },
          ]}
        />
      </div>
      <div className=" flex justify-center">
        <div>
          <h1 className="flex justify-center text-3xl font-bold mb-4 pt-3">
            <Image
              src={heading_icon}
              alt="heading_icon"
              width={20}
              height={15}
            />
            <span className="ms-3">Service Detail</span>
          </h1>
          <Card className="" style={{ marginBottom: "15px" }}>
            <div className="flex justify-center mb-5">
              <Image src={service_img6} alt="service_image" width={100} />
            </div>
            <p className="text-2xl">Title: {data?.title}</p>
            <p className="text-xl">Description: {data?.description}</p>
            <p className="text-xl">
              Availability: {data?.availability ? "Available" : "Not Available"}
            </p>
            <p className="text-xl">Price: ${data?.price}</p>
            <p className="text-xl">Rating: {data?.rating}</p>
          </Card>

          <div className="flex justify-around">
            <Link href="/booking">
              <Button className="bg-blue-500" type="primary">
                Booking
              </Button>
            </Link>
            <Button
              onClick={handleShare}
              className="bg-blue-500"
              type="primary"
            >
              Share
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
