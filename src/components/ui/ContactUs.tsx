"use client";

import { Button, Col, Row, message } from "antd";
import Form from "../forms/Form";
import FormInput from "../forms/FormInput";
import Image from "next/image";
import contact_icon from "../../assets/service_icon3.png";
import contact_icon1 from "../../assets/service_icon1.png";
import contact_icon2 from "../../assets/service_icon2.png";
import FormTextArea from "../forms/FormTextArea";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactFormSchema } from "@/schemas/formValidationSchema";
import emailjs from "emailjs-com";
import { useState } from "react";
import styles from "./style.module.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "hello",
  });

  // console.log(formData);

  const onSubmit = async (data: any) => {
    try {
      const response = await emailjs.send(
        "service_dm9ueje",
        "template_tnhnvfa",
        data,
        "7GU6olgrht7sINqSx"
      );

      console.log("Email sent successfully:", response);
      message.success("Email sent successfully");
      return response;
    } catch (error) {
      console.error("Error sending email:", error);
      throw error;
    }
    // emailjs
    //   .sendForm(
    //     "service_lr1ih5h",
    //     "template_mxr2j6r",
    //     formData.name,
    //     "7GU6olgrht7sINqSx"
    //   )
    //   .then(
    //     (result) => {
    //       console.log("Email sent successfully:", result.text);
    //       setFormData({
    //         name: "",
    //         phoneNumber: "",
    //         email: "",
    //         message: "",
    //       });
    //       message.success("your data submitted successfully");
    //     },
    //     (error) => {
    //       console.error("Email send failed:", error);
    //     }
    //   );
  };

  // const handleChangeInput = (e: any) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  return (
    <>
      <div className={styles.contact}>
        <div className="container mx-auto pb-20">
          <h1
            className={`flex justify-center md:text-[30px] text-xl md:mb-16 md:mt-16 mt-10 mb-8 font-bold`}
          >
            <span className={`${styles.customShape}`}>Contact</span>
            <span className="ms-3 text-red-500">Us</span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 ">
            <div className="p-4 ">
              <div className="flex justify-center  ">
                <div className="bg-white px-12 py-12 w-3/4 rounded-md">
                  <h1 className="text-[25px] mb-5 font-bold text-black">
                    Get In <span className="text-[#f14c36] ">Touch</span>
                  </h1>
                  <p className="text-gray-500 tracking-wider mb-2 text-[18px]">
                    We Will Be Happy To Assist You
                  </p>
                  <Form
                    submitHandler={onSubmit}
                    resolver={yupResolver(contactFormSchema)}
                  >
                    <Row>
                      <Col span={24} style={{ margin: "10px 0" }}>
                        <FormInput
                          name="name"
                          type="text"
                          placeholder="Full Name"
                          size="large"
                          // value={formData.name}
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col span={24} style={{ margin: "10px 0" }}>
                        <FormInput
                          name="email"
                          type="email"
                          placeholder="Email"
                          size="large"

                          // value={formData.email}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col span={24} style={{ margin: "10px 0" }}>
                        <FormTextArea
                          name="message"
                          rows={3}
                          placeholder="Leave Message"
                          // value={formData.message}
                        />
                      </Col>
                    </Row>

                    <div className="flex justify-center my-5">
                      <button
                        className="bg-[#f14c36] w-full py-4 text-white font-bold rounded-md"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex flex-row gap-2 border border-white rounded-md p-8 mb-6">
                <div className="px-5">
                  <Image className="w-20 h-14" src={contact_icon} alt="icon" />
                </div>
                <div>
                  <h1 className="text-md md:text-[18px] font-semibold tracking-wide">
                    Project Planning
                  </h1>
                  <p className="tracking-wide text-[14px]">
                    Construction is a general term meaning the art and science
                    to form objects, systems.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-2 border border-white rounded-md p-8 mb-6">
                <div className="px-5">
                  <Image className="w-20 h-14" src={contact_icon1} alt="icon" />
                </div>
                <div>
                  <h1 className="text-md md:text-md md:text-[18px] font-semibold tracking-wide">
                    Expert Team
                  </h1>
                  <p className=" tracking-wide text-[14px]">
                    Building construction is usually further divided into
                    residential and non-residential.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-2 border border-white rounded-md p-8 mb-6">
                <div className="px-5">
                  <Image className="w-20 h-14" src={contact_icon2} alt="icon" />
                </div>
                <div>
                  <h1 className="text-md md:text-[18px] font-semibold tracking-wide">
                    Awarded Company
                  </h1>
                  <p className=" tracking-wide text-[14px]">
                    Infrastructure, also called heavy civil or heavy
                    engineering, in includes large public works.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-5 px-2" id="contact"></div>
      </div>
    </>
  );
};

export default ContactUs;
