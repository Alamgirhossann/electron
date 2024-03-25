"use client";

import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { adminFormSchema, signupSchema } from "@/schemas/formValidationSchema";
import { useAddAdminWithFormDataMutation } from "@/redux/api/adminApi";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import FormSelectField from "@/components/forms/FormSelectField";
import { adminSchema } from "@/schemas/admin";
import { getUserInfo } from "@/services/auth.service";
import heading_icon from "../../../../../assets/heading_icon.png";
import styles from "../../../../../components/ui/style.module.css";

type FormValues = {
  generalUser: {
    name: {
      firstName: string;
      lastName: string;
      middleName: string;
    };
  };
  email: string;
  password: string;
  gender: string;
  checkbox: boolean;
};
const CreateAdmin = () => {
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
  const [addAdminWithFormData] = useAddAdminWithFormDataMutation();

  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      const res = await addAdminWithFormData({ ...data }).unwrap();
      // console.log(res);
      if (res) {
        router.push("/super_admin/admin-management");
        message.success("Admin created successfully");
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const { role } = getUserInfo() as any;

  if (role !== "super_admin") {
    router.back();
  }

  return (
    <>
      {role !== "super_admin" && (
        <div className="flex justify-center items-center text-red-600 text-3xl h-screen">
          <p>Access Denied</p>
        </div>
      )}
      <div
        className={`md:px-5 md:mx-5 ${
          role !== "super_admin" ? "hidden" : "block"
        }`}
      >
        <h1 className="flex justify-center md:text-[30px] text-xl md:pb-16 md:pt-20 pt-10 pb-8 font-bold">
          <span className={`${styles.customShape}`}>Create</span>
          <span className="ms-3 text-[#f14c36]"> Admin</span>
        </h1>
        <Row
          justify="center"
          align="middle"
          // style={{
          //   minHeight: "100vh",
          //   padding: "0 10px",
          // }}
        >
          <Col sm={24} md={24} lg={14}>
            <div className="mx-1">
              <Form
                submitHandler={onSubmit}
                resolver={yupResolver(adminFormSchema)}
              >
                {/* faculty information */}
                <div
                  className=" shadow-xl md:p-3 mb-3 p-1"
                  style={{
                    border: "1px solid #d9d9d9",
                    borderRadius: "5px",
                    // padding: "15px",
                    // marginBottom: "10px",
                  }}
                >
                  <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                    <Col
                      xs={24}
                      md={8}
                      style={{ margin: "10px 0" }}
                      className="p-0"
                    >
                      <FormInput
                        name="admin.name.firstName"
                        label="First name"
                        size="large"
                      />
                    </Col>

                    <Col xs={24} md={8} style={{ margin: "10px 0" }}>
                      <FormInput
                        name="admin.name.middleName"
                        label="Middle name"
                        size="large"
                      />
                    </Col>

                    <Col xs={24} md={8} style={{ margin: "10px 0" }}>
                      <FormInput
                        name="admin.name.lastName"
                        label="Last name"
                        size="large"
                      />
                    </Col>
                    <Col xs={24} md={8} style={{ margin: "10px 0" }}>
                      <FormInput
                        type="email"
                        name="admin.email"
                        label="Email address"
                        size="large"
                      />
                    </Col>

                    <Col xs={24} md={8} style={{ margin: "10px 0" }}>
                      <FormInput
                        type="password"
                        name="password"
                        label="Password"
                        size="large"
                      />
                    </Col>

                    <Col xs={24} md={8} style={{ margin: "10px 0" }}>
                      <FormSelectField
                        name="admin.gender"
                        label="Gender"
                        options={genderOptions}
                      />
                    </Col>

                    {/* <Col span={8} style={{ margin: "10px 0" }}>
            <UploadImage name="file" />
          </Col> */}
                  </Row>
                </div>

                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="bg-[#f14c36] px-5 py-2 rounded-md text-white"
                  >
                    submit
                  </button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CreateAdmin;
