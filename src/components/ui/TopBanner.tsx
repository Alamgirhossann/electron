import React from "react";
import { Button, Carousel } from "antd";
import Image from "next/image";
import heading_icon from "../../assets/heading_icon.png";
import header_img from "../../assets/header_img.png";
import styles from "./style.module.css";
import Link from "next/link";

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
  <div className={` ${styles.topBanner} ${styles.center}`}>
    <div className="w-full md:w-2/3">
      <Carousel autoplay>
        {testimonialData.map((item, index) => (
          <div key={index} className=" mb-10 text-white">
            <h1 className="text-[2rem] md:text-[4rem]">{item.name}</h1>
            <p className="text-xl">{item.content}</p>
            <Link href="#contact">
              <Button className="bg-blue-500 mt-5" type="primary">
                {item.button}
              </Button>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  </div>
);

export default TopBanner;
