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
              Admin create information
            </p>
            <Form
              submitHandler={onSubmit}
              resolver={yupResolver(adminFormSchema)}
            >
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
                <Button htmlType="submit">submit</Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default CreateAdmin;
