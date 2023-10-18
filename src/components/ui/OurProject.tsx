import React from "react";
import { Card, Col, Row } from "antd";
import Image from "next/image";
// import "antd/dist/antd.css"; // Import Ant Design styles
// import heading_icon from "../../assets/heading_icon.png";

const cardData = [
  { title: "MODERN FIXTURE" },
  { title: "VINTAGE CHANDLIER" },
  { title: "BULPILO" },
];

const Projects = () => {
  return (
    <div className="bg-gray-200 py-7 px-2" id="project">
      <h1 className="flex justify-center md:text-3xl text-xl font-bold mb-4 pt-3">
        <span className="ms-3">Our Projects</span>
      </h1>
      <Row gutter={16}>
        {cardData.map((data, index) => (
          <Col xs={24} sm={12} md={8} key={index} className="mb-3">
            <Card className=" shadow-2xl h-full ">
              <p className="md:text-3xl text-xl text-center">{data.title}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
