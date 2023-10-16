"use client";

import { Button, Col, Row } from "antd";
import Form from "../forms/Form";
import FormInput from "../forms/FormInput";
import Image from "next/image";
import heading_icon from "../../assets/heading_icon.png";
import FormTextArea from "../forms/FormTextArea";

const ContactUs = () => {
  const onSubmit = async (data: any) => {
    console.log(data);
    // message.loading("Creating.....");
    // try {
    //   // console.log(data);
    //   const res = await addAcademicDepartment(data);
    //   if (!!res) {
    //     message.success("AC Department added successfully");
    //   }
    // } catch (err: any) {
    //   console.error(err.message);
    //   message.error(err.message);
    // }
  };
  return (
    <div className="flex justify-center mt-5 px-2" id="contact">
      <div className="w-2/4">
        <h1 className="flex justify-center text-3xl font-bold mb-4 pt-3">
          <Image src={heading_icon} alt="heading_icon" width={20} height={15} />
          <span className="ms-3">Contact Us</span>
        </h1>
        <Form submitHandler={onSubmit}>
          <Row>
            <Col className="w-2/3" span={24} style={{ margin: "10px 0" }}>
              <FormInput name="name" label="Name" />
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ margin: "10px 0" }}>
              <FormInput name="phoneNumber" label="Phone Number" />
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ margin: "10px 0" }}>
              <FormInput name="email" label="Email" />
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ margin: "10px 0" }}>
              <FormTextArea name="message" label="Message" rows={4} />
            </Col>
          </Row>

          <div className="flex justify-center my-5">
            <Button className="bg-blue-500" type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ContactUs;
