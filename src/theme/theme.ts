import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    colorPrimary: "#52c41a",
    borderRadius: 2,
  },
  components: {
    Drawer: {
      colorBgElevated: "black",
      colorText: "white",
      colorIcon: "white",
      colorIconHover: "white",
    },
    Select: {
      colorBgContainer: "#f0f1f3",
      colorBorder: "none",
    },
  },
};

export default theme;
