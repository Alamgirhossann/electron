"use client";
import Form from "@/components/forms/Form";
import FormDatePicker from "@/components/forms/FormDatePicker";
import FormInput from "@/components/forms/FormInput";
import FormTextArea from "@/components/forms/FormTextArea";
import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../../components/ui/style.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { feedbackFormSchema } from "@/schemas/formValidationSchema";
import feedback from "../../../assets/Customer feedback.gif";

const FeedbackPage = () => {
  const onSubmit = async (data: any) => {
    message.success("Thank you for your valuabe feedback");
  };

  return (
    <div className="px-5 py-5">
      <h1 className="flex justify-center md:text-[30px] text-xl md:mb-12 md:mt-10 mt-10 mb-8 font-bold">
        <span className="text-[#f14c36]"> Your</span>
        <span className={`${styles.customShape} ms-3`}>Feedback{"  "}</span>
      </h1>

      <div>
        <div className="py-5 rounded-md  bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 ">
            <div className="p-4 ">
              <div className="flex justify-center">
                <Image
                  src={feedback}
                  alt=""
                  className="md:h-[400px] md:w-[400px] h-[250]"
                />
              </div>
            </div>
            <div className="p-4 lg:p-10 text-gray-500">
              <div>
                <Form
                  submitHandler={onSubmit}
                  resolver={yupResolver(feedbackFormSchema)}
                >
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
                        <FormInput
                          type="text"
                          name="name"
                          size="large"
                          label="Name"
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
                        <FormTextArea
                          name="message"
                          label=" Message"
                          rows={4}
                        />
                      </Col>
                    </Row>
                  </div>

                  {/* basic info */}

                  <div>
                    <button
                      className="px-5 py-2 rounded-md bg-[#f14c36] text-white"
                      type="submit"
                    >
                      Submit
                    </button>
                    {/* <Button type="primary">Clear Form</Button> */}
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
