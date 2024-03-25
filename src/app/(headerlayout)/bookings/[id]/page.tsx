"use client";

import Form from "@/components/forms/Form";
import FormDatePicker from "@/components/forms/FormDatePicker";
import FormInput from "@/components/forms/FormInput";
import FormTextArea from "@/components/forms/FormTextArea";
import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import booking from "../../../../assets/Hotel Booking.gif";
import Link from "next/link";
import { useSingleServiceQuery } from "@/redux/api/serviceApi";
import { useRouter } from "next/navigation";
import { useAddBookingMutation } from "@/redux/api/bookingApi";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookingFormSchema } from "@/schemas/formValidationSchema";
import { getUserInfo } from "@/services/auth.service";
import styles from "../../../../components/ui/style.module.css";

const Bookings = ({ params }: any) => {
  // const [userProfileId, setUserProfileId] = useState<string | null>();
  // console.log(userProfileId);
  const router = useRouter();
  const [addBooking] = useAddBookingMutation();
  const { role, userId } = getUserInfo() as any;

  // useEffect(() => {
  //   //@ts-ignore
  //   setUserProfileId(localStorage.getItem("userProfileId"));
  // }, []);

  if (!role) {
    router.push("/login");
  }
  const onSubmit = async (values: any) => {
    values["serviceId"] = params.id;
    values["userId"] = userId;
    console.log(values);
    try {
      const res = await addBooking({ ...values }).unwrap();

      if (res) {
        message.success("Booking Successfully created!");
        router.push("/user/booking");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const reservation = () => {
    message.success("Your booking added to reservation");
    router.push("/user");
  };

  return (
    <div className="md:px-[5rem] px-2 py-5">
      {!role ? (
        <p>Login Required</p>
      ) : (
        <>
          {" "}
          <h1 className="flex justify-center md:text-[30px] text-xl md:mb-12 md:mt-10 mt-10 mb-8 font-bold">
            <span className={`${styles.customShape} me-3`}>Booking{"  "}</span>
            <span className="text-[#f14c36]"> Form</span>
          </h1>
          <div className="py-5 rounded-md  bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 ">
              <div className="p-4 ">
                <div className="flex justify-center">
                  <Image
                    src={booking}
                    alt=""
                    className="md:h-[400px] md:w-[400px] h-[250]"
                  />
                </div>
              </div>
              <div className="p-4 lg:p-10 text-gray-500">
                <div>
                  <Form
                    submitHandler={onSubmit}
                    resolver={yupResolver(bookingFormSchema)}
                  >
                    <div
                      style={{
                        border: "1px solid #d9d9d9",
                        borderRadius: "5px",
                        padding: "15px",
                        marginBottom: "10px",
                      }}
                    >
                      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        {/* <Col
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
              </Col> */}
                      </Row>
                      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        {/* <Col
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
              </Col> */}
                        <Col
                          xs={24}
                          md={8}
                          className="gutter-row"
                          style={{
                            marginBottom: "10px",
                          }}
                        >
                          <FormInput
                            type="text"
                            name="name"
                            size="large"
                            label="Name"
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

                        <Col xs={24} md={24} style={{ margin: "10px 0" }}>
                          <FormTextArea
                            name="address"
                            label=" Address"
                            rows={4}
                          />
                        </Col>
                      </Row>
                    </div>

                    {/* basic info */}

                    <div>
                      <p className="block md:text-xl text-md my-5">
                        Read out booking{" "}
                        <Link
                          className="text-[#f14c36] hover:text-[#f14c36]"
                          href="/cancelPolicy"
                        >
                          cancel
                        </Link>{" "}
                        policy
                      </p>
                      <button
                        className="me-3 mb-3 bg-[#f14c36] px-5 py-2 text-white rounded-md"
                        type="submit"
                      >
                        Confirm Booking
                      </button>
                      {/* <Button
              onClick={reservation}
              className="bg-[#1677ff]"
              type="primary"
            >
              Booking Reservation
            </Button> */}
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Bookings;
