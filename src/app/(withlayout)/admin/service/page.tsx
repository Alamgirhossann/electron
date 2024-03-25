"use client";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { Button, Input, message } from "antd";
import Link from "next/link";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useDebounced } from "@/redux/hooks";
import UMTable from "@/components/ui/UMTable";
import { useAdminsQuery } from "@/redux/api/adminApi";
import { IDepartment } from "@/types";
import dayjs from "dayjs";
import {
  useDeleteServiceMutation,
  useServicesQuery,
} from "@/redux/api/serviceApi";
import { getUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";

const ServicePage = () => {
  const router = useRouter();
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }

  const { data, isLoading } = useServicesQuery({ ...query });

  const service = data?.service;
  const meta = data?.meta;

  const [deleteService] = useDeleteServiceMutation();

  const handleDelete = (id: any) => {
    deleteService(id);
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Rating",
      dataIndex: "rating",
    },
    {
      title: "Created at",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },

    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <>
            <Link href={`/admin/service/edit/${data}`}>
              <button
                className="bg-[#f14c36] px-3 py-2 rounded-md text-white me-2"
                onClick={() => console.log(data)}
              >
                <EditOutlined />
              </button>
            </Link>
            <button
              className="bg-[#f14c36] px-3 py-2 rounded-md text-white"
              onClick={() => handleDelete(data)}
            >
              <DeleteOutlined />
            </button>
          </>
        );
      },
    },
  ];
  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  const { role } = getUserInfo() as any;

  if (role === "user") {
    router.back();
  }
  return (
    <>
      {role === "user" && (
        <div className="flex justify-center items-center text-red-600 text-3xl h-screen">
          <p>Access Denied</p>
        </div>
      )}
      <div
        className={`md:px-5 md:py-5 mx-2 ${
          role === "user" ? "hidden" : "block"
        }`}
      >
        <UMBreadCrumb
          items={[
            {
              label: "admin/service",
              link: "/admin/service",
            },
          ]}
        />
        <ActionBar title="Servises List">
          <Input
            size="large"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="md:w-44 w-full"
          />
          <div className="mt-3">
            <Link href="/admin/service/create">
              <button className="bg-[#f14c36] px-5 py-2 rounded-md text-white me-2">
                Create Service
              </button>
            </Link>
            {(!!sortBy || !!sortOrder || !!searchTerm) && (
              <button
                className="bg-[#f14c36] px-5 py-2 rounded-md text-white"
                onClick={resetFilters}
              >
                <ReloadOutlined />
              </button>
            )}
          </div>
        </ActionBar>

        <div className=" overflow-x-auto bg-white">
          <UMTable
            loading={isLoading}
            columns={columns}
            dataSource={service}
            pageSize={size}
            totalPages={meta?.total}
            showSizeChanger={true}
            onPaginationChange={onPaginationChange}
            onTableChange={onTableChange}
            showPagination={true}
          />
        </div>
      </div>
    </>
  );
};

export default ServicePage;
