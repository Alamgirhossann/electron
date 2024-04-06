import React from "react";
import { Card, Col, Row } from "antd";
import Image from "next/image";
// import "antd/dist/antd.css"; // Import Ant Design styles
import heading_icon from "../../assets/heading_icon.png";
import project1 from "../../assets/proj.jpg";
import project2 from "../../assets/proj2.jpg";
import project3 from "../../assets/proj3.jpg";
import styles from "../ui/style.module.css";
import Link from "next/link";

const cardData = [
  {
    title: "Porsche 911 Carrera",
    image: project1,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ad dolores ipsam earum nostrum porro consectetur, nulla, saepe, id magni esse corrupti corporis qui nam?",
  },
  {
    title: "Vintage Chanlier",
    image: project2,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ad dolores ipsam earum nostrum porro consectetur, nulla, ",
  },
  {
    title: "Bulpino",
    image: project3,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ad dolores ipsam earum nostrum porro consectetur, nulla, saepe, id magni esse corrupti corporis qui nam?",
  },
];

const Blog = () => {
  return (
    <div className=" py-7 lg:px-[7rem] md:px-[3rem] px-2 bg-white" id="project">
      <h1 className="flex justify-center md:text-[30px] text-xl md:mb-16 md:mt-20 mt-10 mb-8 font-bold">
        <span className={`${styles.customShape} ms-3`}>
          {"  "}
          Blog
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
          <Col xs={24} sm={12} md={12} lg={8} key={index} className="mb-3">
            <div className="h-full mx-10 sm:mx-0">
              {" "}
              <Card
                className={`transform transition-transform duration-300 hover:scale-x-110 shadow-2xl h-full `}
                cover={
                  <Image
                    alt="example"
                    src={data.image}
                    style={{ width: "100%", height: "225px" }}
                  />
                }
              >
                <div className="flex flex-row gap-4 mg:gap-1 lg:gap-4">
                  <div className="flex flex-row gap-2 items-center">
                    <div className="text-[#f14c36]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-500">Nov 20</p>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <div className="text-[#f14c36]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-500">3 Comments</p>
                  </div>
                </div>
                <p className="md:text-[20px] text-xl my-3 font-semibold tracking-wide text-gray-500">
                  {data.title}
                </p>
                <p className="tracking-wide text-gray-500">{data.content}</p>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Blog;
