import React from "react";
import { Card, Col, Row } from "antd";
import Image from "next/image";
// import "antd/dist/antd.css"; // Import Ant Design styles
import heading_icon from "../../assets/heading_icon.png";
import project1 from "../../assets/project_img1.jpg";
import project2 from "../../assets/project_img2.jpg";
import project3 from "../../assets/project_img3.jpg";

const cardData = [
  { title: "MODERN FIXTURE", image: project1 },
  { title: "VINTAGE CHANDLIER", image: project2 },
  { title: "BULPILO", image: project3 },
];

const Projects = () => {
  return (
    <div className=" py-7 lg:mx-[7rem] md:mx-[3rem] px-2" id="project">
      <h1 className="flex justify-center md:my-16 my-8">
        <Image src={heading_icon} alt="heading_icon" width={20} height={15} />
        <span className="ms-3 md:text-[40px] text-xl font-bold">
          Our Projects
        </span>
      </h1>
      <Row gutter={16}>
        {cardData.map((data, index) => (
          <Col xs={24} sm={8} md={8} key={index} className="mb-3">
            <div className="h-full mx-10 sm:mx-0">
              <Card className=" shadow-2xl h-full ">
                <div className="flex justify-center">
                  {" "}
                  <Image
                    src={data.image}
                    alt="heading_icon"
                    className="h-[150px] w-[300px] md:h-full md:w-[500px]"
                  />
                </div>
                <p className="lg:text-2xl text-[15px] text-center mt-4">
                  {data.title}
                </p>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
