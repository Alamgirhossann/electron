import React from "react";
import { Button, Carousel, Col, Row } from "antd";
import styles from "./style.module.css";
import Link from "next/link";
import Image from "next/image";
import header_img from "../../assets/Electrician.gif";

const testimonialData = [
  {
    name: `ELECTRICAL \nCONTRACTOR`,
    button: "CONTACT",
    content: `This is the first line.
      This is the second line.
      And this is the third line.`,
  },
  {
    name: "ELECTRICAL CONTRACTOR",
    button: "CONTACT",
    content:
      "It is a long established fact that a reader will be distracted by the readablecontent of a page when looking at its layout. The point of using Lorem",
  },
  {
    name: "ELECTRICAL  CONTRACTOR",
    button: "CONTACT",
    content:
      "It is a long established fact that a reader will be distracted by the readablecontent of a page when looking at its layout. The point of using Lorem",
  },
];

const TopBanner = () => (
  <div className="flex justify-center md:items-center  px-2 bg-white">
    <Row gutter={16} justify="center">
      <Col xs={24} md={12} className="">
        <div className="column p-4 md:mt-16 mt-10">
          <div className=" mb-10 flex justify-center">
            <div className=" w-3/4">
              <h1 className="text-[1.8rem] md:text-[2.5rem] text-[#f14c36] font-bold">
                ELECTRICAL <br /> CONTRACTOR
              </h1>
              <p className="md:text-xl text-md text-gray-500">
                It is a long established fact that a reader will be distracted
                by the readablecontent of a page when looking at its layout. The
                point of using Lorem
              </p>
              <Link href="#contact">
                <button className="bg-[#f14c36] mt-5 text-white px-6 py-2 rounded-md">
                  CONTACT
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Col>
      <Col xs={0} md={12}>
        <div className="column p-4 flex justify-center">
          <Image
            src={header_img}
            alt="header_image"
            className="w-[550px] h-[450px] colored-image"
          />
        </div>
      </Col>
    </Row>
  </div>

  // <div className="h-full my-8 md:my-16">
  //   <Row gutter={16} className=" h-screen">
  //     <Col
  //       xs={24}
  //       sm={12}
  //       className="flex justify-center items-center h-screen"
  //     >
  //       <div className="column ">

  //       </div>
  //     </Col>
  //     <Col xs={24} sm={12}>
  //       <div className="column flex justify-center">

  //       </div>
  //     </Col>
  //   </Row>
  // </div>

  //   <div className="flex">
  //     <div className="w-full md:w-2/3">

  //     </div>
  //     <div>

  //     </div>
  //   </div>
);

export default TopBanner;
