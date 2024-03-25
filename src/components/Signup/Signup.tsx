"use client";

import { Button, Checkbox, Col, Row, message } from "antd";
import signupImage from "../../assets/Fill out.gif";
import Image from "next/image";
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
import styles from "../ui/style.module.css";
import heading_icon from "../../assets/heading_icon.png";

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
      <h1 className="flex justify-center md:text-[30px] text-xl md:mb-12 md:mt-12 mt-10 mb-8 font-bold">
        <span className={`${styles.customShape} ms-3`}>
          {"  "}
          Signup
        </span>
      </h1>
      <Row justify="center">
        <Col sm={0} md={12} lg={12} className="hidden md:block">
          <div className="flex justify-center">
            <Image
              src={signupImage}
              className="w-[400px] h-[400px]"
              alt="signup image"
            />
          </div>
        </Col>
        <Col sm={24} md={12} lg={12}>
          <div className="border-1 shadow-xl p-10 lg:mx-20 md:mx-10 mx-5 rounded-md">
            <Form submitHandler={onSubmit} resolver={yupResolver(signupSchema)}>
              {/* faculty information */}
              <div
              // className=" shadow-xl"
              // style={{
              //   border: "1px solid #d9d9d9",
              //   borderRadius: "5px",
              //   padding: "15px",
              //   marginBottom: "10px",
              // }}
              >
                <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                  <Col xs={24} md={12} style={{ margin: "10px 0" }}>
                    <FormInput
                      name="generalUser.name.firstName"
                      label="First name"
                      size="large"
                    />
                  </Col>

                  <Col xs={24} md={12} style={{ margin: "10px 0" }}>
                    <FormInput
                      name="generalUser.name.middleName"
                      label="Middle name"
                      size="large"
                    />
                  </Col>

                  <Col xs={24} md={12} style={{ margin: "10px 0" }}>
                    <FormInput
                      name="generalUser.name.lastName"
                      label="Last name"
                      size="large"
                    />
                  </Col>
                  <Col xs={24} md={12} style={{ margin: "10px 0" }}>
                    <FormInput
                      type="email"
                      name="generalUser.email"
                      label="Email address"
                      size="large"
                    />
                  </Col>

                  <Col xs={24} md={12} style={{ margin: "10px 0" }}>
                    <FormInput
                      type="password"
                      name="password"
                      label="Password"
                      size="large"
                    />
                  </Col>

                  <Col xs={24} md={12} style={{ margin: "10px 0" }}>
                    <FormSelectField
                      name="generalUser.gender"
                      label="Gender"
                      options={genderOptions}
                    />
                  </Col>

                  {/* <Col span={8} style={{ margin: "10px 0" }}>
            <UploadImage name="file" />
          </Col> */}
                  <div className="lg:ms-[5px] md:ms-[10px] ms-3">
                    <Checkbox name="checkbox" onChange={onChange}>
                      Accept our{" "}
                      <Link
                        className="text-[#f14c36] hover:text-[#f14c36]"
                        href="/policy "
                      >
                        Policy
                      </Link>
                    </Checkbox>
                  </div>
                </Row>
              </div>

              <div className="flex justify-between mt-5">
                <button
                  type="submit"
                  className="bg-[#f14c36] px-5 py-2 rounded-md text-white"
                >
                  submit
                </button>
                <Link
                  className="text-[#f14c36] hover:text-[#f14c36]"
                  href="/login"
                >
                  Login
                </Link>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default SignupPage;
