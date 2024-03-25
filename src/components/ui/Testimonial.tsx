import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import heading_icon from "../../assets/heading_icon.png";
import header_img from "../../assets/header_img.png";
import Avatar1 from "../../assets/avater1.png";
import Avatar2 from "../../assets/avater2.jpg";
import styles from "../ui/style.module.css";

const testimonialData = [
  {
    name: "John Doe",
    position: "CEO",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A eos distinctio possimus quibusdam fugit quaerat sunt reiciendis rem laudantium corporis labore, ad, iusto maxime nulla.",
    image: Avatar1,
  },
  {
    name: "Jane Smith",
    position: "Designer",
    content:
      "Lorem ipsum dolor sit amet consectetur quos illo molestiae nobis alias ullam nulla. adipisicing elit. Quae quia excepturi eaque ducimus quos illo molestiae nobis alias ullam nulla.",
    image: Avatar2,
  },
  {
    name: "Bob Johnson",
    position: "Developer",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, fugit repudiandae dolorum ex accusantium distinctio consectetur amet porro ipsa quidem. Cumque officiis doloremque ullam, itaque magnam molestiae eligendi.",
    image: Avatar1,
  },
];

const Testimonial = () => (
  <div className=" flex justify-center" id="testimonial">
    <div className=" bg-gray-50 w-full py-10 ">
      <h1 className="flex justify-center md:text-[30px] text-xl md:mb-16 md:mt-12 mt-10 mb-8 font-bold">
        <span className={`${styles.customShape} ms-3`}>
          {"  "}
          Testimonials
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
      <div className="flex justify-center w-full">
        <Carousel
          autoplay
          className="w-[250px] sm:w-[400px] md:w-[700px] shadow-2xl bg-gradient-to-r from-[#FFDDDC] to-[#EA4C46] rounded-md"
        >
          {testimonialData.map((item, index) => (
            <div key={index} className="text-center mb-10 text-white">
              <div className="flex justify-center my-5">
                <Image
                  className=" border-4 border-[#f14c36] rounded-full md:w-[80px] md:h-[80px] w-[40px] h-[40px]"
                  src={item.image}
                  alt=""
                />
              </div>
              <p className=" md:text-lg text-md font-bold">{item.name}</p>
              <p className="  md:text-md text-md">{item.position}</p>

              <p className="md:text-md text-md mx-2 px-2 md:px-20">
                {item.content}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  </div>
);

export default Testimonial;
