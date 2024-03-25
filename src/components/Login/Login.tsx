"use client";

import { Button, Col, Row, message } from "antd";
import loginImage from "../../assets/Secure login.gif";
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
import styles from "../ui/style.module.css";

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
      router.push("/");
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
      <h1 className="flex justify-center md:text-[30px] text-xl md:mb-12 md:mt-12 mt-10 mb-8 font-bold">
        <span className={`${styles.customShape} ms-3`}>
          {"  "}
          Login
        </span>
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
                <FormInput
                  name="id"
                  type="text"
                  size="large"
                  label="User ID"
                  color="red"
                />
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
                <button
                  className="bg-[#f14c36] px-5 py-2 rounded-md text-white"
                  type="submit"
                >
                  Login
                </button>
                <Link
                  className="text-[#f14c36] hover:text-[#f14c36] text-md"
                  href="/signup"
                >
                  Signup
                </Link>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default LoginPage;
