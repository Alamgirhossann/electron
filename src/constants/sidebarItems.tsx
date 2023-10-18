import type { MenuProps } from "antd";
import {
  ProfileOutlined,
  TableOutlined,
  AppstoreOutlined,
  ScheduleOutlined,
  ThunderboltOutlined,
  CreditCardOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";

export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/home`}>Home</Link>,
      key: "home",
      icon: <ProfileOutlined />,
    },
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/${role}`}>Account Profile</Link>,
          key: `/${role}`,
        },
        // {
        //   label: <Link href={`/${role}/change-password`}>Change Password</Link>,
        //   key: `/${role}/change-password`,
        // },
      ],
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: "User Management",
      key: "user-management",
      icon: <TableOutlined />,
      children: [
        {
          label: <Link href={`/${role}/userProfile`}>User Profile</Link>,
          key: `/${role}/userProfile`,
        },
        {
          label: <Link href={`/${role}/booking`}>Booking</Link>,
          key: `/${role}/booking`,
        },
      ],
    },
    {
      label: <Link href={`/${role}/service`}>Service Management</Link>,
      key: `/${role}/service`,
      icon: <AppstoreOutlined />,
    },
  ];

  const userSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,

    {
      label: <Link href={`/${role}/booking`}>Booking History</Link>,
      icon: <ProfileOutlined />,
      key: `/${role}/booking`,
    },
  ];

  if (role === USER_ROLE.USER) return userSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
