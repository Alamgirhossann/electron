"use client";
import { Form, Input, Button, Card, message } from "antd";
import Image from "next/image";
import heading_icon from "../../../../assets/heading_icon.png";
import { useRouter } from "next/navigation";
import { getUserInfo } from "@/services/auth.service";

function PaymentPage() {
  const router = useRouter();

  const onFinish = (values: any) => {
    console.log("Payment form values:", values);
    message.success("Your payment is successfully completed");
    router.push("/user/booking");
  };
  const { role } = getUserInfo() as any;

  if (role !== "user") {
    router.back();
  }
  return (
    <>
      {role !== "user" && (
        <div className="flex justify-center items-center text-red-600 text-3xl h-screen">
          <p>Access Denied</p>
        </div>
      )}
      <div className={`p-0 ${role !== "user" ? "hidden" : "block"}`}>
        <h1 className="flex justify-center my-8 md:my-16">
          <Image src={heading_icon} alt="heading_icon" width={20} height={15} />
          <span className="ms-3 md:text-[40px] text-xl font-bold">Payment</span>
        </h1>

        <div className="flex justify-center mx-1">
          <div className="shadow-xl md:w-2/4 w-full px-1 bg-white rounded-md py-3">
            <Form
              name="payment-form"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              onFinish={onFinish}
            >
              <Form.Item
                label="Card Number"
                name="cardNumber"
                rules={[
                  { required: true, message: "Please enter your card number!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Expiry Date"
                name="expiryDate"
                rules={[
                  { required: true, message: "Please enter the expiry date!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="CVV"
                name="cvv"
                rules={[
                  { required: true, message: "Please enter the CVV code!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                wrapperCol={{ span: 24 }}
                className="flex justify-center"
              >
                <Button
                  className="bg-[#1677ff] w-full"
                  type="primary"
                  htmlType="submit"
                >
                  Pay
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentPage;
