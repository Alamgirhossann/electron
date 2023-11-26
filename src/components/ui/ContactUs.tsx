"use client";

import { Button, Col, Row, message } from "antd";
import Form from "../forms/Form";
import FormInput from "../forms/FormInput";
import Image from "next/image";
import heading_icon from "../../assets/heading_icon.png";
import FormTextArea from "../forms/FormTextArea";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactFormSchema } from "@/schemas/formValidationSchema";
import emailjs from "emailjs-com";
import { useState } from "react";
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
    <div className="flex justify-center mt-5 px-2" id="contact">
      <div className="md:w-2/4 w-full">
        <h1 className="flex justify-center md:my-16 my-8">
          <Image src={heading_icon} alt="heading_icon" width={20} height={15} />
          <span className="ms-3  md:text-[40px] text-xl font-bold">
            Contact Us
          </span>
        </h1>
        <Form
          submitHandler={onSubmit}
          resolver={yupResolver(contactFormSchema)}
        >
          <Row>
            <Col span={24} style={{ margin: "10px 0" }}>
              <FormInput
                name="name"
                type="text"
                label="Name"
                // value={formData.name}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ margin: "10px 0" }}>
              <FormInput
                name="phoneNumber"
                label="Phone Number"
                type="text"
                // value={formData.phoneNumber}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ margin: "10px 0" }}>
              <FormInput
                name="email"
                label="Email"
                type="email"
                // value={formData.email}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ margin: "10px 0" }}>
              <FormTextArea
                name="message"
                label="Message"
                rows={4}
                // value={formData.message}
              />
            </Col>
          </Row>

          <div className="flex justify-center my-5">
            <Button className="bg-[#1677ff]" type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ContactUs;
