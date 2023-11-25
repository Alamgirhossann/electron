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
emailjs.init("YOUR_USER_ID");
import { useState } from "react";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const onSubmit = () => {
    emailjs
      .sendForm(
        "service_lr1ih5h",
        "template_mxr2j6r",

        "7GU6olgrht7sINqSx"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setFormData({
            name: "",
            phoneNumber: "",
            email: "",
            message: "",
          });
          message.success("your data submitted successfully");
        },
        (error) => {
          console.error("Email send failed:", error);
        }
      );
  };

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
              <FormInput name="name" label="Name" value={formData.name} />
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ margin: "10px 0" }}>
              <FormInput
                name="phoneNumber"
                label="Phone Number"
                value={formData.phoneNumber}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ margin: "10px 0" }}>
              <FormInput name="email" label="Email" value={formData.email} />
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ margin: "10px 0" }}>
              <FormTextArea
                name="message"
                label="Message"
                rows={4}
                value={formData.message}
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
