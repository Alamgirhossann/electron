"use client";

import { Button, Checkbox, Col, Row, message } from "antd";
import loginImage from "../../assets/Privacy policy-rafiki.png";
import Image from "next/image";
import { SubmitHandler } from "react-hook-form";
// import { useUserLoginMutation } from "@/redux/api/authApi";
import { getUserInfo, storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import Form from "../forms/Form";
import FormInput from "../forms/FormInput";
import Link from "next/link";
import FormSelectField from "../forms/FormSelectField";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "@/schemas/formValidationSchema";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { useState } from "react";
import { useAddGeneralUserMutation } from "@/redux/api/generalUserApi";

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
const SignupPage = () => {
  const [checked, setChecked] = useState(false);
  console.log(checked);
  const onChange = (e: CheckboxChangeEvent) => {
    setChecked(!checked);
  };
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
  const [addGeneralUser] = useAddGeneralUserMutation();

  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      if (checked) {
        const res = await addGeneralUser({ ...data }).unwrap();
        // console.log(res);
        if (res) {
          router.push("/login");
          message.success("User signup successfully");
        }
      } else {
        message.warning("Check terms and conditions");
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
        <Col sm={24} md={10} lg={10}>
          <Image src={loginImage} width={500} alt="login image" />
        </Col>
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
            <Form submitHandler={onSubmit} resolver={yupResolver(signupSchema)}>
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
                      name="generalUser.name.firstName"
                      label="First name"
                      size="large"
                    />
                  </Col>

                  <Col xs={24} md={8} style={{ margin: "10px 0" }}>
                    <FormInput
                      name="generalUser.name.middleName"
                      label="Middle name"
                      size="large"
                    />
                  </Col>

                  <Col xs={24} md={8} style={{ margin: "10px 0" }}>
                    <FormInput
                      name="generalUser.name.lastName"
                      label="Last name"
                      size="large"
                    />
                  </Col>
                  <Col xs={24} md={8} style={{ margin: "10px 0" }}>
                    <FormInput
                      type="email"
                      name="generalUser.email"
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
                      name="generalUser.gender"
                      label="Gender"
                      options={genderOptions}
                    />
                  </Col>

                  {/* <Col span={8} style={{ margin: "10px 0" }}>
            <UploadImage name="file" />
          </Col> */}
                  <Checkbox name="checkbox" onChange={onChange}>
                    Accept our <Link href="/policy">Policy</Link>
                  </Checkbox>
                </Row>
              </div>

              <div className="flex justify-between">
                <Button htmlType="submit">submit</Button>
                <Link href="/login">Login</Link>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default SignupPage;
