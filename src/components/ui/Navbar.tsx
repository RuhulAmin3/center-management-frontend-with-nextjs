import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../../assets/logo.png";
import Image from "next/image";
import "../../app/globals.css";
import sidebarMenu from "@/app/constants/sidebarMenu";
import { Menu } from "antd";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <nav className="navbar">
      <Button
        className="menu"
        icon={<MenuOutlined />}
        onClick={() => setVisible(true)}
      />
      <Drawer
        width={300}
        title="Center Management"
        placement="left"
        // onClick={() => setVisible(false)}
        onClose={() => setVisible(false)}
        open={visible}
      >
        <Menu theme="dark" mode="inline" items={sidebarMenu()}>
          {/* {styledTopics} */}
        </Menu>
      </Drawer>
      {/* <a href="/">
        <Image height={25} width={100} src={logo} className="logo" alt="logo" />
      </a> */}
    </nav>
  );
};
export default Navbar;
