"use client";
import { Form, Input, Button, Card } from "antd";
import Image from "next/image";
import heading_icon from "../../../../assets/heading_icon.png";

function PaymentPage() {
  const onFinish = (values: any) => {
    console.log("Payment form values:", values);
  };

  return (
    <div>
      <h1 className="flex justify-center text-3xl font-bold mb-4 pt-3">
        <Image src={heading_icon} alt="heading_icon" width={20} height={15} />
        <span className="ms-3">User Profile</span>
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5rem",
        }}
      >
        {" "}
        <Card className=" shadow-xl">
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

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button className="bg-blue-500" type="primary" htmlType="submit">
                Pay
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default PaymentPage;
