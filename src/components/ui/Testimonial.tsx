import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import heading_icon from "../../assets/heading_icon.png";
import header_img from "../../assets/header_img.png";

const testimonialData = [
  {
    name: "John Doe",
    position: "CEO",
    content: "Ant Design is amazing! It made designing our website a breeze.",
  },
  {
    name: "Jane Smith",
    position: "Designer",
    content:
      "I love the responsive features of Ant Design. It's a game-changer for UI development.",
  },
  {
    name: "Bob Johnson",
    position: "Developer",
    content:
      "Ant Design's components are well-documented and easy to customize.",
  },
];

const Testimonial = () => (
  <div className=" flex justify-center mt-10" id="testimonial">
    <div className=" bg-slate-900 w-full py-10 ">
      <h1 className="flex justify-center text-3xl font-bold mb-4 pt-3">
        <Image src={heading_icon} alt="heading_icon" width={20} height={15} />
        <span className="ms-3 text-white">Testimonial</span>
      </h1>
      <Carousel autoplay>
        {testimonialData.map((item, index) => (
          <div key={index} className="text-center mb-10">
            <p className=" text-white">{item.name}</p>
            <p className=" text-white">{item.position}</p>
            <div className="flex justify-center ">
              <Image
                className=" border-4 border-yellow-500"
                src={header_img}
                alt=""
                width={200}
              />
            </div>
            <p className=" text-white">{item.content}</p>
          </div>
        ))}
      </Carousel>
    </div>
  </div>
);

export default Testimonial;
