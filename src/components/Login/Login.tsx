"use client";

import { Button, Col, Row, message } from "antd";
import loginImage from "../../assets/Privacy policy-rafiki.png";
import Image from "next/image";
import { SubmitHandler } from "react-hook-form";
// import { useUserLoginMutation } from "@/redux/api/authApi";
import { getUserInfo, storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import Form from "../forms/Form";
import FormInput from "../forms/FormInput";
import Link from "next/link";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { loginSchema } from "@/schemas/formValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";

type FormValues = {
  id: string;
  password: string;
};
const LoginPage = () => {
  const router = useRouter();
  const [userLogin] = useUserLoginMutation();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    // console.log(data);
    try {
      const res = await userLogin({ ...data }).unwrap();
      console.log(res);
      if (res?.accessToken) {
        router.push("/home");
        message.success("User logged in successfully");
      }
      storeUserInfo({ accessToken: res?.accessToken });
      localStorage.setItem("userProfileId", res?.userProfileId);
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
        }}
      >
        <Col sm={12} md={16} lg={10} className="hidden md:block">
          <Image src={loginImage} width={500} alt="login image" />
        </Col>
        <Col sm={12} md={8} lg={8}>
          <h1 className="mt-5 text-lg md:text-2xl">First login your account</h1>
          <div className="border-1 shadow-xl p-5 rounded-md">
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
                  className="bg-blue-500"
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
