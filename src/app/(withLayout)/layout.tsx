"use client";
import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, theme } from "antd";
import React, { useState } from "react";
const { Header } = Layout;

type MainLayoutProps = {
  children: React.ReactNode | React.ReactElement;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  // const [collapsed, setCollapsed] = useState(false);
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();
  return (
    <div>
      <Navbar />
      {/* <Header style={{ padding: 0, background: colorBgContainer }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
      </Header> */}
      <Layout>
        <Sidebar />
        <Layout.Content style={{ padding: "1rem" }}>{children}</Layout.Content>
      </Layout>
    </div>
  );
};

export default MainLayout;
