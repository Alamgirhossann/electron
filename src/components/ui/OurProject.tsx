import React from "react";
import { Card, Col, Row } from "antd";
import Image from "next/image";
// import "antd/dist/antd.css"; // Import Ant Design styles
import heading_icon from "../../assets/heading_icon.png";
import project1 from "../../assets/proj.jpg";
import project2 from "../../assets/proj1.jpg";
import project3 from "../../assets/proj2.jpg";
import project4 from "../../assets/proj3.jpg";
import project5 from "../../assets/proj4.jpg";
import project6 from "../../assets/proj5.jpg";
import project7 from "../../assets/proj6.jpg";
import project8 from "../../assets/proj7.jpg";
import styles from "../ui/style.module.css";
import Link from "next/link";

const cardData = [
  {
    title: "MODERN FIXTURE",
    image: project1,
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi dolorem alias id omnis adipisci laboriosam qui nobis autem iure officiis.",
  },
  {
    title: "VINTAGE CHANDLIER",
    image: project2,
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi dolorem alias id omnis adipisci laboriosam qui nobis autem iure officiis.",
  },
  {
    title: "BULPILO",
    image: project3,
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi dolorem alias id omnis adipisci laboriosam qui nobis autem iure officiis.",
  },
  {
    title: "MODERN FIXTURE",
    image: project4,
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi dolorem alias id omnis adipisci laboriosam qui nobis autem iure officiis.",
  },
  {
    title: "VINTAGE CHANDLIER",
    image: project5,
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi dolorem alias id omnis adipisci laboriosam qui nobis autem iure officiis.",
  },
  {
    title: "BULPILO",
    image: project6,
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi dolorem alias id omnis adipisci laboriosam qui nobis autem iure officiis.",
  },
  {
    title: "VINTAGE CHANDLIER",
    image: project7,
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi dolorem alias id omnis adipisci laboriosam qui nobis autem iure officiis.",
  },
  {
    title: "BULPILO",
    image: project8,
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi dolorem alias id omnis adipisci laboriosam qui nobis autem iure officiis.",
  },
];

const Projects = () => {
  return (
    <div className=" py-7 lg:px-[7rem] md:px-[3rem] px-2 bg-white" id="project">
      <h1 className="flex justify-center md:text-[30px] text-xl md:mb-16 md:mt-20 mt-10 mb-8 font-bold">
        <span className="text-[#f14c36]">Our</span>
        <span className={`${styles.customShape} ms-3`}>
          {"  "}
          Projects
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
          <Col xs={24} sm={12} md={8} lg={6} key={index} className="mb-3">
            <div className="h-full mx-10 sm:mx-0">
              {" "}
              <div
                className={`${styles.cardTwo} w-full h-60 bg-white border border-gray-300 rounded-lg shadow-md`}
              >
                <div
                  className={`${styles.front} flex items-center justify-center`}
                >
                  <Image
                    src={data.image}
                    className="w-full h-full rounded-lg"
                    alt="project"
                  />
                </div>
                <div
                  className={`${styles.back} flex justify-center items-center bg-black opacity-70 text-white rounded-lg px-3`}
                >
                  <div className="text-center">
                    <h1 className="text-lg py-2 font-bold">{data.title}</h1>
                    <p>{data.content}</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
