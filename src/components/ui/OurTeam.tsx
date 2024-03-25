import React, { useState } from "react";
import { Card, Col, Row } from "antd";
import Image from "next/image";
// import "antd/dist/antd.css"; // Import Ant Design styles
import heading_icon from "../../assets/heading_icon.png";
import team1 from "../../assets/ele.jpg";
import team2 from "../../assets/ele1.jpg";
import team3 from "../../assets/ele2.jpg";
import team4 from "../../assets/ele3.jpg";
import styles from "../ui/style.module.css";
import Link from "next/link";

const cardData = [
  { title: "MODERN FIXTURE", image: team1 },
  { title: "VINTAGE CHANDLIER", image: team2 },
  { title: "BULPILO", image: team3 },
  { title: "MODERN FIXTURE", image: team4 },
];

const OurTeam = () => {
  return (
    <div
      className=" py-10 lg:px-[7rem] md:px-[3rem] px-2 bg-white"
      id="project"
    >
      <h1 className="flex justify-center md:text-[30px] text-xl md:mb-12 md:mt-12 mt-10 mb-8 font-bold">
        <span className="text-[#f14c36]">Our</span>
        <span className={`${styles.customShape} ms-3`}>
          {"  "}
          Team
        </span>
      </h1>
      <div className="flex justify-center">
        <p className="text-gray-500 px-2 w-[250px] sm:w-[400px] md:w-[800px] text-center mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          pulvinar lacus at feugiat iaculis. Suspendisse at viverra mauris, sit
          amet facilisis lectus. Pellentesque mattis auctor quam, et feugiat
          elit volutpat vel.
        </p>
      </div>

      <Row gutter={16}>
        {cardData.map((data, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index} className="pb-10">
            <div className="h-full mx-10 sm:mx-0">
              <div className={styles.teamCard}>
                <Image
                  className="w-full h-full"
                  src={data.image}
                  alt={data.title}
                />
                <div className={styles.teamContent}>
                  <button className={styles.teamButton}>See More</button>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default OurTeam;
