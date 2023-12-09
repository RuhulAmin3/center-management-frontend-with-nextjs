import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../../assets/logo.png";
import Image from "next/image";
import "../../app/globals.css";
import sidebarMenu from "@/app/constants/sidebarMenu";
import { Breadcrumb, Layout, theme } from "antd";

const { Header, Content, Footer } = Layout;

const Navbar = ({ collapsed }: { collapsed: boolean }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
        position: "fixed",
        left: collapsed ? 80 : 250,
        width: "100%",
        transition: "left 0.3s",
        marginBottom: "20px",
      }}
    ></Header>
  );
};
export default Navbar;
