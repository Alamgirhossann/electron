"use client";

import React from "react";
import { Button, Card, Col, Row } from "antd";
import Image from "next/image";
// import "antd/dist/antd.css"; // Import Ant Design styles
import heading_icon from "../../assets/heading_icon.png";
import service_img1 from "../../assets/service_icon1.png";
import service_img2 from "../../assets//service_icon2.png";
import service_img3 from "../../assets/service_icon3.png";
import service_img4 from "../../assets/service_icon4.png";
import service_img5 from "../../assets/service_icon5.png";
import service_img6 from "../../assets/service_icon6.png";
import Link from "next/link";

const cardData = [
  {
    title: "Equipment installation",
    image: service_img1,
    content: "There are many variations of passages of Lorem Ipsum available,",
  },
  {
    title: "Windmill Energy",
    image: service_img2,
    content: "There are many variations of passages of Lorem Ipsum available,",
  },
  {
    title: "Equipment Maintenance",
    image: service_img3,
    content: "There are many variations of passages of Lorem Ipsum available,",
  },
  {
    title: "Offshore Engineering",
    image: service_img4,
    content: "There are many variations of passages of Lorem Ipsum available,",
  },
  {
    title: "Electrical Wiring",
    image: service_img5,
    content: "There are many variations of passages of Lorem Ipsum available,",
  },
  {
    title: "Electrical Wiring",
    image: service_img6,
    content: "There are many variations of passages of Lorem Ipsum available,",
  },
];

const Services = () => {
  return (
    <div className=" md:py-7 py-3 lg:mx-[7rem] md:mx-[3rem] px-2" id="service">
      <h1 className="flex justify-center  md:my-16 my-8">
        <Image src={heading_icon} alt="heading_icon" width={20} height={15} />
        <span className="ms-3 md:text-[40px] text-xl font-bold">
          Our Services
        </span>
      </h1>
      <Row gutter={16}>
        {cardData.map((data, index) => (
          <Col xs={24} sm={12} md={8} key={index} className="mb-3">
            <Link href="/serviceList">
              <div className="h-full mx-10 sm:mx-0">
                {" "}
                <Card
                  className="text-center shadow-2xl h-full"
                  style={{ marginBottom: "15px" }}
                >
                  <div className="flex justify-center ">
                    <Image src={data.image} alt="project_image" width={70} />
                  </div>
                  <p className="md:text-2xl text-xl text-center my-3">
                    {data.title}
                  </p>
                  <p>{data.content}</p>
                </Card>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-10">
        <Link href="/serviceList">
          <Button className="bg-[#1677ff]" type="primary">
            See More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
