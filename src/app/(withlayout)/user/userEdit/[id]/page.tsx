"use client";

import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import FormSelectField from "@/components/forms/FormSelectField";
import {
  useSingleGeneralUserQuery,
  useUpdateGeneralUserMutation,
} from "@/redux/api/generalUserApi";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Checkbox, Col, Row, message } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const UserEdit = ({ params }: any) => {
  const genderOptions = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
  ];

  const router = useRouter();
  const { data: generalUserData, isLoading: loading } =
    useSingleGeneralUserQuery(params?.id);
  console.log(generalUserData);
  const [updateGeneralUser] = useUpdateGeneralUserMutation();

  const onSubmit = async (values: any) => {
    console.log(values);
    try {
      const res = await updateGeneralUser({
        id: params?.id,
        body: values,
      }).unwrap();
      console.log(res);
      if (res) {
        message.success("Profile Successfully Updated!");
        router.push("/user/profile");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const defaultValues = {
    name: {
      firstName: generalUserData?.name.firstName || "",
      middleName: generalUserData?.name.middleName || "",
      lastName: generalUserData?.name.lastName || "",
    },

    email: generalUserData?.email || "",
    gender: generalUserData?.gender || "",
  };

  return (
    <>
      <Row
        justify="center"
        align="middle"
        style={{
          minHeight: "100vh",
          padding: "0 10px",
        }}
      >
        <Col sm={24} md={14} lg={14}>
          <div>
            <p
              style={{
                fontSize: "18px",
                fontWeight: "500",
                margin: "5px 0px",
                textAlign: "center",
              }}
            >
              Faculty information
            </p>
            <Form submitHandler={onSubmit} defaultValues={defaultValues}>
              {/* faculty information */}
              <div
                className=" shadow-xl"
                style={{
                  border: "1px solid #d9d9d9",
                  borderRadius: "5px",
                  padding: "15px",
                  marginBottom: "10px",
                }}
              >
                <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                  <Col xs={24} md={8} style={{ margin: "10px 0" }}>
                    <FormInput
                      name="name.firstName"
                      label="First name"
                      size="large"
                    />
                  </Col>

                  <Col xs={24} md={8} style={{ margin: "10px 0" }}>
                    <FormInput
                      name="name.middleName"
                      label="Middle name"
                      size="large"
                    />
                  </Col>

                  <Col xs={24} md={8} style={{ margin: "10px 0" }}>
                    <FormInput
                      name="name.lastName"
                      label="Last name"
                      size="large"
                    />
                  </Col>
                  <Col xs={24} md={8} style={{ margin: "10px 0" }}>
                    <FormInput
                      type="email"
                      name="email"
                      label="Email address"
                      size="large"
                    />
                  </Col>

                  <Col xs={24} md={8} style={{ margin: "10px 0" }}>
                    <FormSelectField
                      name="gender"
                      label="Gender"
                      options={genderOptions}
                    />
                  </Col>
                </Row>
              </div>

              <div className="flex justify-between">
                <Button
                  htmlType="submit"
                  type="primary"
                  className="bg-blue-500"
                >
                  submit
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default UserEdit;
