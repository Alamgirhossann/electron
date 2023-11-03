"use client";

import Form from "@/components/forms/Form";
import FormDatePicker from "@/components/forms/FormDatePicker";
import FormInput from "@/components/forms/FormInput";
import FormSelectField from "@/components/forms/FormSelectField";
import FormTextArea from "@/components/forms/FormTextArea";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import heading_icon from "../../../../../../assets/heading_icon.png";
import {
  useSingleServiceQuery,
  useUpdateServiceMutation,
} from "@/redux/api/serviceApi";
import { useRouter } from "next/navigation";

const EditServicePage = ({ params }: any) => {
  const router = useRouter();
  const { data: serviceData, isLoading: loading } = useSingleServiceQuery(
    params?.id
  );
  console.log(serviceData);
  const [updateService] = useUpdateServiceMutation();

  const onSubmit = async (values: any) => {
    console.log(values);
    try {
      const res = await updateService({
        id: params?.id,
        body: values,
      }).unwrap();
      console.log(res);
      if (res?.id) {
        message.success("Service Successfully Updated!");
        router.push("/admin/service");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const defaultValues = {
    title: serviceData?.title || "",
    description: serviceData?.description || "",
    price: serviceData?.price || "",
    rating: serviceData?.rating || "",
  };

  return (
    <div className="md:p-5 p-1  ">
      <h1 className="flex justify-center  md:my-16 my-8">
        <Image src={heading_icon} alt="heading_icon" width={20} height={15} />
        <span className="ms-3 md:text-[40px] text-xl font-bold">
          Update Service
        </span>
      </h1>

      <div>
        <Form submitHandler={onSubmit} defaultValues={defaultValues}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
            }}
            className=" md:p-4 p-1 mb-3"
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
                <FormInput
                  type="text"
                  name="title"
                  size="large"
                  label="Title"
                />
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
                  name="description"
                  size="large"
                  label="Description"
                />
              </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
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
                />
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
                  name="rating"
                  size="large"
                  label="Rating"
                />
              </Col>
            </Row>
          </div>

          {/* basic info */}

          <div>
            <Button
              className="me-3 mb-3 bg-blue-500"
              htmlType="submit"
              type="primary"
            >
              Update
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EditServicePage;
