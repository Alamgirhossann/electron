import React from "react";
import { Card, Col, Row } from "antd";
import Image from "next/image";
// import "antd/dist/antd.css"; // Import Ant Design styles
import heading_icon from "../../assets/heading_icon.png";
import project_img1 from "../../assets/project_img1.jpg";
import project_img2 from "../../assets/project_img2.jpg";
import project_img3 from "../../assets/project_img3.jpg";

const cardData = [
  { title: "MODERN FIXTURE", image: project_img1 },
  { title: "VINTAGE CHANDLIER", image: project_img2 },
  { title: "BULPILO", image: project_img3 },
];

const OurProject = () => {
  return (
    <div className="bg-gray-200 py-7 px-2" id="project">
      <h1 className="flex justify-center md:text-3xl text-xl font-bold mb-4 pt-3">
        <Image src={heading_icon} alt="heading_icon" width={20} height={15} />
        <span className="ms-3">Our Projects</span>
      </h1>
      <Row gutter={16}>
        {cardData.map((data, index) => (
          <Col xs={24} sm={12} md={8} key={index} className="mb-3">
            <Card className=" shadow-2xl h-full ">
              <Image src={data.image} alt="project_image" width={500} />
              <p className="md:text-3xl text-xl text-center">{data.title}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default OurProject;
