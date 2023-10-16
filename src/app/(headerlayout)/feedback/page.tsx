"use client";
import Form from "@/components/forms/Form";
import FormDatePicker from "@/components/forms/FormDatePicker";
import FormInput from "@/components/forms/FormInput";
import FormTextArea from "@/components/forms/FormTextArea";
import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import heading_icon from "../../../assets/heading_icon.png";

const FeedbackPage = () => {
  const onSubmit = async (data: any) => {
    console.log(data);
    message.success("Thank you for your valuabe feedback");
  };
  return (
    <div className="px-5 py-5">
      <h1 className="flex justify-center text-3xl font-bold mb-4 pt-3">
        <Image src={heading_icon} alt="heading_icon" width={20} height={15} />
        <span className="ms-3">Your Feedback</span>
      </h1>

      <div>
        <Form submitHandler={onSubmit}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                xs={24}
                md={8}
                className="gutter-row"
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput type="text" name="name" size="large" label="Name" />
              </Col>
              <Col
                xs={24}
                md={8}
                className="gutter-row"
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="email"
                  name="email"
                  size="large"
                  label="Email address"
                />
              </Col>
              <Col
                xs={24}
                md={8}
                className="gutter-row"
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="rating"
                  size="large"
                  label="Rating out of (5)"
                />
              </Col>

              <Col xs={24} style={{ margin: "10px 0" }}>
                <FormTextArea name="address" label=" Address" rows={4} />
              </Col>
            </Row>
          </div>

          {/* basic info */}

          <div>
            <Button className="me-3 mb-3" htmlType="submit" type="primary">
              Submit
            </Button>
            <Button htmlType="submit" type="primary">
              Clear Form
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default FeedbackPage;
