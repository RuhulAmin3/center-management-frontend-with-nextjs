"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import collpasedLogo from "../../assets/collapse-logo.png";
import { Layout, Menu, theme } from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import sidebarMenu from "@/app/constants/sidebarMenu";

const { Sider } = Layout;

type SidebarProps = {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
};

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const Sidebar = ({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Sider
      width={250}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={{ position: "fixed", height: "100vh", zIndex: 1 }}
    >
      <div
        className=""
        style={{
          color: "white",
          textAlign: "center",
          padding: "6px 0px",
          background: "orange",
        }}
      >
        <Image
          src={collapsed ? collpasedLogo : Logo}
          height={0}
          width={0}
          style={{ width: "80%" }}
          alt="logo"
        />
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarMenu()}
      />
    </Sider>
  );
};

export default Sidebar;
