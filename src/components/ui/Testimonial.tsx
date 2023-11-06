import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import heading_icon from "../../assets/heading_icon.png";
import header_img from "../../assets/header_img.png";
import Avatar1 from "../../assets/avater1.png";
import Avatar2 from "../../assets/avater2.jpg";

const testimonialData = [
  {
    name: "John Doe",
    position: "CEO",
    content: "Ant Design is amazing! It made designing our website a breeze.",
    image: Avatar1,
  },
  {
    name: "Jane Smith",
    position: "Designer",
    content:
      "I love the responsive features of Ant Design. It's a game-changer for UI development.",
    image: Avatar2,
  },
  {
    name: "Bob Johnson",
    position: "Developer",
    content:
      "Ant Design's components are well-documented and easy to customize.",
    image: Avatar1,
  },
];

const Testimonial = () => (
  <div className=" flex justify-center mt-10" id="testimonial">
    <div className=" bg-slate-900 w-full py-10 ">
      <h1 className="flex justify-center md:my-16 my-8">
        <Image
          className="rounded-full"
          src={heading_icon}
          alt="heading_icon"
          width={20}
          height={15}
        />
        <span className="ms-3 text-white md:text-[40px] text-xl font-bold ">
          Testimonial
        </span>
      </h1>
      <Carousel autoplay>
        {testimonialData.map((item, index) => (
          <div key={index} className="text-center mb-10">
            <p className=" text-white md:text-2xl text-lg">{item.name}</p>
            <p className=" text-white md:text-xl text-md">{item.position}</p>
            <div className="flex justify-center my-5">
              <Image
                className=" border-4 border-yellow-500 rounded-full md:w-[100px] md:h-[100px] w-[50px] h-[50px]"
                src={item.image}
                alt=""
              />
            </div>
            <p className=" text-white md:text-2xl text-md mx-2">
              {item.content}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  </div>
);

export default Testimonial;
