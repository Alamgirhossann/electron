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
import dayjs from "dayjs";
import {
  useAllBookingsQuery,
  useDeleteBookingMutation,
} from "@/redux/api/bookingApi";
import { getUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";

const AdminBookingPage = () => {
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

  const { data, isLoading } = useAllBookingsQuery({ ...query });

  const booking = data?.booking;
  const meta = data?.meta;

  const [deleteBooking] = useDeleteBookingMutation();

  const handleDelete = (id: any) => {
    deleteBooking(id);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Contact No",
      dataIndex: "contactNo",
    },
    {
      title: "Booking Data",
      dataIndex: "dateOfBooking",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Status",
      dataIndex: "status",
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
      dataIndex: "_id",
      render: function (data: any) {
        return (
          <>
            <Link href="">
              <Button
                className="bg-[#1677ff]"
                style={{
                  margin: "5px",
                }}
                onClick={() => console.log(data)}
                type="primary"
              >
                <EditOutlined />
              </Button>
            </Link>
            <Button
              style={{
                margin: "5px",
              }}
              onClick={() => handleDelete(data)}
              type="primary"
              danger
            >
              <DeleteOutlined />
            </Button>
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
      <div className={`md:p-5 mx-2 ${role === "user" ? "hidden" : "block"}`}>
        <UMBreadCrumb
          items={[
            {
              label: "super_admin",
              link: "/super_admin",
            },
          ]}
        />
        <ActionBar title="Booking List">
          <Input
            size="large"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="md:w-44 w-full"
          />
          <div>
            {/* <Link href="/admin/service/create">
            <Button className="bg-[#1677ff]" type="primary">
              Create Booking
            </Button>
          </Link> */}
            {(!!sortBy || !!sortOrder || !!searchTerm) && (
              <Button
                className="bg-[#1677ff]"
                style={{ margin: "0px 5px" }}
                type="primary"
                onClick={resetFilters}
              >
                <ReloadOutlined />
              </Button>
            )}
          </div>
        </ActionBar>

        <div className=" overflow-x-auto bg-white">
          <UMTable
            loading={isLoading}
            columns={columns}
            dataSource={booking}
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

export default AdminBookingPage;
