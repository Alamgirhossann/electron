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
import Loading from "@/app/loading";
import styles from "../../../components/ui/style.module.css";

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

  return (
    <div className="p-8">
      <div className="text-[#f14c36]">
        <UMBreadCrumb
          items={[
            //   { label: `${role}`, link: `/${role}` },
            { label: "serviceList", link: `/serviceList` },
          ]}
        />
      </div>
      <h1 className="flex justify-center md:text-[30px] text-xl md:mb-12 md:mt-12 mt-10 mb-8 font-bold">
        <span className="text-[#f14c36]">All</span>
        <span className={`${styles.customShape} ms-3`}>
          {"  "}
          Services
        </span>
      </h1>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} className="mb-5">
          <Card
            title="Search and Filter"
            className="shadow-xl c:\Users\HP\Downloads\Electrician.gif "
          >
            <Input
              style={{ marginBottom: "10px" }}
              size="large"
              placeholder="Search"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={16} lg={16} xl={16}>
          {!data && <Loading />}
          {/* Product Card Column */}
          <Row gutter={[16, 16]}>
            {data?.service?.map((product) => (
              <Col xs={24} sm={12} md={8} lg={8} xl={8} key={product.id}>
                <Link href={`/detail/${product.id}`}>
                  <Card className="shadow-xl h-full ">
                    <div className="">
                      <p className="text-[#f14c36] text-[18px] tracking-wide">
                        Title: {product.title}
                      </p>
                      <p>Description: {product.description}</p>
                    </div>
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
