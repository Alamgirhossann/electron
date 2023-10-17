"use client";
import { Layout } from "antd";
import Header from "./Header";
const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  const base = "admin";
  return (
    <>
      <Content className="h-full w-full">
        <div style={{ padding: "0" }}> {children}</div>
      </Content>
    </>
  );
};

export default Contents;
