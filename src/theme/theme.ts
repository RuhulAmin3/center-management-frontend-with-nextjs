import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    colorPrimary: "#FFAE01",
    // colorBgBase: "#042954",

    borderRadius: 2,
  },
  components: {
    Layout: {
      colorPrimary: "#042954",
      // colorBgLayout: "#042954",
      // siderBg: "#042954",
      // triggerBg: "green",
      headerBg: "violet",
    },
    Drawer: {
      colorBgElevated: "black",
      colorText: "white",
      colorIcon: "white",
      colorIconHover: "white",
    },
    Select: {
      colorBgContainer: "#f0f1f3",
      colorBorder: "none",
      // fontSize: 14,
      // paddingContentHorizontal: 0,
    },
    Button: {
      // defaultBg: "#FFAE01",
      defaultColor: "#fff",
      fontWeight: "bold",
      paddingInlineLG: 35,
      textHoverBg: "black",
      colorPrimaryHover: "#042954",
      borderRadiusLG: 5,
    },
  },
};

export default theme;
