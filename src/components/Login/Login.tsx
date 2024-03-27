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
import googleIcon from "../../assets/icons8-google-48.png";
import styles from "../ui/style.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

type FormValues = {
  id: string;
  password: string;
};
const LoginPage = () => {
  const [userProfileId, setUserProfileId] = useState<string | null>();
  const router = useRouter();
  const [userLogin] = useUserLoginMutation();
  const { data: session }: any = useSession();
  const [formData, setFormData] = useState<{ id: string; password: string }>({
    id: "",
    password: "",
  });

  // Define user data for three different users
  const usersData = [
    { id: "00001", password: "123456", name: "Super Admin" },
    { id: "A-00001", password: "123456", name: "Admin" },
    { id: "mahedi@gmail.com", password: "123456", name: "User" },
  ];

  const handleButtonClick = (userData: { id: string; password: string }) => {
    // Update the form data state with the email and password of the selected user
    setFormData(userData);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // Update the form data state with the new input value
    setFormData({ ...formData, [name]: value });
  };

  const handleClearFields = () => {
    // Clear the input fields
    setFormData({ id: "", password: "" });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    console.log("form data", { id: formData.id, password: formData.password });
    try {
      const res = await userLogin({
        id: formData.id,
        password: formData.password,
      }).unwrap();
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

  useEffect(() => {
    //@ts-ignore
    if (session && session.user) {
      router.push("/");
    }
  }, [session]);

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
          <div className="border-1 shadow-xl p-10 lg:mx-20 md:mx-10 mx-5 rounded-md md:mt-6 mt-8">
            <div className="pb-8">
              {usersData.map((userData, index) => (
                <button
                  className="bg-[#f14c36] px-2 py-1 text-white rounded-md m-1"
                  key={index}
                  onClick={() => handleButtonClick(userData)}
                >
                  {userData.name}
                </button>
              ))}
              <button
                className="bg-[#f14c36] px-2 py-1 text-white rounded-md me-2"
                onClick={handleClearFields}
              >
                Clear Fields
              </button>
            </div>
            <form>
              <div>
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  name="id"
                  value={formData.id}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md focus:outline-none hover:border-[#f14c36]"
                />
                {/* <FormInput
                  name="id"
                  type="text"
                  size="large"
                  label="User ID"
                  value={formData.id}
                  // change={handleInputChange}
                /> */}
              </div>
              <div
                style={{
                  margin: "15px 0",
                }}
              >
                <label htmlFor="">Password</label>

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md focus:outline-none hover:border-[#f14c36]"
                />

                {/* <FormInput
                  name="password"
                  type="password"
                  size="large"
                  label="User Password"
                  value={formData.password}
                  // change={handleInputChange}
                /> */}
              </div>
              <div className="flex justify-between">
                <button
                  onClick={onSubmit}
                  className="bg-[#f14c36] px-5 py-2 rounded-md text-white"
                  type="button"
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
            </form>
            <div>
              <button
                className="w-full py-2 border border-[#f14c36] mt-3 rounded-md flex justify-center items-center active:bg-[#f14c36]"
                onClick={() => signIn()}
              >
                <Image
                  className="w-8 h-8 me-3"
                  src={googleIcon}
                  alt="google Icon"
                />{" "}
                <span className="text-[18px]">Google</span>
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default LoginPage;
