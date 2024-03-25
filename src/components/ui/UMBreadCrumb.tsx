import { Breadcrumb } from "antd";
import Link from "next/link";
import React from "react";
import { HomeOutlined } from "@ant-design/icons";

const UMBreadCrumb = ({
  items,
}: {
  items: {
    label: string;
    link: string;
  }[];
}) => {
  const breadCrumbItems = [
    {
      title: (
        <Link href="/">
          <HomeOutlined />
        </Link>
      ),
    },
    ...items.map((item) => {
      return {
        title: item.link ? (
          <Link href={item.link}>{item.label}</Link>
        ) : (
          <span>{item.label}</span>
        ),
      };
    }),
  ];
  return (
    <>
      <div className="text-[#f14c36]">
        {" "}
        <Breadcrumb
          style={{ color: "#f14c36" }}
          items={breadCrumbItems}
        ></Breadcrumb>
      </div>
    </>
  );
};

export default UMBreadCrumb;
