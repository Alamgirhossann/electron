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
        className={`md:px-5 md:py-5 ${role === "user" ? "hidden" : "block"}`}
      >
        <h1 className="flex justify-center text-xl md:text-3xl font-bold mb-4 pt-3">
          <Image src={heading_icon} alt="heading_icon" width={20} height={15} />
          <span className="ms-3">Add Service</span>
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
              <Button
                className="me-3 mb-3 bg-blue-500"
                htmlType="submit"
                type="primary"
              >
                Add
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CreateService;
