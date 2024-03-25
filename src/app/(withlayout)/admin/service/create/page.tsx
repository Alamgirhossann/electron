"use client";

import Form from "@/components/forms/Form";

import FormInput from "@/components/forms/FormInput";

import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import React from "react";
import heading_icon from "../../../../../assets/heading_icon.png";
import { useAddServiceMutation } from "@/redux/api/serviceApi";
import { useRouter } from "next/navigation";
import { getUserInfo } from "@/services/auth.service";
import styles from "../../../../../components/ui/style.module.css";

const CreateService = () => {
  const router = useRouter();
  const [addService] = useAddServiceMutation();

  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      const res = await addService({ ...data }).unwrap();
      // console.log(res);
      if (res) {
        message.success("Service Added successfully");
        router.push("/admin/service");
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };
  const { role } = getUserInfo() as any;

  if (role === "user") {
    router.back();
  }

  return (
    <>
      {role === "user" && (
        <div className="flex justify-center items-center text-red-600 text-3xl h-screen">
          <p>Access Denied</p>
        </div>
      )}
      <div
        className={`md:p- p-1 md:mx-[10rem] ${
          role === "user" ? "hidden" : "block"
        }`}
      >
        <h1 className="flex justify-center md:text-[30px] text-xl md:pb-12 md:pt-12 pt-10 pb-8 font-bold">
          <span className="me-3 text-[#f14c36]"> Add</span>
          <span className={`${styles.customShape}`}>Service</span>
        </h1>

        <div>
          <Form submitHandler={onSubmit}>
            <div
              style={{
                border: "1px solid #d9d9d9",
                borderRadius: "5px",
              }}
              className=" md:p-4 p-1 mb-3"
            >
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col
                  xs={24}
                  md={12}
                  className="gutter-row"
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <FormInput
                    type="text"
                    name="title"
                    size="large"
                    label="Title"
                  />
                </Col>
                <Col
                  xs={24}
                  md={12}
                  className="gutter-row"
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <FormInput
                    type="text"
                    name="description"
                    size="large"
                    label="Description"
                  />
                </Col>
              </Row>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col
                  xs={24}
                  md={12}
                  className="gutter-row"
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <FormInput
                    type="text"
                    name="price"
                    size="large"
                    label="Price"
                  />
                </Col>
                <Col
                  xs={24}
                  md={12}
                  className="gutter-row"
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <FormInput
                    type="text"
                    name="rating"
                    size="large"
                    label="Rating"
                  />
                </Col>
              </Row>
            </div>

            {/* basic info */}

            <div>
              <button
                className="me-3 mb-3 bg-[#f14c36] px-5 py-2 rounded-md text-white"
                type="submit"
              >
                Add
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CreateService;
