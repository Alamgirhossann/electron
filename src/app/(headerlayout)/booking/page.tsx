"use client";

import Form from "@/components/forms/Form";
import FormDatePicker from "@/components/forms/FormDatePicker";
import FormInput from "@/components/forms/FormInput";
import FormSelectField from "@/components/forms/FormSelectField";
import FormTextArea from "@/components/forms/FormTextArea";
import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import React from "react";
import heading_icon from "../../../assets/heading_icon.png";
import Link from "next/link";

const Booking = () => {
  const onSubmit = async (data: any) => {
    console.log(data);

    const key = "booking";

    // Check if the key exists in local storage
    if (localStorage.getItem(key)) {
      // Key exists; merge the new data with the existing data
      //@ts-ignore
      const existingData = JSON.parse(localStorage.getItem(key));

      const updatedData = { ...existingData, ...data };
      localStorage.setItem(key, JSON.stringify(updatedData));
    } else {
      // Key doesn't exist; create a new entry
      localStorage.setItem(key, JSON.stringify(data));
    }
    message.success("Your Booking is confirmed");

    // try {
    //   if (checked) {
    //     const res = await addGeneralUser({ ...data }).unwrap();
    //     // console.log(res);
    //     if (res) {
    //       router.push("/login");
    //       message.success("User signup successfully");
    //     }
    //   } else {
    //     message.warning("Check terms and conditions");
    //   }
    // } catch (error: any) {
    //   console.error(error.message);
    // }
  };
  return (
    <div className="px-5 py-5">
      <h1 className="flex justify-center text-3xl font-bold mb-4 pt-3">
        <Image src={heading_icon} alt="heading_icon" width={20} height={15} />
        <span className="ms-3">Booking Information</span>
      </h1>

      <div>
        <Form submitHandler={onSubmit}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                xs={24}
                md={12}
                className="gutter-row"
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput type="text" name="name" size="large" label="Name" />
              </Col>
              <Col
                xs={24}
                md={12}
                className="gutter-row"
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="price"
                  size="large"
                  label="Price"
                  placeholder="$"
                />
              </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                xs={24}
                md={8}
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="email"
                  name="email"
                  size="large"
                  label="Email address"
                />
              </Col>
              <Col
                xs={24}
                md={8}
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="contactNo"
                  size="large"
                  label="Contact No."
                />
              </Col>

              <Col
                xs={24}
                md={8}
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormDatePicker
                  name="dateOfBooking"
                  label="Date of booking"
                  size="large"
                />
              </Col>

              <Col xs={24} md={8} style={{ margin: "10px 0" }}>
                <FormTextArea name="address" label=" Address" rows={4} />
              </Col>
            </Row>
          </div>

          {/* basic info */}

          <div>
            <p className="block text-xl my-3">
              Read out booking <Link href="/cancelPolicy">cancel</Link> policy
            </p>
            <Button
              className="me-3 mb-3 bg-blue-500"
              htmlType="submit"
              type="primary"
            >
              Confirm Booking
            </Button>
            <Button className="bg-blue-500" htmlType="submit" type="primary">
              Booking Reservation
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Booking;
