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
      label: <Link href={`/`}>Home</Link>,
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
          label: <Link href={`/admin/userProfile`}>User Profile</Link>,
          key: `/admin/userProfile`,
        },
        {
          label: <Link href={`/admin/booking`}>Booking</Link>,
          key: `/admin/booking`,
        },
      ],
    },
    {
      label: <Link href={`/admin/service`}>Service Management</Link>,
      key: `/admin/service`,
      icon: <AppstoreOutlined />,
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    // ...defaultSidebarItems,
    ...adminSidebarItems,
    {
      label: (
        <Link href={`/super_admin/admin-management`}>Admin Management</Link>
      ),
      key: "/super_admin/admin-management",
      icon: <TableOutlined />,
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
  else if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
