"use client";
import React, { useState } from "react";

import { Layout, theme } from "antd";
import Sidebar from "@/components/ui/Sidebar";
import Navbar from "@/components/ui/Navbar";

const { Content, Footer } = Layout;

type PropsType = {
  children: React.ReactNode | React.ReactElement;
};

const MainLayout = ({ children }: PropsType) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{}}>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout
        style={{
          marginLeft: collapsed ? 80 : 250,
          transition: "margin-left 0.3s",
        }}
      >
        <Navbar collapsed={collapsed} />
        <Content
          style={{
            minHeight: "85vh",
            margin: "24px 16px 0",
            overflow: "initial",
            marginTop: "80px",
          }}
        >
          {/* <TitleBar title="Admin Dashboard">
            <CMBreadCrumb items={[]} />
          </TitleBar> */}

          <div
            style={{
              padding: 24,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Center Management Website ©2023 Created by Ruhul Amin
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
