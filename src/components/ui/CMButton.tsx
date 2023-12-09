import { Button } from "antd";
import React from "react";

type ButtonPropsType = {
  text: string;
  style?: Record<string, any>;
  type?: "button" | "submit" | "reset";
};

const CMButton = ({ text, style, type }: ButtonPropsType) => {
  return (
    <Button
      htmlType={type ? type : "button"}
      type="primary"
      size="large"
      style={style}
    >
      {text}
    </Button>
  );
};

export default CMButton;
