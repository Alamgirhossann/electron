import React from "react";
import { Button, Carousel, Col, Row } from "antd";
import styles from "./style.module.css";
import Link from "next/link";
import Image from "next/image";
import header_img from "../../assets/banner_img.png";

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
  <div className="flex justify-center md:items-center md:min-h-screen mx-2">
    <Row gutter={16} justify="center">
      <Col xs={24} md={12} className="">
        <div className="column p-4 md:mt-16 mt-10">
          <div className=" mb-10 ">
            <h1 className="text-[1.8rem] md:text-[2.5rem]">
              ELECTRICAL <br /> CONTRACTOR
            </h1>
            <p className="md:text-xl text-md">
              It is a long established fact that a reader will be distracted by
              the readablecontent of a page when looking at its layout. The
              point of using Lorem
            </p>
            <Link href="#contact">
              <Button className="bg-blue-500 mt-5" type="primary">
                CONTRACT
              </Button>
            </Link>
          </div>
        </div>
      </Col>
      <Col xs={0} md={12}>
        <div className="column p-4">
          <Image
            src={header_img}
            alt="header_image"
            className="w-[550px] h-[450px]"
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
