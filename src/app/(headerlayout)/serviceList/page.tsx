"use client";
import { useServicesQuery } from "@/redux/api/serviceApi";
import { Row, Col, Input, Card } from "antd";
import { useState } from "react";
import { Pagination } from "antd";
import { useDebounced } from "@/redux/hooks";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import Link from "next/link";
import Image from "next/image";
import heading_icon from "../../../assets/heading_icon.png";

const ServiceList = () => {
  const pageSizeOptions = ["5", "10", "20", "30", "40", "50"];
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["searchTerm"] = searchTerm;
  query["sortOrder"] = sortOrder;
  const { data, isLoading } = useServicesQuery({ ...query });

  //   const debouncedSearchTerm: any = useDebounced({
  //     searchQuery: searchTerm,
  //     delay: 600,
  //   });

  //   console.log(debouncedSearchTerm);

  //   if (debouncedSearchTerm) {
  //     query["searchTerm"] = debouncedSearchTerm;
  //   }

  const handleChange = (page: number, newPageSize: number) => {
    setPage(page);
    setSize(newPageSize);
  };

  //   const startIndex = (page - 1) * size;
  //   const endIndex = startIndex + size;

  //   const displayedData = data?.service.slice(startIndex, endIndex);
  //   console.log(displayedData);

  //   console.log(data?.service);

  //   const { role } = getUserInfo();

  return (
    <div className="py-10 bg-gray-300 px-5">
      <UMBreadCrumb
        items={[
          //   { label: `${role}`, link: `/${role}` },
          { label: "serviceList", link: `/serviceList` },
        ]}
      />
      <h1 className="flex justify-center text-3xl font-bold mb-4 pt-3">
        <Image src={heading_icon} alt="heading_icon" width={20} height={15} />
        <span className="ms-3">All Services</span>
      </h1>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          {/* Search and Filter Column */}
          <Card title="Search and Filter" className="shadow-xl">
            <Input
              style={{ marginBottom: "10px" }}
              size="large"
              placeholder="Search"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {
              //  <Select
              //   style={{ width: "100%" }}
              //   placeholder="Filter by Category"
              //   onChange={(value) => console.log(value)} // Replace with your filter logic
              // >
              //   <Option value="category1">Category 1</Option>
              //   <Option value="category2">Category 2</Option>
              //   {/* Add more filter options as needed */}
              // </Select>
            }
          </Card>
        </Col>
        <Col xs={24} sm={24} md={16} lg={16} xl={16}>
          {/* Product Card Column */}
          <Row gutter={[16, 16]}>
            {data?.service?.map((product) => (
              <Col xs={24} sm={12} md={8} lg={8} xl={8} key={product.id}>
                <Link href={`/detail/${product.id}`}>
                  <Card className="shadow-xl">
                    <p>Title: {product.title}</p>
                    <p>Description: {product.description}</p>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <div className="flex justify-end my-6">
        {" "}
        <Pagination
          current={page}
          total={data?.meta?.total}
          pageSize={size}
          showSizeChanger
          pageSizeOptions={pageSizeOptions}
          onShowSizeChange={(current, size) => handleChange(1, size)}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default ServiceList;
