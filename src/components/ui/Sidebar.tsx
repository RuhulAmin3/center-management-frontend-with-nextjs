"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { Layout, Menu } from "antd";
import sidebarMenu from "@/app/constants/sidebarMenu";

const { Sider } = Layout;

type SidebarProps = {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
};

const Sidebar = () => {
  return (
    <Sider
      width={300}
      style={{ height: "100vh", marginRight: "24px" }}
      breakpoint={"lg"}
      theme="dark"
      collapsedWidth={0}
      trigger={null}
      collapsible
      // collapsed={collapsed}
      // onCollapse={(value) => setCollapsed(value)}
    >
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={sidebarMenu()}
      >
        {/* {styledTopics} */}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
