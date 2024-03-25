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
import styles from "../ui/style.module.css";

const cardData = [
  {
    title: "Equipment",
    image: service_img1,
    content: "There are many variations of passages of Lorem Ipsum available,",
  },
  {
    title: "Installation",
    image: service_img2,
    content: "There are many variations of passages of Lorem Ipsum available,",
  },
  {
    title: "Repair",
    image: service_img3,
    content: "There are many variations of passages of Lorem Ipsum available,",
  },
  {
    title: "Maintanence",
    image: service_img4,
    content: "There are many variations of passages of Lorem Ipsum available,",
  },
  {
    title: "Support",
    image: service_img5,
    content: "There are many variations of passages of Lorem Ipsum available,",
  },
  {
    title: "Electrical",
    image: service_img6,
    content: "There are many variations of passages of Lorem Ipsum available,",
  },
];

const Services = () => {
  return (
    <div
      className=" md:py-4 py-3 lg:px-[7rem] md:px-[3rem] px-2 bg-white"
      id="service"
    >
      <h1 className="flex justify-center md:text-[30px] text-xl md:mb-16 md:mt-20 mt-10 mb-8 font-bold">
        <span className="text-[#f14c36]">Our </span>
        <span className={`${styles.customShape} ms-3`}>
          {"  "}
          Services
        </span>
      </h1>

      <Row gutter={16}>
        {cardData.map((data, index) => (
          <Col xs={24} sm={12} md={8} key={index} className="mb-3">
            <Link href="/serviceList">
              <div className="h-full mx-10 sm:mx-0">
                {" "}
                <Card
                  className={`transform transition-transform duration-300 hover:scale-105 text-center shadow-2xl h-full`}
                  style={{ marginBottom: "15px" }}
                >
                  <div className="flex justify-center  ">
                    <div className="bg-[#f14c36] rounded-full h-20 w-20 flex justify-center items-center">
                      <Image
                        src={data.image}
                        alt="project_image"
                        width={60}
                        className="flex justify-center bg-white rounded-full p-3"
                      />
                    </div>
                  </div>
                  <p className="md:text-[18px] text-xl text-center my-3 font-semibold tracking-wide text-gray-500">
                    {data.title}
                  </p>
                  <p className="tracking-wide text-gray-500">{data.content}</p>
                </Card>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-10">
        <Link href="/serviceList">
          <button className="bg-[#f14c36] text-white py-3 rounded-lg transition duration-300 ease-in-out hover:bg-red-500 active:bg-green-500">
            <span className={`${styles.animateBlink} px-5 py-3`}>See More</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
