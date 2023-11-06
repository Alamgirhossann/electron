"use client";

import { Button, Col, Row, message } from "antd";
import loginImage from "../../assets/login (1).jpg";
import Image from "next/image";
import { SubmitHandler } from "react-hook-form";
import { storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import Form from "../forms/Form";
import FormInput from "../forms/FormInput";
import Link from "next/link";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { loginSchema } from "@/schemas/formValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import heading_icon from "../../assets/heading_icon.png";

type FormValues = {
  id: string;
  password: string;
};
const LoginPage = () => {
  const [userProfileId, setUserProfileId] = useState<string | null>();
  const router = useRouter();
  const [userLogin] = useUserLoginMutation();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    // console.log(data);
    try {
      const res = await userLogin({ ...data }).unwrap();
      console.log(res);
      if (res?.accessToken) {
        message.success("User logged in successfully");
      }
      storeUserInfo({ accessToken: res?.accessToken });
      setUserProfileId(res?.userProfileId);
      router.push("/home");
    } catch (error: any) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    //@ts-ignore
    localStorage.setItem("userProfileId", userProfileId);
  }, [userProfileId]);
  return (
    <>
      <h1 className="flex justify-center md:mt-20 mt-10 mb-8">
        <Image src={heading_icon} alt="" width={20} height={15} />
        <span className="ms-3 md:text-[40px] text-xl font-bold">Login</span>
      </h1>
      <Row
        justify="center"
        // align="middle"
        // style={{
        //   minHeight: "100vh",
        // }}
      >
        <Col sm={0} md={12} lg={12} className="hidden md:block ">
          <div className="flex justify-center">
            {" "}
            <Image
              src={loginImage}
              alt="login image"
              className="w-[400px] h-[400px]"
            />
          </div>
        </Col>
        <Col sm={24} md={12} lg={12}>
          <div className="border-1 shadow-xl p-10 lg:mx-20 md:mx-10 mx-5 rounded-md md:mt-16 mt-8">
            <Form submitHandler={onSubmit} resolver={yupResolver(loginSchema)}>
              <div>
                <FormInput name="id" type="text" size="large" label="User ID" />
              </div>
              <div
                style={{
                  margin: "15px 0",
                }}
              >
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  label="User Password"
                />
              </div>
              <div className="flex justify-between">
                <Button
                  className="bg-[#1677ff]"
                  type="primary"
                  htmlType="submit"
                >
                  Login
                </Button>
                <Link href="/signup">Signup</Link>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default LoginPage;
