"use client";

import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import FormSelectField from "@/components/forms/FormSelectField";

import {
  useSingleSuperAdminQuery,
  useSuperAdminsQuery,
  useUpdateSuperAdminsMutation,
} from "@/redux/api/superAdmin";
import { Button, Checkbox, Col, Row, message } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import heading_icon from "../../../../../assets/heading_icon.png";

const EditProfile = ({ params }: any) => {
  console.log(params.id);
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
  const { data } = useSingleSuperAdminQuery(params.id);
  const [updateSuperAdmins] = useUpdateSuperAdminsMutation();
  console.log(data);
  const onSubmit = async (values: any) => {
    values["id"] = data.id;
    console.log(values);
    try {
      const res = await updateSuperAdmins({
        id: params?.id,
        body: values,
      }).unwrap();
      console.log(res);
      if (res) {
        message.success("Profile Successfully Updated!");
        router.push("/super_admin");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const defaultValues = {
    name: {
      firstName: data?.name.firstName || "",
      middleName: data?.name.middleName || "",
      lastName: data?.name.lastName || "",
    },

    email: data?.email || "",
    gender: data?.gender || "",
  };

  return (
    <>
      <h1 className="flex justify-center  md:my-16 my-8">
        <Image src={heading_icon} alt="heading_icon" width={20} height={15} />
        <span className="ms-3 md:text-[40px] text-xl font-bold">
          Update Information
        </span>
      </h1>
      <Row
        justify="center"
        align="middle"
        style={{
          padding: "0 10px",
        }}
      >
        <Col sm={24} md={14} lg={14}>
          <div>
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

              <div className="my-5">
                <Button
                  htmlType="submit"
                  type="primary"
                  className="bg-[#1677ff]"
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

export default EditProfile;
